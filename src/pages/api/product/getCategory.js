import Product from "../../../models/product";
import dbConnect from "../../../lib/dbConnect";

export default async function handler(req, res) {
  await dbConnect();

  try {
    const productsByCategory = await Product.aggregate([
      {
        $match: {
          isPopular: true,
          isActive: true,
        },
      },
      {
        $sort: { ratings: -1 },
      },
      {
        $group: {
          _id: "$category",
          product: {
            $first: {
              name: "$name",
              slug: "$slug",
              category: "$category",
              image: { $arrayElemAt: ["$images.url", 0] },
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          category: "$_id",
          name: "$product.name",
          slug: "$product.slug",
          image: "$product.image",
        },
      },
    ]);

    res.status(200).json({
      success: true,
      data: productsByCategory,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch products by category.",
      error: error.message,
    });
  }
}
