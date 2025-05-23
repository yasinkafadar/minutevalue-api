import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { playerRouter } from './routes/playerRoutes';
import { clubRouter } from './routes/clubRoutes';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/player', playerRouter);
app.use('/api/club', clubRouter);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to MinuteValue API' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app; 