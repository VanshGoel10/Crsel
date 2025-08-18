# Crsel Website - Contact Form System

A full-stack website with a functional contact form system that stores submissions in MongoDB and provides an admin dashboard to view and manage contact requests.

## Features

- **Contact Form**: Collects name, email, and message from visitors
- **MongoDB Integration**: Stores all contact submissions in a database
- **Admin Dashboard**: Secure admin interface to view and manage contact requests
- **Real-time Status**: Shows success/error messages and loading states
- **Admin Actions**: Mark submissions as read, delete submissions
- **Responsive Design**: Works on all devices

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

## Setup Instructions

### 1. Install Dependencies

```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

### 2. MongoDB Setup

#### Option A: Local MongoDB
1. Install MongoDB locally on your machine
2. Start MongoDB service
3. The default connection string will be: `mongodb://localhost:27017/crsel-website`

#### Option B: MongoDB Atlas (Cloud)
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get your connection string
4. Update the `MONGODB_URI` in `server/.env`

### 3. Environment Configuration

Update the `server/.env` file:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/crsel-website
ADMIN_KEY=your-secret-admin-key-here
```

**Important**: Change the `ADMIN_KEY` to a secure secret key of your choice.

### 4. Start the Application

#### Development Mode
```bash
# From the root directory
npm run dev
```

This will start both the client (port 5173) and server (port 3000) simultaneously.

#### Production Mode
```bash
# Build the application
npm run build

# Start the server
npm start
```

## Usage

### Contact Form
1. Navigate to `/contact` on your website
2. Fill out the form with name, email, and message
3. Submit the form
4. The submission will be stored in MongoDB

### Admin Dashboard
1. Navigate to `/admin` on your website
2. Enter your admin key (set in the `.env` file)
3. View all contact submissions
4. Mark submissions as read
5. Delete submissions

## API Endpoints

### Contact Form
- `POST /api/contact/submit` - Submit a new contact form

### Admin (requires admin key header)
- `GET /api/contact/admin/submissions` - Get all contact submissions
- `PATCH /api/contact/admin/submissions/:id/read` - Mark submission as read
- `DELETE /api/contact/admin/submissions/:id` - Delete a submission

## Security

- Admin access is protected by an admin key
- The admin key should be kept secret and changed from the default
- In production, consider implementing proper authentication (JWT, sessions, etc.)

## File Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Contact.tsx # Contact form
│   │   │   └── Admin.tsx   # Admin dashboard
│   │   └── App.tsx         # Main app with routing
├── server/                 # Express backend
│   ├── src/
│   │   ├── models/
│   │   │   └── Contact.ts  # MongoDB model
│   │   ├── routes/
│   │   │   └── contact.ts  # API routes
│   │   ├── config/
│   │   │   └── database.ts # Database connection
│   │   └── index.ts        # Main server file
│   └── .env                # Environment variables
└── README.md
```

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running
- Check your connection string in `.env`
- Verify network connectivity if using MongoDB Atlas

### Admin Access Issues
- Verify the admin key in your `.env` file
- Check that the admin key is being sent in the request headers

### CORS Issues
- The server is configured to allow CORS from the client
- If you change ports, update the CORS configuration

## Production Deployment

1. Set up a production MongoDB database
2. Update environment variables for production
3. Build the client application
4. Deploy the server to your hosting platform
5. Configure your domain and SSL certificates

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License. 