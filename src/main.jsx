import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const projects = [
  {
    title: 'SafePath',
    text: 'AI-based road condition analysis and alert system focused on detecting potholes and helping users report unsafe road conditions.',
    tags: ['React', 'FastAPI', 'MongoDB', 'YOLO']
  },
  {
    title: 'Real-Time Chat Application',
    text: 'Multi-user chat experience designed around real-time communication, authentication and persistent data.',
    tags: ['MERN', 'Socket.io', 'JWT']
  }
];

const skills = ['C++', 'Data Structures & Algorithms', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'SQL', 'Git'];

function App() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top">AM<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="top" className="hero">
        <div className="glow glow-one" /><div className="glow glow-two" />
        <p className="eyebrow">INFORMATION TECHNOLOGY ENGINEER · PROBLEM SOLVER</p>
        <h1>Building digital experiences<br /><span>with purpose.</span></h1>
        <p className="hero-copy">I’m Abhijit Mule — a final-year IT engineering student who enjoys solving problems with code, building useful products and continuously improving through DSA.</p>
        <div className="actions"><a className="button primary" href="#projects">Explore my work ↓</a><a className="button" href="#contact">Let's connect</a></div>
        <div className="scroll-note">SCROLL TO DISCOVER <span>↓</span></div>
      </section>

      <section id="about" className="section about">
        <div className="section-label">01 — ABOUT</div>
        <div><h2>Curious by nature.<br /><em>Driven by challenges.</em></h2><p>I’m an Information Technology engineering student with a strong interest in Data Structures & Algorithms, software engineering and building practical applications.</p><p>I like understanding how things work under the hood, turning ideas into clean implementations and learning something new with every project.</p></div>
        <div className="stats"><div><strong>2000</strong><span>Chess Rating</span></div><div><strong>IT</strong><span>Engineering</span></div><div><strong>C++</strong><span>DSA Focus</span></div></div>
      </section>

      <section id="skills" className="section">
        <div className="section-label">02 — SKILLS</div>
        <h2>Tools I use to <em>build.</em></h2>
        <div className="skill-grid">{skills.map((skill, i) => <div className="skill" key={skill}><span>0{i + 1}</span>{skill}</div>)}</div>
      </section>

      <section id="projects" className="section projects">
        <div className="section-label">03 — SELECTED WORK</div>
        <h2>Ideas turned into <em>projects.</em></h2>
        <div className="project-grid">{projects.map((p, i) => <article className="project" key={p.title}><div className="project-number">0{i + 1}</div><h3>{p.title}</h3><p>{p.text}</p><div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div></article>)}</div>
      </section>

      <section className="section achievement"><div className="section-label">04 — BEYOND CODE</div><div className="achievement-card"><div><span className="chess">♞</span><h2>Strategy on the board.<br /><em>Precision in code.</em></h2></div><p>Chess has taught me to think ahead, evaluate trade-offs and stay calm when the position gets complicated. That same mindset shapes how I approach technical problems.</p><strong>2000 <small>CHESS RATING</small></strong></div></section>

      <section id="contact" className="section contact"><div className="section-label">05 — CONTACT</div><h2>Have an idea?<br /><em>Let’s build it.</em></h2><p>Open to software engineering opportunities, interesting projects and conversations around technology.</p><a className="button primary" href="mailto:abhijitmule@example.com">Get in touch ↗</a></section>

      <footer><span>© {new Date().getFullYear()} Abhijit Mule</span><span>Designed & built with React</span></footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
