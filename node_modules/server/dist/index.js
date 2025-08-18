"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("./config/database"));
const contact_1 = __importDefault(require("./routes/contact"));
const career_1 = __importDefault(require("./routes/career"));
dotenv_1.default.config();
// Debug environment variables
console.log('Environment variables loaded:');
console.log('PORT:', process.env.PORT);
console.log('MONGODB_URI:', process.env.MONGODB_URI ? 'Set' : 'Not set');
console.log('ADMIN_KEY:', process.env.ADMIN_KEY);
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Connect to MongoDB
(0, database_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});
// Contact routes
app.use('/api/contact', contact_1.default);
// Career routes
app.use('/api/career', career_1.default);
// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
