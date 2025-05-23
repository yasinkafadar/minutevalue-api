import { Request, Response } from 'express';
import { getClubData } from '../services/clubService';
import { validateRequest } from '../middleware/validateRequest';
import { clubParamsSchema } from '../types/schema';

/**
 * Get club by name
 * GET /api/club/:name
 */
export const getClubByName = [
  validateRequest(clubParamsSchema),
  async (req: Request, res: Response) => {
    try {
      const { name } = req.params;
      
      const club = await getClubData(name);
      
      res.status(200).json({
        status: 'success',
        data: club
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