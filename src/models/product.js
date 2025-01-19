import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      lowercase: true,
      unique: true,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "Spices",
        "Nuts",
        "Agricultural Products",
        "Sweetners",
        "Lintels And Beans",
        "Others",
      ],
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    benefits: [
      {
        title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
      },
    ],
    usage: [
      {
        type: {
          type: String,
          required: true,
        },
      },
    ],
    images: [
      {
        url: {
          type: String,
          required: [true, "Image URL is required"],
          match: /^(http|https):\/\/[^\s$.?#].[^\s]*$/,
        },
      },
    ],
    pricing: {
      type: Number,
      required: true,
      min: 0,
    },
    ratings: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    isPopular: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
