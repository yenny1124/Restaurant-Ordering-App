const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    billingAddress: { type: String, required: true },
    cardNumber: { type: String, required: true },
    expiryDate: { type: String, required: true },
    cvv: { type: String, required: true },
    pickUpDateTime: { type: Date, required: true },
    items: [{
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true },
        additionalDetails: { type: String, required: false } // Optional field for additional details
    }],
    total: { type: Number, required: true },
}, { timestamps: true });

const OrderModel = mongoose.model("Order", orderSchema);
module.exports = OrderModel;