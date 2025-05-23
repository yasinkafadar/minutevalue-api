import { z } from 'zod';

// Player validation schema
export const playerParamsSchema = z.object({
  params: z.object({
    name: z.string().min(2, { message: 'Player name must be at least 2 characters' }),
  }),
});

// Club validation schema
export const clubParamsSchema = z.object({
  params: z.object({
    name: z.string().min(2, { message: 'Club name must be at least 2 characters' }),
  }),
});

// Type definitions from Zod schemas
export type PlayerParams = z.infer<typeof playerParamsSchema>;
export type ClubParams = z.infer<typeof clubParamsSchema>; 