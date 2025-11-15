import Background from "../components/Background";
import TextType from "../components/TextType";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <Background />
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center">
          <TextType 
            text="Hello World, I'm Sunjeet Kajla!" 
            className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4"
            style={{ color: 'var(--foreground)' }}
          />
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            Full Stack Developer, App Developer, AI/ML Engineer & Creative Technologist
          </p>
        </div>
      </div>
    </div>
  );
}
