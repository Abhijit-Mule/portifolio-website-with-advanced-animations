import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const GITHUB_URL = 'https://github.com/Abhijit-Mule/portifolio-website-with-advanced-animations';
const LINKEDIN_URL = 'https://www.linkedin.com/in/abhijit-mule-cr7007/';
const EMAIL = 'abhijit.mule_it22@pccoer.in';

const projects = [
  {
    number: '01', title: 'SafePath', kicker: 'AI · COMPUTER VISION',
    text: 'AI-based road condition analysis and alert system focused on detecting potholes and helping users report unsafe road conditions.',
    tags: ['React', 'FastAPI', 'MongoDB', 'YOLO'],
  },
  {
    number: '02', title: 'Real-Time Chat', kicker: 'FULL STACK · REAL TIME',
    text: 'Multi-user chat application built around real-time communication, authentication and persistent data with a MERN stack.',
    tags: ['MERN', 'Socket.io', 'JWT'],
  },
];

const skills = ['C++', 'Data Structures & Algorithms', 'OOP', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MySQL', 'MongoDB', 'Git', 'GitHub', 'Operating Systems'];

function Reveal({ children, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('is-visible');
        observer.unobserve(el);
      }
    }, { threshold: 0.12 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const move = (event) => {
      document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="cursor-glow" aria-hidden="true" />
      <nav className="nav">
        <a className="brand" href="#top" onClick={closeMenu}>AM<span>.</span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}>☰</button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {['about', 'skills', 'projects', 'contact'].map((item) => <a key={item} href={`#${item}`} onClick={closeMenu}>{item}</a>)}
        </div>
      </nav>

      <section id="top" className="hero">
        <div className="grid-overlay" aria-hidden="true" />
        <div className="glow glow-one" /><div className="glow glow-two" />
        <Reveal>
          <p className="eyebrow">INFORMATION TECHNOLOGY ENGINEER · PROBLEM SOLVER</p>
          <h1>Building digital<br /><span>experiences with purpose.</span></h1>
          <p className="hero-copy">I’m Abhijit Mule — an IT engineering graduate focused on problem solving, software engineering and building practical products with code.</p>
          <div className="actions">
            <a className="button primary" href="#projects">Explore my work <span>↓</span></a>
            <a className="button" href={`mailto:${EMAIL}`}>Let’s connect <span>↗</span></a>
          </div>
        </Reveal>
        <div className="hero-meta"><span>BASED IN INDIA</span><span>AVAILABLE FOR OPPORTUNITIES</span></div>
        <div className="scroll-note">SCROLL TO DISCOVER <span>↓</span></div>
      </section>

      <section id="about" className="section about">
        <div className="section-label">01 — ABOUT</div>
        <Reveal className="about-copy">
          <h2>Curious by nature.<br /><em>Driven by challenges.</em></h2>
          <p>I’m an Information Technology engineering graduate with a strong interest in Data Structures & Algorithms, software engineering and practical application development.</p>
          <p>I enjoy understanding systems under the hood, turning ideas into clean implementations and continuously sharpening my problem-solving skills.</p>
        </Reveal>
        <Reveal className="stats">
          <div><strong>8.53</strong><span>BE IT SGPA</span></div>
          <div><strong>2000</strong><span>CHESS RATING</span></div>
          <div><strong>C++</strong><span>DSA FOCUS</span></div>
        </Reveal>
      </section>

      <section id="skills" className="section">
        <div className="section-label">02 — SKILLS</div>
        <Reveal><h2>Built on fundamentals.<br /><em>Powered by curiosity.</em></h2></Reveal>
        <div className="skill-grid">
          {skills.map((skill, i) => <Reveal key={skill} className="skill-wrap"><div className="skill"><span>{String(i + 1).padStart(2, '0')}</span>{skill}</div></Reveal>)}
        </div>
      </section>

      <section id="projects" className="section projects">
        <div className="section-label">03 — SELECTED WORK</div>
        <Reveal><h2>Ideas turned into <em>projects.</em></h2></Reveal>
        <div className="project-grid">
          {projects.map((p) => <Reveal key={p.title} className="project-wrap"><article className="project">
            <div className="project-top"><span className="project-number">{p.number}</span><span className="project-kicker">{p.kicker}</span></div>
            <div className="project-art" aria-hidden="true"><span>{p.number}</span><i /><i /><i /></div>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
          </article></Reveal>)}
        </div>
      </section>

      <section className="section achievement">
        <div className="section-label">04 — BEYOND CODE</div>
        <Reveal className="achievement-card">
          <div><span className="chess">♞</span><h2>Strategy on the board.<br /><em>Precision in code.</em></h2></div>
          <p>Chess has taught me to think ahead, evaluate trade-offs and stay calm when the position gets complicated. That same mindset shapes how I approach technical problems.</p>
          <strong>2000 <small>CHESS RATING</small></strong>
        </Reveal>
      </section>

      <section id="contact" className="section contact">
        <div className="section-label">05 — CONTACT</div>
        <Reveal>
          <p className="eyebrow">LET’S BUILD SOMETHING USEFUL</p>
          <h2>Have an idea?<br /><em>Let’s build it.</em></h2>
          <p>Open to software engineering opportunities, interesting projects and conversations around technology.</p>
          <div className="actions contact-actions"><a className="button primary" href={`mailto:${EMAIL}`}>Email me ↗</a><a className="button" href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn ↗</a><a className="button" href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub ↗</a></div>
        </Reveal>
      </section>

      <footer><span>© {new Date().getFullYear()} Abhijit Mule</span><span>React · C++ · DSA · Software Engineering</span></footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
