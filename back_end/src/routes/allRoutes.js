import express from "express";
import {
  addProduct,
  searchProducts,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/products", addProduct);
router.get("/products", searchProducts);
router.put("/products", allDataupdate)

export default router;
