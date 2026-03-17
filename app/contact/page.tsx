import React from 'react'
import Link from "next/link";


const contact = () => {
  return (
    <main className="container">
      
      <div className="nav-box" style={{textAlign: "center"}}>
        <Link href="/"><strong>Home</strong></Link>
        <Link href="/about"><strong>About</strong></Link>
        <Link href="/projects"><strong>Projects</strong></Link>
        <Link href="/contact"><strong>Contact</strong></Link>
      </div>

      <section className="hero" style={{marginTop: 20}}>
        <div>
          <h1>Where to Contact Me:</h1>
        </div>
      </section>


        <div className="grid">

          <section className="card-light">
            <h2><strong>Email: </strong></h2>
            <p>nitya.sagubadi@gmail.com</p>
          </section>

          <section className="card-dark">
            <h2><strong>Phone: </strong></h2>
            <p>815-321-3084</p>
          </section>

          <section className="card-dark">
            <h2><strong>LinkedIn: </strong></h2>
            <a href="https://www.linkedin.com/in/nityasri-sagubadi-388172287/">
              View LinkedIn Profile
            </a>
          
          </section>

          <section className="card-light">
            <h2><strong>GitHub: </strong></h2>
            <a href="https://github.com/nityasrisagubadi">
              View GitHub Profile
            </a>
          </section>

        </div>
    </main>
  )
}

export default contact