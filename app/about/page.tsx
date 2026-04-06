import React from 'react'
import Link from "next/link";

const About = () => {
  return (
    <main className="container">

      <div className="nav-box" style={{textAlign: "center"}}>
        <Link href="/"><strong>Home</strong></Link>
        <Link href="/about"><strong>About</strong></Link>
        <Link href="/projects"><strong>Projects</strong></Link>
        <Link href="/contact"><strong>Contact</strong></Link>
      </div>

      <div className="grid">
        <section className="card-light">
          <h2><strong>About</strong></h2>

          <p>
            Computer Science student at the University of Illinois Chicago, focused on 
            Python, JavaScript, C++, and machine learning. Experienced in building foundational 
            AI models and data-driven projects, with an interest in applying technology for social impact.
          </p>
        </section>

        <section className="card-light education">
          <h2><strong>Education</strong></h2>

          <img src="/Star-circle-design.png" className="circle-design"/>


          <p>
            Grayslake Central high School<br/>
            2021-2025<br/>
            Final GPA: 4.24
          </p>
          <br/>
          <p>
            University of Illinois Chicago<br/>
            2025-2029<br/>
            Current GPA: 4.0
          </p>
        </section>
      </div>


      <section className="card-light" style={{marginTop: "30px"}}>
        <h2 className="experience-title"><strong>
          Experience <img src="/Star-design.png" alt = "star" className="experience-star"/>
        </strong></h2>

        <div className="experience-grid">

          <div>
            <p><strong>AI Scholar Program | Inspirit AI</strong></p>
            <ul>
              <li>- Created and evaluated basic machine learning models using Python and Google Colab</li>
              <li>- Cooperated in small groups to problem-solve and create functional AI models using techniques like pair programming</li>
              <li>- Analyzed ethical considerations of AI, such as bias and privacy</li>
            </ul>
          </div>

          <div className="experience-box">
            <p><strong>Summer Immersion Program | Girls Who Code</strong></p>
            <ul>
              <li>- Built multiple styles of games using the p5.js JavaScript library using the Replit IDE</li>
              <li>- Collaborated in peer code reviews to improve program functionality</li>
              <li>- Gained exposure to careers in tech through mentorship</li>
            </ul>
          </div>
        </div>
      </section>


      <div className="grid">
        <section className="card-dark">
          <h2><strong>Skills</strong></h2>

          <img src="/Arrow-design.png" className="arrow-design"/>

          <p><strong>Coding Languages:</strong></p>
          <ul>
            <li>Python</li>
            <li>JavaScript</li>
            <li>C++</li>
          </ul>

          <p><strong>Tools:</strong></p>
          <ul>
            <li>Jupyter Notebooks</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Visual Studio Code</li>
            <li>Replit</li>
            <li>Figma</li>
          </ul>
        </section>

        <section className="card-light">
          <h2><strong>Honors / Awards</strong></h2>

          <ul>
            <li>2025 - 2026 Illinois State Scholar</li><br/>
            <li>2025 - 2026 UIC COE Scholarship</li><br/>
            <li>2023 - 2025 AP Scholar Award</li><br/>
            <li>2024 - 2025 National Honors Society</li><br/>
            <li>2023 - 2025 Spanish Honors Society</li>
          </ul>
        </section>
      </div>

    </main>
  )
}

export default About