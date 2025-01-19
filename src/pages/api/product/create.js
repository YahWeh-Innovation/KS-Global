import Product from "../../../models/product";
import dbConnect from "../../../lib/dbConnect";

export default async function handler(req, res) {
  await dbConnect();
  try {
    if (req.method !== "POST") {
      return res.status(405).json({
        success: false,
        message: "Method not allowed. Use POST.",
      });
    }
    const {
      name,
      category,
      description,
      benefits,
      usage,
      images,
      pricing,
      ratings,
      isPopular,
      isActive,
    } = req.body;
    if (
      !name ||
      !category ||
      !description ||
      !pricing ||
      !Array.isArray(images) ||
      images.length === 0
    ) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields.",
      });
    }

    let slug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    const existingSlugs = await Product.find({
      slug: { $regex: `^${slug}` },
    }).select("slug");
    if (existingSlugs.length > 0) {
      const slugNumbers = existingSlugs
        .map((product) => {
          const match = product.slug.match(new RegExp(`${slug}-(\\d+)$`));
          return match ? parseInt(match[1]) : 0;
        })
        .filter((num) => num !== 0);

      const nextNumber =
        slugNumbers.length > 0 ? Math.max(...slugNumbers) + 1 : 1;
      slug = `${slug}-${nextNumber}`;
    }

    const product = new Product({
      name,
      slug,
      category,
      description,
      benefits,
      usage,
      images,
      pricing,
      ratings,
      isPopular,
      isActive,
    });

    const savedProduct = await product.save();

    res.status(201).json({
      success: true,
      message: "Product created successfully.",
      data: savedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create product.",
      error: error.message,
    });
  }
}
