const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 60,
    },
    desc: {
        type: String,
        required: true,
        maxlength: 200,
    },
    img: {
        type: String,
        required: true,
    },
    prices: {
        type: [Number],
        required: true,
    },

    // Add a reference to CategoryModel
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category', // Ensure this matches your Category model's name
        required: true,
    },
},
    { timestamps: true }
)


const ProductModel = mongoose.model("Product", productSchema)
module.exports = ProductModel;
