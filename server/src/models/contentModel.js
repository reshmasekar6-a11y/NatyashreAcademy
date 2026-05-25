import { pool } from '../config/db.js';

const parseHighlights = (program) => ({
  ...program,
  highlights: typeof program.highlights === 'string'
    ? JSON.parse(program.highlights)
    : program.highlights
});

export async function getSiteContent() {
  const [programs] = await pool.query('SELECT * FROM programs ORDER BY id');
  const [locations] = await pool.query('SELECT * FROM locations ORDER BY sort_order, id');
  const [teachers] = await pool.query('SELECT * FROM teachers ORDER BY sort_order, id');
  const [affiliations] = await pool.query('SELECT * FROM affiliation ORDER BY id LIMIT 1');
  const [testimonials] = await pool.query('SELECT * FROM testimonials ORDER BY sort_order, id');

  return {
    programs: programs.map(parseHighlights),
    locations,
    teachers,
    affiliation: affiliations[0] || null,
    testimonials
  };
}
