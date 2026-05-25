import { createInquiry, listInquiries } from '../models/inquiryModel.js';
import { validateInquiry } from '../validators/inquiryValidator.js';

export async function postInquiry(req, res, next) {
  try {
    const validation = validateInquiry(req.body);

    if (!validation.isValid) {
      return res.status(422).json({
        message: 'Please correct the highlighted fields.',
        errors: validation.errors
      });
    }

    const inquiry = await createInquiry(validation.value);
    return res.status(201).json({
      message: 'Inquiry received. We will contact you soon.',
      inquiry
    });
  } catch (error) {
    return next(error);
  }
}

export async function getInquiries(req, res, next) {
  try {
    const inquiries = await listInquiries();
    res.json(inquiries);
  } catch (error) {
    next(error);
  }
}
