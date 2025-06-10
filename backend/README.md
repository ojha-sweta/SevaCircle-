
# InNeedIndeed Backend API

Backend server for InNeedIndeed - Local Services Marketplace for India

## 🚀 Quick Start

### 1. Environment Setup
```bash
cd backend
cp .env.example .env
# Edit .env with your MongoDB Atlas connection string and JWT secret
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

The server will start on `http://localhost:5000`

## 📋 Available Endpoints

### Health Check
- **GET** `/health` - Server health status

### Test Routes
- **GET** `/api/test` - API test endpoint
- **GET** `/api/test/db` - Database connection test

### Authentication Routes
- **POST** `/api/auth/register` - Register new user
- **POST** `/api/auth/login` - Login user
- **GET** `/api/auth/me` - Get current user profile (Protected)
- **PUT** `/api/auth/profile` - Update user profile (Protected)

## 🔐 Authentication

### Register User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "role": "user",
    "phone": "9876543210",
    "location": {
      "city": "Mumbai",
      "state": "Maharashtra",
      "pincode": "400001"
    }
  }'
```

### Login User
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Get User Profile (Protected Route)
```bash
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 🌐 Testing the API

### Browser Testing
Open these URLs in your browser:
- http://localhost:5000/health
- http://localhost:5000/api/test
- http://localhost:5000/api/test/db

### Authentication Testing
Use the cURL commands above or a tool like Postman to test the authentication endpoints.

## ☁️ Cloud Deployment

### Deploy to Render.com
1. Connect your GitHub repo to Render
2. Create a new Web Service
3. Set build command: `cd backend && npm install`
4. Set start command: `cd backend && npm start`
5. Add environment variables from `.env.example`

### Deploy to Railway
1. Connect GitHub repo
2. Select the backend folder as root
3. Add environment variables
4. Deploy automatically

## 🔧 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URI` | MongoDB Atlas connection string | `mongodb+srv://...` |
| `PORT` | Server port | `5000` |
| `FRONTEND_URL` | Frontend URL for CORS | `http://localhost:5173` |
| `JWT_SECRET` | JWT signing secret | `your-super-secret-jwt-key` |
| `JWT_EXPIRE` | JWT expiration time | `30d` |

## 📁 Project Structure

```
backend/
├── server.js          # Main server file
├── routes/            # API routes
│   ├── test.js        # Test routes
│   └── auth.js        # Authentication routes
├── controllers/       # Route controllers
│   └── authController.js  # Auth logic
├── models/           # Mongoose models
│   └── User.js       # User model
├── middleware/       # Custom middleware
│   └── auth.js       # JWT authentication middleware
├── .env.example      # Environment variables template
└── package.json      # Dependencies and scripts
```

## 🔄 Next Phases

- **Phase 3**: Core APIs (Gigs, Jobs, Bookings)
- **Phase 4**: Reviews, ratings, admin panel
- **Phase 5**: File uploads, notifications
- **Phase 6**: Deployment optimization
