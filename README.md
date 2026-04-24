# HNG IT Internship - Backend Project

A backend project for the HNG internship program built with Express.js and TypeScript. It provides profile management endpoints, MongoDB persistence, request validation, and a rule-based natural-language search flow for profile filtering.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Locally](#running-locally)
- [Search Parser Approach](#search-parser-approach)
- [Parser Limitations](#parser-limitations)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)

## Features

- RESTful API endpoints for profile creation, listing, search, and deletion
- Natural-language profile search with rule-based query parsing
- MongoDB integration with Mongoose
- TypeScript for type-safe development
- Request validation with Zod
- Error handling middleware
- CORS support
- Request logging with Morgan

## Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Development**: `tsx` watch mode
- **Utilities**: Axios, CORS, Morgan, Dotenv, Zod

## Prerequisites

Before you begin, make sure you have:

- Node.js v16 or higher
- npm
- MongoDB running locally or a MongoDB Atlas connection string

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd HNG-IT
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root:

```env
PORT=4500
MONGODB_URI=mongodb://localhost:27017/hng-it
```

## Running Locally

### Development Mode

```bash
npm run dev
```

This starts the app with `tsx watch` and reloads automatically when source files change.

### Production Mode

1. Build the project:

```bash
npm run build
```

2. Start the compiled server:

```bash
npm start
```

## Search Parser Approach

The project includes a natural-language search endpoint at `GET /api/profiles/search`.

The parser is implemented in `src/services/profileService.ts` as a rule-based parser. It lowercases the incoming `q` string, splits it into words, and maps recognized words or phrases into the structured filter options already used by `GET /api/profiles`.

The current parser supports:

- Gender detection from predefined vocabularies such as `male`, `man`, `boy`, `female`, `woman`, and `girl`
- Age-group detection from keywords such as `child`, `teenager`, `adult`, and `senior`
- Country detection by checking whether the query contains a stored `country_name`, then converting the match to `country_id`
- Numeric age extraction for phrases like `above 30` and `below 18`
- A special-case `young` keyword that maps to an age range of 16 to 24
- Pass-through of standard query options like `sort_by`, `order`, `page`, and `limit`

Request flow:

1. Query parameters are validated with Zod.
2. The free-text `q` value is parsed into structured filters.
3. The parser output is passed into the standard profile filtering service.
4. MongoDB results are returned with the same pagination and sorting flow used by the normal listing endpoint.

Example:

```http
GET /api/profiles/search?q=female adults above 25 in nigeria&sort_by=age&order=asc&page=1&limit=10
```

This approach keeps the parser predictable, easy to debug, and easy to extend with additional vocabulary over time.

## Parser Limitations

The parser is intentionally lightweight, so it has some known limitations:

- It depends on fixed keyword lists, so unsupported synonyms are not recognized automatically.
- It is not context-aware, so conflicting keywords in the same query can overwrite each other.
- It only supports a small set of age phrases such as `above <number>`, `below <number>`, and `young`.
- Country matching depends on `country_name` values already stored in the database, so missing or inconsistent country names can reduce accuracy.
- It uses simple word splitting and substring checks, so punctuation and phrasing variations may not parse correctly.
- It does not support advanced boolean logic such as grouped `AND` or `OR` conditions.
- It does not perform spelling correction, fuzzy matching, or semantic understanding.

## Project Structure

```text
HNG-IT/
|-- src/
|   |-- server.ts                 # Application entry point
|   |-- types.ts                  # Type definitions
|   |-- config/
|   |   `-- db.ts                 # Database configuration
|   |-- controllers/
|   |   `-- profileController.ts  # Profile route handlers
|   |-- middleware/
|   |   |-- errorHandler.ts       # Error handling middleware
|   |   `-- validation.ts         # Request validation middleware
|   |-- models/
|   |   `-- User.ts               # User schema
|   |-- routes/
|   |   `-- profileRoute.ts       # Profile routes
|   |-- services/
|   |   `-- profileService.ts     # Business logic and parser
|   `-- utils/
|       `-- AppError.ts           # Custom error class
|-- dist/                         # Compiled output
|-- package.json                  # Dependencies and scripts
|-- tsconfig.json                 # TypeScript configuration
|-- index.js                      # Legacy entry point
`-- README.md                     # Project documentation
```

## Environment Variables

Create a `.env` file in the root directory with:

```env
PORT=4500
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hng-it
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Start the compiled server
- `npm run seed` - Seed profile data

## Development Workflow

1. Make changes in `src/`.
2. Run `npm run dev` during development.
3. Check the console for TypeScript or runtime errors.
4. Test endpoints with Postman, cURL, or a similar API client.

## Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [HNG Internship Program](https://hng.tech/)

---

This project represents work completed during the HNG internship program and has been expanded with a documented rule-based search parser for profile discovery.
