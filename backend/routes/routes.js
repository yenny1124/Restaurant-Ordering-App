const { Router } = require("express")
// Add saveProduct and deleteProduct to the imported functions
const { getProducts, getProductById, createProductByCategory, updateProduct, deleteProduct } = require("../controllers/productController");
const { getCategories, createCategory, getCategoryById, updateCategoryById, deleteCategoryById } = require('../controllers/productController');
const { getProductsByCategoryID } = require('../controllers/productController');
const router = Router()

router.get('/get/categories', getCategories);
router.post('/save/category', createCategory);
router.get('/get/category/:id', getCategoryById);
router.put('/update/category/:id', updateCategoryById);
router.delete('/delete/category/:id', deleteCategoryById);

router.get('/get/products/category/:categoryId', getProductsByCategoryID);

router.get("/get/products", getProducts)
router.get("/get/product/:id", getProductById);
router.post("/save/product", createProductByCategory)
router.put("/update/product/:id", updateProduct)
router.delete("/delete/product/:id", deleteProduct)

module.exports = router;
