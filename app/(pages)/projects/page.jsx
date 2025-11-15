import Link from "next/link";
import { ThreeDMarquee } from '../../components/ProjectBackground';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern portfolio website built with Next.js and Three.js featuring interactive 3D backgrounds and smooth animations.",
      tech: ["Next.js", "Three.js", "Tailwind CSS", "GSAP"],
      status: "Completed"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      status: "In Progress"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team collaboration features.",
      tech: ["React", "Firebase", "Material-UI", "Socket.io"],
      status: "Planning"
    }
  ];

  return (
    <div className="min-h-screen relative" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      <ThreeDMarquee className="absolute inset-0 opacity-40" />
      <div className="relative z-10 pt-24 sm:pt-28 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project) => (
            <div key={project.id} className="p-4 sm:p-6 rounded-lg transition-colors" style={{ background: 'var(--background)', color: 'var(--foreground)', opacity: 0.9 }}>
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-lg sm:text-xl font-semibold">{project.title}</h2>
                <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${
                  project.status === 'Completed' ? 'bg-green-600' :
                  project.status === 'In Progress' ? 'bg-yellow-600' : 'bg-blue-600'
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="mb-4" style={{ opacity: 0.8 }}>{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span key={index} className="px-2 py-1 rounded text-sm" style={{ background: 'var(--background)', opacity: 0.7 }}>
                    {tech}
                  </span>
                ))}
              </div>
              <button className="font-medium" style={{ color: '#60a5fa' }}>
                View Details →
              </button>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}