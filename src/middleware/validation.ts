import type { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/AppError.js';
import zod from 'zod';
import { QueryOptionsSchema } from '../zod_schema/filterSchema.js';

export const validateBody = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const { name } = req.body as { name: string };

  // Verify name is present
  if (name == null || name.length === 0) {
    throw new AppError(400, 'Bad Request');
  }

  // Verify name is not an array
  if (Array.isArray(name) || !isNaN(Number(name))) {
    throw new AppError(422, 'Unprocessible entity');
  }

  return next();
};

export const validateQuery = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  type QueryOptionsSchema = zod.infer<typeof QueryOptionsSchema>;

  const filterOptions: QueryOptionsSchema = req.query;

  const result = QueryOptionsSchema.safeParse(filterOptions);

  if (!result.success) return next(result.error);

  return next();
};
