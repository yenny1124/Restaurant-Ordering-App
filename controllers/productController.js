const ProductModel = require('../models/productModel')
const CategoryModel = require('../models/categoryModel'); // Adjust the path as necessary

// Function to get all categories
module.exports.getCategories = async (req, res) => {
    try {
        const categories = await CategoryModel.find({});
        res.status(200).json(categories);
    } catch (err) {
        console.error("Error fetching categories:", err);
        res.status(500).json({ error: err.message, msg: "Something went wrong!" });
    }
};

// Function to create a new category
module.exports.createCategory = async (req, res) => {
    try {
        const { name } = req.body;

        const categoryExists = await CategoryModel.findOne({ name });
        if (categoryExists) {
            return res.status(400).json({ message: "Category already exists" });
        }

        const category = new CategoryModel({ name });
        const savedCategory = await category.save();

        res.status(201).json(savedCategory);
    } catch (err) {
        res.status(500).json({ message: "An error occurred while creating the category", error: err });
    }
};

// Function to get products by category ID
module.exports.getProductsByCategoryID = async (req, res) => {
    try {
        const categoryId = req.params.categoryId; // Access the categoryId provided in the route parameter

        // Find all products that have a category field equal to categoryId
        const products = await ProductModel.find({ category: categoryId });

        if (!products.length) {
            return res.status(404).json({ message: "No products found for this category." });
        }

        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products by category ID:", error);
        res.status(500).json({ message: "Failed to fetch products by category ID", error: error.message });
    }
};

// Function to get a single category by its ID
module.exports.getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await CategoryModel.findById(id);

        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.status(200).json(category);
    } catch (err) {
        console.error("Error fetching category by ID:", err);
        res.status(500).json({ error: err.message, msg: "Something went wrong!" });
    }
};

// Function to update a category by its ID
module.exports.updateCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const updatedCategory = await CategoryModel.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.status(200).json(updatedCategory);
    } catch (err) {
        console.error("Error updating category by ID:", err);
        res.status(500).json({ error: err.message, msg: "Something went wrong!" });
    }
};

// Function to delete a single category by its ID
module.exports.deleteCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await CategoryModel.findByIdAndDelete(id);

        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.status(200).json({ message: "Category deleted successfully" });
    } catch (err) {
        console.error("Error deleting category by ID:", err);
        res.status(500).json({ error: err.message, msg: "Something went wrong!" });
    }
};


// get all products from DB
module.exports.getProducts = async (req, res) => {
    const products = await ProductModel.find()
    res.send(products)
}

// Function to get a single product by its ID
module.exports.getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await ProductModel.findById(id);

        if (!product) {
            return res.status(404).send({ message: "Product not found" });
        }

        res.status(200).send(product);
    } catch (err) {
        console.error("Error fetching product by ID:", err);
        res.status(500).send({ error: err.message, msg: "Something went wrong!" });
    }
}

// create a product by category
module.exports.createProductByCategory = async (req, res) => {
    const { name, desc, img, prices, categoryName } = req.body;

    try {
        // Find the category by its name
        const category = await CategoryModel.findOne({ name: categoryName });
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        // Create a new product with the category's _id
        const newProduct = new ProductModel({
            name,
            desc,
            img,
            prices,
            category: category._id // Assign the category's _id here
        });

        // Save the new product
        await newProduct.save();
        res.status(201).json({ message: "Product created successfully", newProduct });
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ message: "Failed to create product", error: error.message });
    }
}

// update a product
module.exports.updateProduct = (req, res) => {
    const { id } = req.params;
    // Update to directly use req.body for the update
    ProductModel.findByIdAndUpdate(id, req.body, { new: true }) // Added { new: true } to return the updated document
        .then((updatedProduct) => {
            if (!updatedProduct) {
                return res.status(404).send({ message: "Product not found" });
            }
            res.send(updatedProduct);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({ error: err, msg: "Something went wrong!" });
        });
};

// delete a product
module.exports.deleteProduct = (req, res) => {
    const { id } = req.params

    ProductModel.findByIdAndDelete(id)
        .then(() => res.send("Deleted successfully"))
        .catch((err) => {
            console.log(err)
            res.send({ error: err, msg: "Something went wrong!" })
        })
}

