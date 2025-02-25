import Product from "../../../models/product";
import dbConnect from "../../../lib/dbConnect";

export default async function handler(req, res) {
  await dbConnect();

  try {
    const {
      category,
      isPopular,
      rating,
      minPrice,
      maxPrice,
      sortBy,
      limit,
      page,
    } = req.query;

    const filter = {};
    if (category) filter.category = category;
    if (isPopular) filter.isPopular = isPopular === "true";
    if (rating) filter.rating = { $gte: Number(rating) };
    if (minPrice || maxPrice) {
      filter.pricing = {};
      if (minPrice) filter.pricing.$gte = Number(minPrice);
      if (maxPrice) filter.pricing.$lte = Number(maxPrice);
    }

    const itemsPerPage = Number(limit) || 12;
    const currentPage = Number(page) || 1;
    const skip = (currentPage - 1) * itemsPerPage;

    const sortOptions = {};
    if (sortBy) {
      const [field, order] = sortBy.split(":");
      sortOptions[field] = order === "desc" ? -1 : 1;
    } else {
      sortOptions.createdAt = 1;
    }

    const products = await Product.find(filter)
      .select("name slug category images")
      .sort(sortOptions)
      .skip(skip)
      .limit(itemsPerPage);

    const totalProducts = await Product.countDocuments(filter);

    res.status(200).json({
      success: true,
      data: products.map((product) => ({
        name: product.name,
        slug: product.slug,
        category: product.category,
        images: product.images ? product.images[0] : null,
      })),
      pagination: {
        totalProducts,
        itemsPerPage,
        currentPage,
        totalPages: Math.ceil(totalProducts / itemsPerPage),
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch products.",
      error: error.message,
    });
  }
}
