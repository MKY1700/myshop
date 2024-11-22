const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://Moonguenyenog:1234@moonguenyeong.fpgojnq.mongodb.net/?retryWrites=true&w=majority&appName=Moonguenyeong')
    } catch (error) {
        throw new Error("Connection Failed!");
    }
};
module.exports = connectDB;