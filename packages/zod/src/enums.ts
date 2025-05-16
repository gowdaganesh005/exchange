import { z } from 'zod';

export const sideEnum = z.enum(['BUY','SELL']);

export const typeEnum = z.enum(['LIMIT','MARKET']);

