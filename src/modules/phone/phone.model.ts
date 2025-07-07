import mongoose, { Schema } from "mongoose";
import { TPhone } from "./phone.interface";

const phoneSchema = new Schema<TPhone>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    marketStatus: {
      type: String,
      enum: ["In Stock", "Out of Stock", "Coming Soon"],
      default: "In Stock",
    },
    releaseDate: { type: Date, required: true },
    updatedOn: { type: Date, required: true },
    isOfficial: { type: Boolean, default: true },
    price: { type: Number, required: true },
    previousPrice: { type: Number, required: false },
    countInStock: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
    isDeleted: { type: Boolean, default: false },

    specifications: {
      os: { type: String },
      storage: { type: String },
      ram: { type: String },
      mainCamera: { type: String },
      frontCamera: { type: String },
      display: { type: String },
      battery: { type: String },
      fingerprintSensor: { type: String },
      charging: { type: String },
      protection: { type: String },
      connectivity: { type: String },
      glassProtection: { type: String },
    },
  },
  { timestamps: true }
);

const Phone = mongoose.model<TPhone>('Phone', phoneSchema);
export default Phone;
