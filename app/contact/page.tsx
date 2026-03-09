import React from 'react'
import Link from "next/link";


const contact = () => {
  return (
    <main className="container">
      
      <div className="nav-box" style={{textAlign: "center"}}>
        <Link href="/"><strong>Home</strong></Link>
        <Link href="/about"><strong>About</strong></Link>
        <Link href="/contact"><strong>Contact</strong></Link>
        <Link href="/projects"><strong>Projects</strong></Link>
      </div>

      <section className="hero" style={{marginTop: 20}}>
        <div>
          <h1>Where to Contact Me:</h1>
        </div>
      </section>


        <div className="grid">

          <section className="card-light">
            <h2><strong>Email: </strong>nitya.sagubadi@gmail.com</h2>
          </section>

          <section className="card-dark">
            <h2><strong>Phone: </strong>815-321-3084</h2>
          </section>

          <section className="card-dark">
            <h2><strong>LinkedIn: </strong>www.linkedin.com/in/nityasri-sagubadi-388172287</h2>
          </section>

          <section className="card-light">
            <h2><strong>GitHub: </strong>https://github.com/nityasrisagubadi</h2>
          </section>

        </div>
    </main>
  )
}

export default contact