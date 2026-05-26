  import { useEffect, useMemo, useState } from 'react';
  import {
    BookOpen,
    CalendarCheck,
    CheckCircle2,
    ChevronRight,
    GraduationCap,
    MapPin,
    Menu,
    Music2,
    Send,
    Sparkles,
    Video,
    X
  } from 'lucide-react';
  import { fallbackContent } from './data/fallbackContent.js';
  import { fetchSiteContent, submitInquiry } from './api.js';

  const initialForm = {
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    programInterest: '',
    preferredLocation: '',
    learningMode: 'Offline',
    message: ''
  };

  const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';
  const ASSET_BASE_URL = API_BASE_URL.endsWith('/api') ? API_BASE_URL.slice(0, -4) : API_BASE_URL;

  function resolveImageUrl(imageUrl) {
    if (!imageUrl) return '';
    if (/^https?:\/\//i.test(imageUrl)) return imageUrl;
    if (imageUrl.startsWith('/')) return `${ASSET_BASE_URL}${imageUrl}`;
    return imageUrl;
  }

  function App() {
    const [content, setContent] = useState(fallbackContent);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadError, setLoadError] = useState('');
    const [form, setForm] = useState(initialForm);
    const [formState, setFormState] = useState({ status: 'idle', message: '', errors: {} });

    useEffect(() => {
      fetchSiteContent()
        .then((data) => {
          setContent(data);
          setLoadError('');
        })
        .catch(() => {
          setLoadError('Showing sample content until the API and MySQL database are running.');
        })
        .finally(() => setIsLoading(false));
    }, []);

    const programOptions = useMemo(
      () => content.programs.map((program) => program.title),
      [content.programs]
    );

    const locationOptions = useMemo(
      () => content.locations.map((location) => location.name),
      [content.locations]
    );

    function updateField(event) {
      const { name, value } = event.target;
      setForm((current) => ({ ...current, [name]: value }));
    }

    async function handleSubmit(event) {
      event.preventDefault();
      setFormState({ status: 'loading', message: 'Sending your inquiry...', errors: {} });

      try {
        const result = await submitInquiry(form);
        setForm(initialForm);
        setFormState({ status: 'success', message: result.message, errors: {} });
      } catch (error) {
        setFormState({
          status: 'error',
          message: error.message,
          errors: error.details || {}
        });
      }
    }

    return (
      <>
        <header className="site-header">
          <a className="brand" href="#home" onClick={() => setIsMenuOpen(false)}>
            <span className="brand-mark">N</span>
            <span>
              <strong>Natyasree</strong>
              <small>Dance & Music Academy</small>
            </span>
          </a>
          <button
            className="icon-button nav-toggle"
            type="button"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={isMenuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Primary">
            {['Programs', 'Locations', 'Exams', 'Teachers', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}>
                {item}
              </a>
            ))}
          </nav>
        </header>

        <main id="home">
          <section className="hero">
            <div className="hero-media" aria-hidden="true" />
            <div className="hero-content">
              <p className="eyebrow">Classical arts education in Alberta</p>
              <h1>Natyasree Dance & Music Academy</h1>
              <p>
                In-person and online Bharathanatiya, Kuchipudi, and Karnatic music classes
                led by experienced teachers across Calgary, Chestermere, and Edmonton.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#contact">
                  Register interest <ChevronRight size={18} />
                </a>
                <a className="button ghost" href="#programs">
                  Explore programs
                </a>
              </div>
            </div>
            <div className="hero-panel" aria-label="Academy highlights">
              <Highlight icon={<Video />} title="Online + offline" text="Flexible learning for busy families." />
              <Highlight icon={<Music2 />} title="Dance + music" text="Bharathanatiya, Kuchipudi, and Karnatic music." />
              <Highlight icon={<GraduationCap />} title="Grade exams" text="Affiliated with Thanjavoor Kalakshetra, India." />
            </div>
          </section>

          <section className="intro section-pad">
            <div className="section-heading">
              <p className="eyebrow">Training with tradition</p>
              <h2>Discipline, rhythm, expression, and devotion taught step by step.</h2>
            </div>
            <div className="intro-copy">
              <p>
                Natyasree helps students build strong foundations while developing confidence,
                stage presence, musicality, and cultural understanding.
              </p>
              <p>
                {isLoading && 'Loading academy content from the API...'}
                {!isLoading && loadError}
                {!isLoading && !loadError}
              </p>
            </div>
          </section>
          
          {/* PROGRAMS SECTION WITH REFACTORED PATHS AND STABLE WRAPPERS */}
          <section className="programs section-pad" id="programs">
            <div className="section-heading">
              <p className="eyebrow">Programs</p>
              <h2>Classical pathways for movement and music.</h2>
            </div>
            <div className="program-grid">
              {content.programs.map((program) => {
                const fullProgramImg = resolveImageUrl(program.image_url);
                return (
                  <article className="program-card" key={program.id}>
                    <img src={fullProgramImg} alt={`${program.title} class`} />
                  
    
                    <div>
                      <span>{program.category}</span>
                      <h3>{program.title}</h3>
                      <p>{program.description}</p>
                      <ul>
                        {program.highlights.map((highlight) => (
                          <li key={highlight}>
                            <CheckCircle2 size={17} /> {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="locations section-pad" id="locations">
            <div className="section-heading">
              <p className="eyebrow">Locations</p>
              <h2>Classes close to home, with online access when you need it.</h2>
            </div>
            <div className="location-grid">
              {content.locations.map((location) => (
                <article className="location-card" key={location.id}>
                  <MapPin size={22} />
                  <h3>{location.name}</h3>
                  <p>{location.description}</p>
                  <span>{location.mode}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="exam-band" id="exams">
            <div>
              <p className="eyebrow">Affiliation</p>
              <h2>Grade-level examinations through {content.affiliation?.institution}, {content.affiliation?.country}.</h2>
            </div>
            <div className="exam-card">
              <BookOpen size={28} />
              <p>{content.affiliation?.description}</p>
              <strong>{content.affiliation?.exam_levels}</strong>
            </div>
          </section>

          {/* TEACHERS SECTION WITH CORRECT PATH STRING MAPPINGS AND CLOSED SPANS */}
          <section className="teachers section-pad" id="teachers">
            <div className="section-heading">
              <p className="eyebrow">Faculty</p>
              <h2>Experienced teachers, attentive instruction.</h2>
            </div>
            <div className="teacher-grid">
              {content.teachers.map((teacher) => {
                const fullTeacherImg = resolveImageUrl(teacher.image_url);
                return (
                  <article className="teacher-card" key={teacher.id}>
                    <img src={fullTeacherImg} alt={teacher.name} />
                    <div>
                      <span>{teacher.specialty}</span>
                      <h3>{teacher.name}</h3>
                      <p>{teacher.bio}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="testimonials section-pad">
            <div className="section-heading">
              <p className="eyebrow">Community</p>
              <h2>A supportive space for students and families.</h2>
            </div>
            <div className="testimonial-grid">
              {content.testimonials.map((testimonial) => (
                <article key={testimonial.id}>
                  <Sparkles size={22} />
                  <p>“{testimonial.quote}”</p>
                </article>
              ))}
            </div>
          </section>
                  <section className="contact section-pad" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">Start learning</p>
            <h2>Ask about schedules, locations, and student placement.</h2>
            <p>
              Share the program, location, and class format you prefer. Academy team will review and contact you.
            </p>
            <div className="contact-list">
              <span><CalendarCheck size={19} /> New batches available online and offline</span>
              <span><MapPin size={19} /> Calgary, Chestermere, and Edmonton</span>
            </div>
          </div>
          <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
            <FormField label="Student name" name="studentName" value={form.studentName} error={formState.errors?.studentName} onChange={updateField} required />
            <FormField label="Parent name" name="parentName" value={form.parentName} onChange={updateField} />
            <FormField label="Email" type="email" name="email" value={form.email} error={formState.errors?.email} onChange={updateField} required />
            <FormField label="Phone" name="phone" value={form.phone} onChange={updateField} />
            
            <label>
              Program interest
              <select name="programInterest" value={form.programInterest} onChange={updateField} required>
                <option value="">Select a program</option>
                {programOptions.map((program) => <option key={program}>{program}</option>)}
              </select>
              {formState.errors?.programInterest && <small>{formState.errors.programInterest}</small>}
            </label>

            <label>
              Preferred location
              <select name="preferredLocation" value={form.preferredLocation} onChange={updateField} required>
                <option value="">Select a location</option>
                {locationOptions.map((location) => <option key={location}>{location}</option>)}
              </select>
              {formState.errors?.preferredLocation && <small>{formState.errors.preferredLocation}</small>}
            </label>

            <label>
              Learning mode
              <select name="learningMode" value={form.learningMode} onChange={updateField} required>
                <option>Offline</option>
                <option>Online</option>
                <option>Hybrid</option>
              </select>
            </label>

            <label>
              Message
              <textarea name="message" rows="4" value={form.message} onChange={updateField} placeholder="Age, experience, and schedule preference" />
            </label>

            <button className="button primary" type="submit" disabled={formState.status === 'loading'}>
              <Send size={18} /> {formState.status === 'loading' ? 'Sending...' : 'Send inquiry'}
            </button>
            
            <p className={`form-status ${formState.status}`} role="status">{formState.message}</p>
          </form>
        </section>

        </main>
      </>
    );
  }

  // Global scope UI render sub-components
  function Highlight({ icon, title, text }) {
    return (
      <div className="highlight-item">
        <div className="highlight-icon">{icon}</div>
        <div>
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      </div>
    );
  }
  // Add this component function at the very bottom of your App.jsx file
function FormField({ label, type = "text", name, value, error, onChange, required = false }) {
  return (
    <label>
      {label}
      <input 
        type={type} 
        name={name} 
        value={value} 
        onChange={onChange} 
        required={required} 
      />
      {error && <small className="error-text">{error}</small>}
    </label>
  );
}

    export default App;



