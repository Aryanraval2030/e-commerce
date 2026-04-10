import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  name: String,
  brand: String,
  price: String,
  ram: String,
  storage: String,
  color: String,
});

export const mobilePro = mongoose.model("products", productSchema);
