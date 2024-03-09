const reservationModel = require('../models/reservationModel');

module.exports.createReservation = async (req, res) => {
    try {
        // Extracting reservation data from the request body
        const { name, phoneNumber, email, numberOfPeople, reserveDateTime } = req.body;

        // Creating a new reservation document
        const newReservation = new reservationModel({
            name,
            phoneNumber,
            email,
            numberOfPeople,
            reserveDateTime,
        });

        console.log(newReservation); // Inspect the mongoose model instance
        // Saving the reservation to the database
        await newReservation.save();

        // Sending a success response to the client
        res.status(201).json({
            message: 'Reservation created successfully!',
            data: newReservation
        });
    } catch (error) {
        // Logging the error to the server console
        console.error('Error creating reservation:', error);

        // Sending an error response to the client
        res.status(500).json({
            message: 'Failed to create reservation',
            error: error.message // It's good practice to send the error message back to the client for debugging purposes
        });
    }
}

module.exports.getReservations = async (req, res) => {
    try {
        // Fetching all reservations from the database
        const reservations = await reservationModel.find({});

        // Checking if reservations exist
        if (reservations.length === 0) {
            return res.status(404).json({
                message: 'No reservations found'
            });
        }

        // Sending a success response with the reservations
        res.status(200).json({
            message: 'Reservations fetched successfully!',
            data: reservations
        });
    } catch (error) {
        // Logging the error to the console
        console.error('Error fetching reservations:', error);

        // Sending an error response to the client
        res.status(500).json({
            message: 'Failed to fetch reservations',
            error: error.message
        });
    }
}