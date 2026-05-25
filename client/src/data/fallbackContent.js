export const fallbackContent = {
  programs: [
    {
      id: 1,
      title: 'Bharathanatiya',
      category: 'Classical Dance',
      description: 'Structured training in adavus, mudras, rhythm, abhinaya, theory, repertoire, and recital preparation.',
      highlights: ['Beginner to advanced batches', 'Theory and practical training', 'Performance preparation'],
      image_url: '/images/BharathamDanceGreen.png'
    },
    {
  id: 2,
  title: 'Kuchipudi',
  category: 'Classical Dance',
  description: 'Graceful Kuchipudi training focused on technique, storytelling, tala, stage movement, and traditional compositions.',
  highlights: ['Technique and expression', 'Solo and group choreography', 'Cultural performance opportunities'],
  // image_url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1100&q=80', <-- Added comma here if un-commented
  image_url: '/images/Kuchipudi_Dance_Image3.jpeg' // <-- ADD A COMMA HERE!
},

    {
      id: 3,
      title: 'Karnatic Music',
      category: 'Classical Music',
      description: 'Karnatic vocal instruction in sruthi, swara, tala, varnams, kritis, devotional songs, and practice discipline.',
      highlights: ['Voice culture', 'Swara and tala foundations', 'Devotional and classical repertoire'],
      image_url: '/images/Karnatic_music.jpeg'
    }
  ],
  locations: [
    { id: 1, name: 'Calgary Downtown', city: 'Calgary', mode: 'Offline', description: 'Convenient in-person classes for central Calgary families.' },
    { id: 2, name: 'North East Calgary', city: 'Calgary', mode: 'Offline', description: 'Community classes serving NE Calgary students.' },
    { id: 3, name: 'North West Calgary', city: 'Calgary', mode: 'Offline', description: 'NW Calgary batches for dance and music learners.' },
    { id: 4, name: 'South East Calgary', city: 'Calgary', mode: 'Offline', description: 'SE Calgary classes with beginner and continuing options.' },
    { id: 5, name: 'Chestermere', city: 'Chestermere', mode: 'Offline', description: 'Local access for Chestermere families.' },
    { id: 6, name: 'Edmonton', city: 'Edmonton', mode: 'Offline', description: 'Classical arts training for Edmonton students.' },
    { id: 7, name: 'Online Classes', city: 'Remote', mode: 'Online', description: 'Flexible online learning for students across Alberta.' }
  ],
  teachers: [
    {
      id: 1,
      name: 'Experienced Dance Faculty',
      specialty: 'Bharathanatiya and Kuchipudi',
      bio: 'Teachers guide students through classical technique, rhythm, expression, choreography, and stage discipline with individual attention.',
      image_url: 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 2,
      name: 'Experienced Music Faculty',
      specialty: 'Karnatic Music',
      bio: 'Music teachers focus on strong sruthi, tala clarity, voice culture, repertoire learning, and confident presentation.',
      image_url: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80'
    }
  ],
  affiliation: {
    institution: 'Thanjavoor Kalakshetra',
    country: 'India',
    description: 'Natyasree Dance & Music Academy is affiliated with Thanjavoor Kalakshetra in India for grade-level examinations.',
    exam_levels: 'Foundation, intermediate, and advanced grade examinations'
  },
  testimonials: [
    { id: 1, author: 'Parent of beginner student', role: 'Calgary NW', quote: 'The classes are disciplined, warm, and very clear. Our child is learning technique and confidence at the same time.' },
    { id: 2, author: 'Adult music learner', role: 'Online student', quote: 'The online Karnatic music classes are structured and easy to follow, with helpful practice feedback every week.' }
  ]
};
