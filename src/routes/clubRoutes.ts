import { Router } from 'express';
import { getClubByName } from '../controllers/clubController';

const router = Router();

router.get('/:name', ...getClubByName);

export { router as clubRouter }; 