"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Contact_1 = __importDefault(require("../models/Contact"));
const router = express_1.default.Router();
// Submit contact form
router.post('/submit', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        // Validate required fields
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'Name, email, and message are required'
            });
        }
        // Create new contact submission
        const contact = new Contact_1.default({
            name,
            email,
            message
        });
        await contact.save();
        res.status(201).json({
            success: true,
            message: 'Contact form submitted successfully',
            data: contact
        });
    }
    catch (error) {
        console.error('Contact submission error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});
// Get all contact submissions (admin only)
router.get('/admin/submissions', async (req, res) => {
    try {
        // Simple admin check - in production, implement proper authentication
        const adminKey = req.headers['x-admin-key'];
        console.log('Received admin key:', adminKey);
        console.log('Expected admin key:', process.env.ADMIN_KEY);
        if (adminKey !== 'crsel-admin-2024-secure') {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized access'
            });
        }
        const contacts = await Contact_1.default.find()
            .sort({ createdAt: -1 })
            .select('-__v');
        res.json({
            success: true,
            data: contacts
        });
    }
    catch (error) {
        console.error('Get contacts error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});
// Mark contact as read (admin only)
router.patch('/admin/submissions/:id/read', async (req, res) => {
    try {
        const adminKey = req.headers['x-admin-key'];
        if (adminKey !== 'crsel-admin-2024-secure') {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized access'
            });
        }
        const contact = await Contact_1.default.findByIdAndUpdate(req.params.id, { isRead: true }, { new: true });
        if (!contact) {
            return res.status(404).json({
                success: false,
                message: 'Contact not found'
            });
        }
        res.json({
            success: true,
            data: contact
        });
    }
    catch (error) {
        console.error('Mark as read error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});
// Delete contact submission (admin only)
router.delete('/admin/submissions/:id', async (req, res) => {
    try {
        const adminKey = req.headers['x-admin-key'];
        if (adminKey !== 'crsel-admin-2024-secure') {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized access'
            });
        }
        const contact = await Contact_1.default.findByIdAndDelete(req.params.id);
        if (!contact) {
            return res.status(404).json({
                success: false,
                message: 'Contact not found'
            });
        }
        res.json({
            success: true,
            message: 'Contact deleted successfully'
        });
    }
    catch (error) {
        console.error('Delete contact error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});
exports.default = router;
