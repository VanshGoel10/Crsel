"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const Career_1 = __importDefault(require("../models/Career"));
const router = express_1.default.Router();
// Configure multer for file uploads
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = 'uploads/cv';
        if (!fs_1.default.existsSync(uploadDir)) {
            fs_1.default.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path_1.default.extname(file.originalname));
    }
});
const upload = (0, multer_1.default)({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const allowedTypes = ['.pdf', '.doc', '.docx'];
        const ext = path_1.default.extname(file.originalname).toLowerCase();
        if (allowedTypes.includes(ext)) {
            cb(null, true);
        }
        else {
            cb(new Error('Only PDF, DOC, and DOCX files are allowed'));
        }
    },
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    }
});
// Submit career application
router.post('/submit', upload.single('cv'), async (req, res) => {
    try {
        const { name, email, skills, experienceYears, experienceMonths } = req.body;
        // Validate required fields
        if (!name || !email || !skills || !experienceYears || !experienceMonths || !req.file) {
            return res.status(400).json({
                success: false,
                message: 'All fields including CV are required'
            });
        }
        // Create new career application
        const career = new Career_1.default({
            name,
            email,
            skills,
            experienceYears: parseInt(experienceYears),
            experienceMonths: parseInt(experienceMonths),
            cvFileName: req.file.originalname,
            cvPath: req.file.path
        });
        await career.save();
        res.status(201).json({
            success: true,
            message: 'Career application submitted successfully',
            data: career
        });
    }
    catch (error) {
        console.error('Career submission error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});
// Get all career applications (admin only)
router.get('/admin/applications', async (req, res) => {
    try {
        const adminKey = req.headers['x-admin-key'];
        if (adminKey !== 'crsel-admin-2024-secure') {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized access'
            });
        }
        const careers = await Career_1.default.find()
            .sort({ createdAt: -1 })
            .select('-__v');
        res.json({
            success: true,
            data: careers
        });
    }
    catch (error) {
        console.error('Get careers error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});
// Mark career application as read (admin only)
router.patch('/admin/applications/:id/read', async (req, res) => {
    try {
        const adminKey = req.headers['x-admin-key'];
        if (adminKey !== 'crsel-admin-2024-secure') {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized access'
            });
        }
        const career = await Career_1.default.findByIdAndUpdate(req.params.id, { isRead: true }, { new: true });
        if (!career) {
            return res.status(404).json({
                success: false,
                message: 'Career application not found'
            });
        }
        res.json({
            success: true,
            data: career
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
// Delete career application (admin only)
router.delete('/admin/applications/:id', async (req, res) => {
    try {
        const adminKey = req.headers['x-admin-key'];
        if (adminKey !== 'crsel-admin-2024-secure') {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized access'
            });
        }
        const career = await Career_1.default.findById(req.params.id);
        if (!career) {
            return res.status(404).json({
                success: false,
                message: 'Career application not found'
            });
        }
        // Delete the CV file
        if (career.cvPath && fs_1.default.existsSync(career.cvPath)) {
            fs_1.default.unlinkSync(career.cvPath);
        }
        await Career_1.default.findByIdAndDelete(req.params.id);
        res.json({
            success: true,
            message: 'Career application deleted successfully'
        });
    }
    catch (error) {
        console.error('Delete career error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});
// Download CV file (admin only)
router.get('/admin/applications/:id/cv', async (req, res) => {
    try {
        const adminKey = req.headers['x-admin-key'];
        if (adminKey !== 'crsel-admin-2024-secure') {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized access'
            });
        }
        const career = await Career_1.default.findById(req.params.id);
        if (!career) {
            return res.status(404).json({
                success: false,
                message: 'Career application not found'
            });
        }
        if (!fs_1.default.existsSync(career.cvPath)) {
            return res.status(404).json({
                success: false,
                message: 'CV file not found'
            });
        }
        res.download(career.cvPath, career.cvFileName);
    }
    catch (error) {
        console.error('Download CV error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});
exports.default = router;
