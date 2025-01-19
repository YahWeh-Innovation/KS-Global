import Product from "../../../models/product";
import dbConnect from "../../../lib/dbConnect";

export default async function handler(req, res) {
  await dbConnect();

  try {
    const { slug } = req.query;
    if (slug) {
      const product = await Product.findOne({ slug });
      if (!product) {
        return res.status(404).json({
          success: false,
          message: "Product not found.",
        });
      }
      return res.status(200).json({
        success: true,
        data: product,
      });
    }
    return res.status(400).json({
      success: false,
      message: "Slug is required to fetch product details.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch product details.",
      error: error.message,
    });
  }
}
