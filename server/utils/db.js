const mongoose = require('mongoose');    

const URI = process.env.mongo;

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("✅ Connected to the database successfully!");
    } catch (error) {
        console.error("❌ Error connecting to the database:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
