SEVA-CIRCLE

Indian Yelp-style platform connecting local service providers (like tutors, astrologers, plumbers, etc.) with consumers in tier 2/3 cities.

🖥️ Tech Stack

Frontend: React.js + Tailwind CSSBackend: Node.js + ExpressDatabase: MongoDB (Mongoose ODM)Authentication: JWT (JSON Web Tokens)API: RESTfulHosting: Vercel (Frontend) & Render/Glitch (Backend)

🔧 Features

1. Home Page

Welcome section with brief intro

Service categories (salon, tutor, astrologer, plumber, maid...)

Testimonials carousel

Call-to-action buttons

2. User Authentication

Signup/Login with email/password

Role-based access: Service Provider or Consumer

3. Dashboard (Role-specific)

For Service Providers:

Post/Edit/Delete gigs (services)

View and respond to job requests

Track ratings/reviews

For Consumers:

Post job requests

View available gigs

Hire service providers

4. Gig/Job Management

Service Providers: Post gigs with title, category, price, location, description

Consumers: Post job requests with detailed requirement

5. Search and Filters

Search by category, price range, location

Filter by user ratings

6. Gig Details Page

Images, description, ratings, price

Location/service area

Contact/Hire button

7. Admin Panel

View/Delete all gigs, jobs, users

Moderate content

📂 Project Structure

Frontend (/client)

/components

/pages

/services (API calls)

/assets

/context (Auth/User state)

App.jsx

main.jsx

.env

Backend (/server)

/routes

/controllers

/models

/middleware

/utils

.env

server.js

🧪 Sample Data & Seeding

Use seed.js inside /server/utils/seed.js to populate MongoDB with sample users, gigs, and jobs.

📄 .env Configuration

Frontend (.env.local)

VITE_API_URL=http://localhost:5000/api

Backend (.env)

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key

🛠️ Run Locally

Prerequisites:

Node.js + npm

MongoDB (local or cloud)

1. Clone the repo

git clone https://github.com/yourusername/inneedindeed.git
cd inneedindeed

2. Setup Backend

cd server
npm install
npm run dev

3. Setup Frontend

cd client
npm install
npm run dev

4. Access

Frontend: http://localhost:5173

Backend API: http://localhost:5000/api

🚀 Deployment

Frontend (Vercel)

Connect GitHub repo to Vercel

Set environment variable VITE_API_URL to your backend URL

Backend (Render/Glitch)

Deploy with start command: node server.js

Add MONGO_URI and JWT_SECRET in Render's environment tab

🙌 Contribution

Want to contribute? Fork the repo, create a new branch, and raise a PR!

🙏 Acknowledgement

Designed with love for Indian local workers and communities

Inspired by platforms like Yelp, UrbanClap (now Urban Company), and JustDial

📫 Contact

Sweta (Creator)Email: ojhasweta064@gmail.com
GitHub: ojha-sweta
