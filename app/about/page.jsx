import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 sm:pt-28 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8">About Me</h1>
        <div className="space-y-4 sm:space-y-6 text-base sm:text-lg">
          <p>
            Welcome to my portfolio! I'm Sunjeet Kajla, a passionate developer 
            with expertise in modern web technologies.
          </p>
          <p>
            I specialize in creating interactive and engaging web experiences 
            using React, Next.js, Three.js, and other cutting-edge technologies.
          </p>
          <p>
            My goal is to build applications that not only function well but 
            also provide delightful user experiences through thoughtful design 
            and smooth animations.
          </p>
        </div>
      </div>
    </div>
  );
}