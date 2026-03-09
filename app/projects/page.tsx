import React from 'react'
import Link from "next/link";


const projects = () => {
  return (
    <main className="container">

      <div className="nav-box" style={{textAlign: "center"}}>
        <Link href="/"><strong>Home</strong></Link>
        <Link href="/about"><strong>About</strong></Link>
        <Link href="/contact"><strong>Contact</strong></Link>
        <Link href="/projects"><strong>Projects</strong></Link>
      </div>

      <section className="projects-card">
        <div className="projects-grid">

          {/* LEFT SIDE */}

          <div>
            <h2><strong>Projects</strong></h2>
            <ul>
              <li><strong>UIC SparkHacks Hackathon Project: Global Studios</strong></li>
              <li>
                <strong>Description:</strong> Global Studios is a global
                platform that connects people across the film industry.
                Users can create profiles, share their work, and build
                international networks. Our interactive 3D globe helps
                users visualize global connections and develop a global
                citizen mindset.
              </li>
              <li><strong>Role:</strong> UI Designer</li>
              <li>
                <strong>Tools Used:</strong> Figma, CSS, SQL, React, Java,
                Supabase, Tailwinds, Git, GitHub, Visual Studio Code
              </li>
              <li>
                <strong>REPO Link:</strong>
                https://github.com/lope6/GlobalStudios.git
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE */}

          <div className="project-image-box">
            <img
              src="/Projects-Global-Studios.png"
              alt="Global Studios Logo"
              className="project-image"
            />
          </div>

        </div>
      </section>
    </main>
  )
}

export default projects