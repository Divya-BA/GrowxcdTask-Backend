const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  photos: { type: String, required: true },
  rating:{type:String}
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
