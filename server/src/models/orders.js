const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    totalPrice: { type: Number, required: true },
    status: { type: String, default: 'pending' },
    products: []
}, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema);
