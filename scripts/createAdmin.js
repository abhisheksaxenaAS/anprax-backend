import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import { Admin } from "../src/models/Admin.js"; // path to your Admin model
import { DB_NAME } from "../src/constants.js"

dotenv.config();


// Connect to MongoDB
mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Function to create admin
const createAdmin = async () => {
    try {
        const username = "abhisheksaxenaAS";       // change as needed
        const password = "abhiAS@987";    // change as needed

        // Check if admin already exists
        const existingAdmin = await Admin.findOne({ username });
        if (existingAdmin) {
            console.log("Admin already exists!");
            process.exit();
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save admin
        const admin = new Admin({ username, password: hashedPassword });
        await admin.save();

        console.log("Admin created successfully!");
        process.exit();
    } catch (err) {
        console.error("Error creating admin:", err);
        process.exit(1);
    }
};

createAdmin();
