import mongoose, { Schema, Types, model } from "mongoose";
// schema
export const brandSchema = new Schema(
  {
  name: { type: String, required: true, min: 4, max: 15 }, // Mobile Phone
  slug: { type: String, required: true }, // mobile-phone
  image: { 
    url: { type: String, required: true },
    id: { type: String, required: true}
  },
  createdBy: { type: Types.ObjectId, ref: "User", required: true },
}, { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } })



// model 
export const Brand = mongoose.models.Brand || model("Brand", brandSchema)