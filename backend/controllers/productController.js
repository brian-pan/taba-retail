import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// @description   Fetch/Get all products
// @route         GET /api/products
// @access        Public
const getProducts = async (req, res) =>
  asyncHandler(async (req, res) => {
    const products = await Product.find({}); // get all
  });

// @description   Fetch/Get a product
// @route         GET /api/products/:id
// @access        Public
const getProductById = async (req, res) =>
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id); //from /:id

    if (product) {
      return res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  });

export { getProducts, getProductById };
