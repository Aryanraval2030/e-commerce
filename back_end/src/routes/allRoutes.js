import express from "express";
import {
  addProduct,
  allDataupdate,
  deleteProducts,
  searchProducts,
} from "../controllers/productController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import authRoutes from "./authRoutes.js";

const router = express.Router();
router.use("/auth", authRoutes);
router.post("/products", addProduct);
router.get("/products", searchProducts);
router.put("/products/:id", allDataupdate);
router.delete("/products/:id", deleteProducts);

// router.get("/products", authMiddleware, (req, res) => {
//   res.json({
//     message: "Authorized user",
//     user: req.user,
//   });
// });
export default router;
