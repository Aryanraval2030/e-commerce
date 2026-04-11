import mongoose, { Schema } from "mongoose";

// products schema
const productSchema = new Schema({
  name: String,
  brand: String,
  price: String,
  ram: String,
  storage: String,
  color: String,
});

export const mobilePro = mongoose.model("products", productSchema);

//user schemaa
const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

export const userAuth = mongoose.model("userIdenty", userSchema);
