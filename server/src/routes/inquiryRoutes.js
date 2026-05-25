import { Router } from 'express';
import { getInquiries, postInquiry } from '../controllers/inquiryController.js';

export const inquiryRouter = Router();

inquiryRouter.get('/', getInquiries);
inquiryRouter.post('/', postInquiry);
