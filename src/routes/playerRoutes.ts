import { Router } from 'express';
import { getPlayerByName } from '../controllers/playerController';

const router = Router();

// Apply the controller middleware directly
router.get('/:name', ...getPlayerByName);

export { router as playerRouter }; 