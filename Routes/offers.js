const express = require('express');
const router = express.Router();
const Offer = require('../Models/offer');

// Get all offers
router.get('/', async (req, res) => {
  try {
    const offers = await Offer.find();
    res.json(offers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new offer
router.post('/', async (req, res) => {
  const offer = new Offer({
    product: req.body.product,
    offerType: req.body.offerType,
    discountValue: req.body.discountValue,
    freeProduct: req.body.freeProduct,
  });

  try {
    const newOffer = await offer.save();
    res.status(201).json("successfully added");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
