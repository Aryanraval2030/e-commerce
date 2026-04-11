import express from "express";
import {
  addProduct,
  allDataupdate,
  deleteProducts,
  searchProducts,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/products", addProduct);
router.get("/products", searchProducts);
router.put("/products/:id", allDataupdate);
router.delete("/products/:id", deleteProducts);

export default router;
