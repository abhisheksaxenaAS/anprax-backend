import { Contact } from "../models/contact.models.js";

// Create contact (form submission)
export const createContact = async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.status(201).json({
            success: true,
            message: "Contact form submitted successfully",
            data: contact,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Get all contacts (admin use only)
export const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json({ success: true, data: contacts });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
