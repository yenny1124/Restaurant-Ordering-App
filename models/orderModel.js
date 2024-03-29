import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        customer: {
            type: String,
            required: true,
            maxlength: 60,
        },
        address: {
            type: String,
            required: true,
            maxlength: 200,
        },
        total: {
            type: Number,
            required: true,
        },
        status: {
            type: Number,
            default: 0,
        },
        method: {
            type: Number,
            required: true
        },
    },
    { timestamps: true }
);

const OrderModel = mongoose.model("Order", orderSchema);
module.exports = OrderModel;