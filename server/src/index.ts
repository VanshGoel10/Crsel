import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database';
import contactRoutes from './routes/contact';
import careerRoutes from './routes/career';

dotenv.config();

// Debug environment variables
console.log('Environment variables loaded:');
console.log('PORT:', process.env.PORT);
console.log('MONGODB_URI:', process.env.MONGODB_URI ? 'Set' : 'Not set');
console.log('ADMIN_KEY:', process.env.ADMIN_KEY);

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Contact routes
app.use('/api/contact', contactRoutes);

// Career routes
app.use('/api/career', careerRoutes);

app.get("/", (req,res)=>{
  res.send({
    activeStatus:true,
    error:false,
  })
})

// Start server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// }); 
export default app;