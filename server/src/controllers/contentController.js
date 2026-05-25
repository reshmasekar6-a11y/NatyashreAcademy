import { getSiteContent } from '../models/contentModel.js';

export async function getContent(req, res, next) {
  try {
    const content = await getSiteContent();
    res.json(content);
  } catch (error) {
    next(error);
  }
}
