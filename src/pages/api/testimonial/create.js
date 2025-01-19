import dbConnect from "../../../lib/dbConnect";
import Testimonial from "../../../models/testimonial";

export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const { image, description, author, role } = req.body;

        if (!image || !description || !author || !role) {
          return res.status(400).json({
            success: false,
            message: "All fields (image, description, author, role) are required.",
          });
        }
        const newTestimonial = new Testimonial({
          image,
          description,
          author,
          role,
        });

        await newTestimonial.save();
        res.status(201).json({
          success: true,
          message: "Testimonial created successfully!",
          data: newTestimonial,
        });
      } catch (error) {
        console.error("Error creating testimonial:", error);
        res.status(500).json({
          success: false,
          message: "Server error while creating testimonial.",
        });
      }
      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).json({
        success: false,
        message: `Method ${method} Not Allowed`,
      });
      break;
  }
}