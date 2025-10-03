import { Router } from "express";
import { createContact } from "../controllers/contact.controller.js";
import { Contact } from "../models/contact.models.js";

const router = Router();

// Public route - anyone can submit contact form
router.post("/", createContact);

router.get("/", async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: "Error fetching contacts", error });
    }
});


// // Admin route (future: add authentication middleware)
// router.get("/", getAllContacts);

export default router;
