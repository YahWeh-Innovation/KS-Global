import dbConnect from "../../../lib/dbConnect";
import Testimonial from "../../../models/testimonial";

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const testimonials = await Testimonial.find();
        res.status(200).json({
          success: true,
          message: "Testimonials fetched successfully!",
          data: testimonials,
        });
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        res.status(500).json({
          success: false,
          message: "Server error while fetching testimonials.",
        });
      }
      break;

    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).json({
        success: false,
        message: `Method ${method} Not Allowed`,
      });
      break;
  }
}