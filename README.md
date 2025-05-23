# MinuteValue API

A REST API that provides football player and club salary information by scraping web data and caching it in a PostgreSQL database.

## Features

- Get player salary information by name
- Get club wage information by name
- Automatic web scraping when data is not in database
- Data caching to minimize scraping

## Technology Stack

- Node.js with TypeScript
- Express.js for the REST API
- Prisma ORM for database access
- PostgreSQL database
- Axios for HTTP requests
- Cheerio for HTML parsing
- Zod for validation

## Prerequisites

- Node.js (>= 14.x)
- PostgreSQL database

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Set up your environment variables by creating a `.env` file:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/minutevalue"
   PORT=3000
   ```
4. Push the Prisma schema to your database:
   ```
   npm run prisma:migrate
   ```
5. Generate Prisma client:
   ```
   npm run prisma:generate
   ```

## Running the Application

### Development mode:
```
npm run dev
```

### Production mode:
```
npm run build
npm start
```

## API Endpoints

### Get Player by Name
```
GET /api/player/:name
```

Example:
```
GET /api/player/mauro-icardi
```

### Get Club by Name
```
GET /api/club/:name
```

Example:
```
GET /api/club/galatasaray
```

## Data Source

The API scrapes data from SalarySport.com and caches it in the database for faster subsequent requests.

## License

ISC 