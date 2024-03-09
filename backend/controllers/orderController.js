const OrderModel = require('../models/orderModel')

// POST endpoint to create a new order
module.exports.createOrder = async (req, res) => {
    try {
        // Create a new order using the request body
        const newOrder = new OrderModel({
            customerName: req.body.customerName,
            billingAddress: req.body.billingAddress,
            cardNumber: req.body.cardNumber,
            expiryDate: req.body.expiryDate,
            cvv: req.body.cvv,
            pickUpDateTime: req.body.pickUpDateTime,
            items: req.body.items,
            total: req.body.total,
        });

        console.log(newOrder); // Inspect the mongoose model instance
        // Save the order to the database
        await newOrder.save();

        // Send back the created order as a response
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ message: "Failed to create order", error: error.toString() });
    }
};

// GET endpoint to retrieve all orders
module.exports.getOrders = async (req, res) => {
    try {
        // Retrieve all orders from the database
        const orders = await OrderModel.find({});

        // Send back the retrieved orders as a response
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve orders", error: error.toString() });
    }
};