import { useMemo, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import './App.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString()

function App() {
  const resumePath = '/Prajwal_Mhaske_FullStack_Resume.pdf'
  const linkedinUrl = 'https://www.linkedin.com/in/prajwalmhaske2003'
  const githubUrl = 'https://github.com/'
  const prefersDark = useMemo(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches,
    [],
  )
  const [isDark, setIsDark] = useState(prefersDark)
  const [pdfReady, setPdfReady] = useState(true)

  const openResume = async () => {
    window.open(resumePath, '_blank', 'noopener,noreferrer')
  }

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = resumePath
    link.download = resumePath.split('/').pop() ?? 'resume'
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  const skills = {
    Frontend: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    Backend: ['Java', 'Spring Boot', 'Spring MVC', 'REST API'],
    Database: ['MySQL', 'JDBC'],
    Tools: ['Git & GitHub', 'Figma'],
  }

  const projects = [
    {
      name: 'E-commerce Web App',
      stack: 'React, Spring Boot, MySQL',
      description:
        'Built a full-stack shopping platform with authentication, product catalog, cart flow, and secure checkout integration.',
      live: '#',
      github: '#',
    },
    {
      name: 'Admin Panel System',
      stack: 'React, Spring Boot, MySQL',
      description:
        'Developed role-based admin dashboard to manage users, reports, and operations with reusable components and optimized APIs.',
      live: '#',
      github: '#',
    },
    {
      name: 'Payment API Integration',
      stack: 'Java, Spring Boot, REST API',
      description:
        'Integrated third-party payment APIs with transaction tracking, failure handling, and secure backend validation.',
      live: '#',
      github: '#',
    },
    {
      name: 'CRUD Application',
      stack: 'React, Java, Spring Boot, MySQL',
      description:
        'Created a performant CRUD app with clean architecture, validation, and structured database access for business records.',
      live: '#',
      github: '#',
    },
  ]

  return (
    <div className={`portfolio ${isDark ? 'theme-dark' : 'theme-light'}`}>
      <header className="hero section">
        <p className="eyebrow">Java Full Stack Developer</p>
        <h1>Hi, I&apos;m Prajwal Mhaske</h1>
        <p className="tagline">
          Passionate Full Stack Developer with 2+ years of experience in building
          scalable web applications using Java, Spring Boot, and React.
        </p>
        <div className="hero-actions">
          <button
            type="button"
            className="btn toggle-btn"
            onClick={() => setIsDark((prev) => !prev)}
          >
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </button>
          <a href="#projects" className="btn primary">
            View Projects
          </a>
          <button type="button" className="btn secondary action-btn" onClick={openResume}>
            View Resume
          </button>
          <button type="button" className="btn secondary action-btn" onClick={downloadResume}>
            Download Resume
          </button>
          <a href={linkedinUrl} className="btn secondary" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={githubUrl} className="btn secondary" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </header>

      <main>
        <section className="section card" id="about">
          <h2>About Me</h2>
          <p>
            I am a Java Full Stack Developer with over 2 years of hands-on
            experience in developing web applications. I have completed my BBA
            in Computer Applications from Pune University.
          </p>
          <p>
            I specialize in building end-to-end applications using Java, Spring
            Boot, and React. I enjoy solving real-world problems, optimizing
            performance, and continuously learning new technologies.
          </p>
          <p>
            I am currently looking for opportunities where I can contribute to
            impactful projects and grow as a developer.
          </p>
        </section>

        <section className="section" id="skills">
          <h2>Skills</h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, list]) => (
              <article className="card skill-card" key={category}>
                <h3>{category}</h3>
                <ul>
                  {list.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <h2>Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="card project-card" key={project.name}>
                <h3>{project.name}</h3>
                <p className="stack">{project.stack}</p>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.live}>Live Demo</a>
                  <a href={project.github}>GitHub</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section card" id="resume">
          <h2>Resume Preview</h2>
          <p className="resume-help">
            If preview is blank, place your PDF at
            `public/Prajwal_Mhaske_FullStack_Resume.pdf`.
          </p>
          {pdfReady ? (
            <div className="resume-viewer">
              <Document file={resumePath} onLoadError={() => setPdfReady(false)}>
                <Page pageNumber={1} width={720} renderTextLayer={false} />
              </Document>
            </div>
          ) : (
            <p className="resume-error">
              Resume PDF not found. Add
              `Prajwal_Mhaske_FullStack_Resume.pdf` in the `public` folder.
            </p>
          )}
        </section>

        <section className="section split">
          <article className="card">
            <h2>Experience</h2>
            <h3>Java Full Stack Developer</h3>
            <p className="muted">Experience: 2+ Years</p>
            <p>
              Worked on developing REST APIs, frontend UI using React, and
              backend services using Spring Boot.
            </p>
            <p>
              Handled database integration and optimized application
              performance.
            </p>
          </article>

          <article className="card">
            <h2>Education</h2>
            <h3>BBA in Computer Applications</h3>
            <p className="muted">Pune University</p>
          </article>
        </section>

        <section className="section card" id="contact">
          <h2>Contact</h2>
          <ul className="contact-list">
            <li>
              <span>Phone:</span>
              <a href="tel:+919699880215">9699880215</a>
            </li>
            <li>
              <span>Email:</span>
              <a href="mailto:prajwalmhaske4438@gmail.com">
                prajwalmhaske4438@gmail.com
              </a>
            </li>
            <li>
              <span>LinkedIn:</span>
              <a
                href="https://www.linkedin.com/in/prajwalmhaske2003"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/prajwalmhaske2003
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="section footer">
        <p>
          Built with React. Optimized for modern browsers and interview-ready
          presentation.
        </p>
        <p>
          Resume is configured for `public/Prajwal_Mhaske_FullStack_Resume.pdf`.
        </p>
      </footer>
    </div>
  )
}

export default App
