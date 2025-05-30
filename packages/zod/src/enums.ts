import { z } from 'zod';

export const sideEnum = z.enum(['BUY','SELL']);

export const typeEnum = z.enum(['LIMIT','MARKET']);

export const wsMethod = z.enum(['SUBSCRIBE','UNSUBSCRIBE'])

