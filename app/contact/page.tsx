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
            <h2 className="email-title"><strong>
              <img src="/email-icon.png" alt="email-image" className="email-image"/> Email: 
            </strong></h2>

            <br/>

            <p>nitya.sagubadi@gmail.com</p>
          </section>

          <section className="card-dark">
            <h2 className="phone-title"><strong>
              <img src="phone-icon.png" alt="phone-image" className="phone-image"/> Phone: 
            </strong></h2>

            <br/>

            <p>815-321-3084</p>
          </section>

          <section className="card-dark">
            <h2 className="linkedin-title"><strong>
              <img src="/linkedin-logo.png" alt="linkedin-logo" className="linkedin-image"/> LinkedIn: 
            </strong></h2> 
            
            

            <a href="https://www.linkedin.com/in/nityasri-sagubadi-388172287/">
              View LinkedIn Profile
            </a>
          
          </section>

          <section className="card-light">
            <h2 className="github-title"><strong>
              <img src="/github-logo.png" alt="github-logo" className="github-image"/> GitHub: 
            </strong></h2>

            <br/>

            <a href="https://github.com/nityasrisagubadi">
              View GitHub Profile
            </a>
          </section>

        </div>
    </main>
  )
}

export default contact