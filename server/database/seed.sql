INSERT INTO programs (title, category, description, highlights, image_url) VALUES
('Bharathanatiya', 'Classical Dance', 'A structured program covering adavus, mudras, rhythm, abhinaya, theory, repertoire, and recital preparation.', JSON_ARRAY('Beginner to advanced batches', 'Theory and practical training', 'Performance preparation'), 'https://images.unsplash.com/photo-1604542031658-5799ca5d7936?auto=format&fit=crop&w=1100&q=80'),
('Kuchipudi', 'Classical Dance', 'Graceful Kuchipudi training focused on technique, expressive storytelling, tala, stage movement, and traditional compositions.', JSON_ARRAY('Technique and expression', 'Solo and group choreography', 'Cultural performance opportunities'), 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1100&q=80'),
('Karnatic Music', 'Classical Music', 'Karnatic vocal instruction in sruthi, swara, tala, varnams, kritis, devotional songs, and disciplined practice.', JSON_ARRAY('Voice culture', 'Swara and tala foundations', 'Devotional and classical repertoire'), 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1100&q=80');

INSERT INTO locations (name, city, mode, description, sort_order) VALUES
('Calgary Downtown', 'Calgary', 'Offline', 'Convenient in-person classes for central Calgary families.', 1),
('North East Calgary', 'Calgary', 'Offline', 'Community classes serving NE Calgary students.', 2),
('North West Calgary', 'Calgary', 'Offline', 'NW Calgary batches for dance and music learners.', 3),
('South East Calgary', 'Calgary', 'Offline', 'SE Calgary classes with beginner and continuing options.', 4),
('Chestermere', 'Chestermere', 'Offline', 'Local access for Chestermere families.', 5),
('Edmonton', 'Edmonton', 'Offline', 'Classical arts training for Edmonton students.', 6),
('Online Classes', 'Remote', 'Online', 'Flexible online learning for students across Alberta.', 7);

INSERT INTO teachers (name, specialty, bio, image_url, sort_order) VALUES
('Experienced Dance Faculty', 'Bharathanatiya and Kuchipudi', 'Teachers guide students through classical technique, rhythm, expression, choreography, and stage discipline with individual attention.', 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=900&q=80', 1),
('Experienced Music Faculty', 'Karnatic Music', 'Music teachers focus on strong sruthi, tala clarity, voice culture, repertoire learning, and confident presentation.', 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80', 2);

INSERT INTO affiliation (institution, country, description, exam_levels) VALUES
('Thanjavoor Kalakshetra', 'India', 'Natyasree Dance & Music Academy is affiliated with Thanjavoor Kalakshetra in India for grade-level examinations. Students receive guided preparation for practical and theory components.', 'Foundation, intermediate, and advanced grade examinations');

INSERT INTO testimonials (author, role, quote, sort_order) VALUES
('Parent of beginner student', 'Calgary NW', 'The classes are disciplined, warm, and very clear. Our child is learning technique and confidence at the same time.', 1),
('Adult music learner', 'Online student', 'The online Karnatic music classes are structured and easy to follow, with helpful practice feedback every week.', 2),
('Dance student', 'Chestermere', 'Natyasree helped me prepare for performances and understand the meaning behind the pieces.', 3);
