import jwt from "jsonwebtoken";
import { Admin } from "../models/Admin.js";

export const protectAdmin = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) return res.status(401).json({ message: "Not authorized" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = await Admin.findById(decoded.id).select("-password");
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: "Token failed" });
    }
};
