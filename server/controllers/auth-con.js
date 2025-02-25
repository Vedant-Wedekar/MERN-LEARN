const User = require("../models/user-models");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
    try { 
        res.status(200).send('This is page through the router');
    } catch (error) { 
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" }); 
    }
};

const profile = async (req, res) => {
    try { 
        const { username, email, phone, password } = req.body;

        // Check if user already exists
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        // Create user
        const newUser = await User.create({
            username,
            email,
            phone,
            password: hashPassword
        });
        

        // Send response after user creation
        return res.status(201).json({ message: "User created successfully", user: newUser });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Exporting functions
module.exports = { home, profile };
