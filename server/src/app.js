import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'path';
import process from 'process';
import { contentRouter } from './routes/contentRoutes.js';
import { inquiryRouter } from './routes/inquiryRoutes.js';

dotenv.config();

export const app = express();

// 1. UPDATE HELMET TO PERMIT CROSS-ORIGIN IMAGES AND IFRAMES
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
    crossOriginEmbedderPolicy: false,
  })
);

app.use(cors({
  origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173'
}));
app.use(express.json());

// 2. SERVE THE IMAGES FOLDER FROM THE PROJECT ROOT
const parentProjectFolder = path.resolve(process.cwd(), '..'); 
app.use('/images', express.static(path.join(parentProjectFolder, 'images')));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'natyasree-academy-api' });
});

app.use('/api/content', contentRouter);
app.use('/api/inquiries', inquiryRouter);

// ALL CATCH-ALL ROUTE HANDLERS MUST SIT BELOW STATIC MIDDLEWARES
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found.' });
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({
    message: 'Something went wrong on the server.'
  });
});
