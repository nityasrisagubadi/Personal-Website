import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 p-8">
      
      <div className="flex gap-6">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/projects">Projects</Link>
      </div>

      <h1>Welcome to my Website! </h1>
      <p>My name is Nitya Sagubadi, I am a freshman in Computer Science at the University of Illinois Chicago. </p>

      <Image
        src="/Campus-ARC-1090x595.avif"
        alt="UIC Image"
        width={500}
        height={300}
      />
      
    </div>
  );
}