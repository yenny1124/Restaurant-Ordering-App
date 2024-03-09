const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true, // Assuming each category name is unique
    }
});

const CategoryModel = mongoose.model("Category", categorySchema);
module.exports = CategoryModel;