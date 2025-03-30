# Authentication System

A full-stack authentication system built with React, Node.js, and MongoDB.

## Features

- User registration with email and password
- User login with email and password
- Protected routes
- JWT-based authentication
- Modern UI with Tailwind CSS

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Setup

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:

   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/auth-system
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   ```

4. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

## Running the Application

1. Start the backend server:

   ```bash
   npm run dev
   ```

2. In a new terminal, start the frontend development server:

   ```bash
   npm run client
   ```

3. Open your browser and navigate to `http://localhost:5173`

## API Endpoints

- POST `/api/auth/signup` - Register a new user
- POST `/api/auth/login` - Login user
- GET `/api/auth/verify` - Verify JWT token

## Technologies Used

- Frontend:

  - React
  - Vite
  - Tailwind CSS
  - React Router
  - Axios

- Backend:
  - Node.js
  - Express
  - MongoDB
  - JWT
  - bcryptjs
