import Product from "../../../models/product";
import dbConnect from "../../../lib/dbConnect";

export default async function handler(req, res) {
  await dbConnect();

  try {
    const { category, isPopular, rating, minPrice, maxPrice, limit, page } =
      req.query;

    const filter = {};

    if (category) {
      const categories = Array.isArray(category)
        ? category
        : category.split(",");
      filter.category = { $in: categories };
    }

    if (isPopular) filter.isPopular = isPopular === "true";
    if (rating) filter.rating = { $gte: Number(rating) };
    if (minPrice || maxPrice) {
      filter.pricing = {};
      if (minPrice) filter.pricing.$gte = Number(minPrice);
      if (maxPrice) filter.pricing.$lte = Number(maxPrice);
    }

    const itemsPerPage = Number(limit) || 40;
    const currentPage = Number(page) || 1;
    const skip = (currentPage - 1) * itemsPerPage;

    const totalProductsCount = await Product.countDocuments(filter);

    const products = await Product.find(filter)
      .select("name slug category images")
      .skip(skip)
      .limit(itemsPerPage);
    res.status(200).json({
      success: true,
      totalProducts: totalProductsCount,
      data: products.map((product) => ({
        name: product.name,
        slug: product.slug,
        category: product.category,
        images: product.images ? product.images[0] : null,
      })),
      pagination: {
        totalProducts: totalProductsCount,
        itemsPerPage,
        currentPage,
        totalPages: Math.ceil(totalProductsCount / itemsPerPage),
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
