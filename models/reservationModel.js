const mongoose = require("mongoose")

const reservationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: false }, // since the email is optional in the form
    numberOfPeople: { type: Number, required: true, min: 1 },
    reserveDateTime: { type: Date, required: true }
}, { timestamps: true });

const reservationModel = mongoose.model("Reservation", reservationSchema);
module.exports = reservationModel;
