const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  offerType: {
    type: String,
    enum: ['flat', 'percentage', 'free'],
    required: true,
  },
  discountValue: { type: Number },
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;
