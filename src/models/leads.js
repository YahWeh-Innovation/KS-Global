import mongoose from "mongoose";

const leadsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    companyName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    phoneNumber: {
      code: {
        type: String,
        default: "91",
        trim: true,
      },
      number: {
        type: String,
        trim: true,
        required: true,
      },
    },
    country: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Leads || mongoose.model("Leads", leadsSchema);
