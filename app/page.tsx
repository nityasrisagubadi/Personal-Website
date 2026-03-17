import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 p-8">

    <div className="header-image">
      <img 
        src="/Header-image.png"
        alt="Header Image"
      />
    </div>

    <section className="card-dark" style={{textAlign: "center"}}>
      <h2><strong>Welcome to my Website!</strong></h2>
      <p style={{fontSize: "20px", lineHeight: "1.6"}}>
        I am a Computer Science student of UIC passionate about AI, software development, design, and building 
        technology that creates a positive social impact.
      </p>
    </section> 

    <div className="nav-box" style={{textAlign: "center"}}>
      <Link href="/about"><strong>About</strong></Link>
      <Link href="/projects"><strong>Projects</strong></Link>
      <Link href="/contact"><strong>Contact</strong></Link>
    </div>

    </div>
  );
}