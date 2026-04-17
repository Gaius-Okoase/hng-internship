# HNG IT Internship - Backend Project

A comprehensive backend project showcasing various API development tasks completed during the HNG 14 internship program. This project is built with Express.js and TypeScript, featuring a robust architecture with user authentication, profile management, and database integration.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Locally](#running-locally)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)

## ✨ Features

- RESTful API endpoints for user profile management
- MongoDB integration with Mongoose ORM
- TypeScript for type-safe development
- Error handling middleware
- Request validation middleware
- CORS support for cross-origin requests
- Request logging with Morgan

## 🛠 Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js v5.2.1
- **Database**: MongoDB (Mongoose v9.4.1)
- **Development**: tsx with watch mode
- **Utilities**: CORS, Morgan, Dotenv, Axios

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- npm
- MongoDB (local instance or MongoDB Atlas connection string)

## 🚀 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd HNG-IT
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your configuration:
   ```env
   PORT=4500
   MONGODB_URI=mongodb://localhost:27017/hng-it
   ```

## 💻 Running Locally

### Development Mode

Run the application in development mode with hot-reload:

```bash
npm run dev
```

This uses `tsx watch` to automatically reload the server when you make changes to the source code. The server will start on the port specified in your `.env` file (default: 3000).

### Production Mode

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

This compiles TypeScript to JavaScript in the `dist/` directory and runs the compiled code.

## 📁 Project Structure

```
HNG-IT/
├── src/
│   ├── server.ts                 # Application entry point
│   ├── types.ts                  # TypeScript type definitions
│   ├── config/
│   │   └── db.ts                 # Database configuration
│   ├── controllers/
│   │   └── profileController.ts  # Profile route handlers
│   ├── middleware/
│   │   ├── errorHandler.ts       # Error handling middleware
│   │   └── validation.ts         # Request validation middleware
│   ├── models/
│   │   └── User.ts               # User database schema
│   ├── routes/
│   │   └── profileRoute.ts       # Profile API routes
│   ├── services/
│   │   └── profileService.ts     # Business logic
│   └── utils/
│       └── AppError.ts           # Custom error class
├── dist/                         # Compiled JavaScript (generated)
├── package.json                  # Project dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── index.js                      # Legacy entry point
└── README.md                     # This file
```

## 🔧 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
PORT=4500

# Database Configuration (MongoDB Atlas)
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hng-it
```

## 📝 Available Scripts

- `npm run dev` - Start development server with hot-reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run production server

## 🎯 Development Workflow

1. Make changes to TypeScript files in the `src/` directory
2. The dev server automatically recompiles and restarts
3. Check the console for any TypeScript compilation errors
4. Test your endpoints using a tool like Postman or cURL

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [HNG Internship Program](https://hng.tech/)

---

**Note**: This project represents the work completed during the HNG 14 internship program. Each stage builds upon previous tasks, demonstrating progressive learning and skill development.
