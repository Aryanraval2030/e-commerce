import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },

    brand: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    color: {
      type: String,
      required: true,
    },

    ram: {
      type: String,
      required: true,
    },

    storage: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      default: 4,
      min: 0,
      max: 5,
    },

    display: String,
    battery: String,
    camera: String,
    processor: String,

    images: [
      {
        url: {
          type: String,
          required: true,
        },
        alt: String,
      },
    ],

    stock: {
      type: Number,
      default: 0,
    },

    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // seller user
    },

    category: {
      type: String,
      default: "mobile",
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const Product = mongoose.model("Product", productSchema);

// //user schemaa
// const userSchema = new Schema({
//   name: String,
//   email: String,
//   password: String,
// });

// export const userAuth = mongoose.model("userIdenty", userSchema);

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["admin", "seller", "buyer"], //only 3 role allow in this site 
      default: "buyer",
    },
  },
  {
    timestamps: true,//automatically 2 fields add hoti hain // use for tracking 
  },
);

export const userAuth = mongoose.model("userIdenty", userSchema);
