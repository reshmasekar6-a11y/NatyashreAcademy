INSERT INTO programs (title, category, description, highlights, image_url)
SELECT
  'Mohiniattam',
  'Classical Dance',
  'Graceful Kerala classical dance training focused on lasya, expressive storytelling, rhythm, hand gestures, and traditional repertoire.',
  JSON_ARRAY('Lasya and graceful movement', 'Expression and storytelling', 'Beginner-friendly foundations'),
  ''
WHERE NOT EXISTS (
  SELECT 1 FROM programs WHERE title = 'Mohiniattam'
);
