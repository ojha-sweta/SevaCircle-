
# InNeedIndeed Backend API

Backend server for InNeedIndeed - Local Services Marketplace for India

## 🚀 Quick Start

### 1. Environment Setup
```bash
cd backend
cp .env.example .env
# Edit .env with your MongoDB Atlas connection string
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

## 🌐 Testing the API

### Browser Testing
Open these URLs in your browser:
- http://localhost:5000/health
- http://localhost:5000/api/test
- http://localhost:5000/api/test/db

### cURL Testing
```bash
# Test API
curl http://localhost:5000/api/test

# Test database connection
curl http://localhost:5000/api/test/db
```

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

## 📁 Project Structure

```
backend/
├── server.js          # Main server file
├── routes/            # API routes
│   └── test.js        # Test routes
├── controllers/       # Route controllers (Phase 2)
├── models/           # Mongoose models (Phase 2)
├── middleware/       # Custom middleware (Phase 2)
├── .env.example      # Environment variables template
└── package.json      # Dependencies and scripts
```

## 🔄 Next Phases

- **Phase 2**: Authentication system (JWT, user models)
- **Phase 3**: Core APIs (Gigs, Jobs, Users)
- **Phase 4**: Reviews, ratings, admin panel
- **Phase 5**: Deployment optimization
