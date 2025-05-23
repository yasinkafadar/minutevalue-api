import { Request, Response } from 'express';
import { getPlayerData } from '../services/playerService';
import { validateRequest } from '../middleware/validateRequest';
import { playerParamsSchema } from '../types/schema';

/**
 * Get player by name
 * GET /api/player/:name
 */
export const getPlayerByName = [
  validateRequest(playerParamsSchema),
  async (req: Request, res: Response) => {
    try {
      const { name } = req.params;
      
      const player = await getPlayerData(name);
      
      res.status(200).json({
        status: 'success',
        data: player
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(404).json({
          status: 'error',
          message: error.message
        });
      } else {
        res.status(500).json({
          status: 'error',
          message: 'An unexpected error occurred'
        });
      }
    }
  }
]; 