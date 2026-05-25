import { pool } from '../config/db.js';

export async function createInquiry(inquiry) {
  const sql = `
    INSERT INTO inquiries (
      student_name,
      parent_name,
      email,
      phone,
      program_interest,
      preferred_location,
      learning_mode,
      message
    )
    VALUES (
      :studentName,
      :parentName,
      :email,
      :phone,
      :programInterest,
      :preferredLocation,
      :learningMode,
      :message
    )
  `;

  const [result] = await pool.execute(sql, inquiry);
  const [rows] = await pool.execute('SELECT * FROM inquiries WHERE id = ?', [result.insertId]);
  return rows[0];
}

export async function listInquiries() {
  const [rows] = await pool.query('SELECT * FROM inquiries ORDER BY created_at DESC');
  return rows;
}
