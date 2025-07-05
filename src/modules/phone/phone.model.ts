import mongoose, { Schema } from "mongoose";
import { IPhone } from "./phone.interface";

const phoneSchema = new Schema<IPhone>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
    isDeleted: {type: Boolean,default: false,},
  },
  { timestamps: true }
);

const Phone = mongoose.model<IPhone>('Phone', phoneSchema);
export default Phone;