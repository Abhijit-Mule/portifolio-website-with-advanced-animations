import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const projects = [
  { title: 'SafePath', text: 'AI-based road condition analysis and alert system focused on detecting potholes and helping users report unsafe road conditions.', tags: ['React', 'FastAPI', 'MongoDB', 'YOLO'] },
  { title: 'Real-Time Chat Application', text: 'A multi-user chat application built with MongoDB, Express.js, React.js and Node.js, using Socket.io for real-time messaging and JWT for authentication.', tags: ['MERN', 'Socket.io', 'JWT'] }
];

const skills = ['C++', 'Data Structures & Algorithms', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MySQL', 'MongoDB', 'Git', 'GitHub'];

function App() {
  return (
    <main>
      <nav className="nav"><a className="brand" href="#top">AM<span>.</span></a><div className="nav-links"><a href="#about">About</a><a href="#skills">Skills</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#contact">Contact</a></div></nav>
      <section id="top" className="hero"><div className="glow glow-one"/><div className="glow glow-two"/><p className="eyebrow">INFORMATION TECHNOLOGY ENGINEER · PROBLEM SOLVER</p><h1>Building digital experiences<br/><span>with purpose.</span></h1><p className="hero-copy">I’m Abhijit Mule — an Information Technology engineer focused on software engineering, Data Structures & Algorithms and practical products.</p><div className="actions"><a className="button primary" href="#projects">Explore my work ↓</a><a className="button" href="mailto:abhijit.mule_it22@pccoer.in">Let's connect</a></div><div className="socials"><a href="https://github.com/Abhijit-Mule" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/abhijit-mule-cr7007/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div><div className="scroll-note">SCROLL TO DISCOVER <span>↓</span></div></section>
      <section id="about" className="section about"><div className="section-label">01 — ABOUT</div><div><h2>Curious by nature.<br/><em>Driven by challenges.</em></h2><p>I’m an Information Technology engineering graduate with a strong interest in Data Structures & Algorithms, software engineering and building practical applications.</p><p>I enjoy understanding how systems work, turning ideas into clean implementations and continuously improving through problem solving.</p></div><div className="stats"><div><strong>8.53</strong><span>BE IT SGPA</span></div><div><strong>2000</strong><span>Chess Rating</span></div><div><strong>C++</strong><span>DSA Focus</span></div></div></section>
      <section id="skills" className="section"><div className="section-label">02 — SKILLS</div><h2>Tools I use to <em>build.</em></h2><div className="skill-grid">{skills.map((skill,i)=><div className="skill" key={skill}><span>{String(i+1).padStart(2,'0')}</span>{skill}</div>)}</div></section>
      <section id="experience" className="section experience"><div className="section-label">03 — EXPERIENCE</div><div className="experience-card"><div><p className="eyebrow">JAN 2025 — MAR 2025</p><h2>Web Development<br/><em>Internship</em></h2></div><div><h3>Codtech IT Solutions Pvt. Ltd.</h3><p>Developed responsive user interfaces using HTML, CSS, JavaScript and Bootstrap. Built backend modules with Node.js and MySQL for dynamic content management and collaborated with a remote team to deliver full-stack modules.</p></div></div></section>
      <section id="projects" className="section projects"><div className="section-label">04 — SELECTED WORK</div><h2>Ideas turned into <em>projects.</em></h2><div className="project-grid">{projects.map((p,i)=><article className="project" key={p.title}><div className="project-number">0{i+1}</div><h3>{p.title}</h3><p>{p.text}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></article>)}</div></section>
      <section className="section achievement"><div className="section-label">05 — BEYOND CODE</div><div className="achievement-card"><div><span className="chess">♞</span><h2>Strategy on the board.<br/><em>Precision in code.</em></h2></div><p>Chess has taught me to think ahead, evaluate trade-offs and stay calm when the position gets complicated — the same mindset I bring to technical problem solving.</p><strong>2000 <small>CHESS RATING</small></strong></div></section>
      <section id="contact" className="section contact"><div className="section-label">06 — CONTACT</div><h2>Have an idea?<br/><em>Let’s build it.</em></h2><p>Open to software engineering opportunities, interesting projects and conversations around technology.</p><div className="actions"><a className="button primary" href="mailto:abhijit.mule_it22@pccoer.in">abhijit.mule_it22@pccoer.in ↗</a><a className="button" href="https://www.linkedin.com/in/abhijit-mule-cr7007/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></section>
      <footer><span>© {new Date().getFullYear()} Abhijit Mule</span><span>Designed & built with React</span></footer>
    </main>
  );
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
