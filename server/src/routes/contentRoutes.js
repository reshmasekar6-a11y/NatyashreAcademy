import { Router } from 'express';
import { getContent } from '../controllers/contentController.js';

export const contentRouter = Router();

contentRouter.get('/', getContent);
