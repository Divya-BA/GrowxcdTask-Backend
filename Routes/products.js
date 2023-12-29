const express = require('express');
const router = express.Router();
const Product = require('../Models/product');

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new product
router.post('/', async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    rating:req.body.rating,
    photos:req.body.photos,
  });

  try {
    const newProduct = await product.save();
    res.status(201).json("successfully added");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});



module.exports = router;
