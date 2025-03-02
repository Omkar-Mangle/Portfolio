import React, { useState } from 'react';
import { Menu, X, Code2, BookOpen, Briefcase, Award, User, Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { ProjectCard } from './components/ProjectCard';
import { SkillBadge } from './components/SkillBadge';
import { Education } from './components/Education';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = [
    "Java", "Python", "C++", "MySQL", "Spring Boot", "Flutter", "Excel", "RESTful APIs", "PHP", "JavaScript", "HTML", "CSS"
  ];

  const projects = [
    {
      title: "Online Car Rental Portal",
      description: "A comprehensive web-based system for car rentals with user and admin modules, booking management, and payment processing.",
      tech: ["PHP", "MySQL", "JavaScript", "jQuery", "HTML", "CSS"],
      icon: "🚗",
      features: [
        "User registration & booking system",
        "Admin panel for car management",
        "Payment gateway integration",
        "Responsive UI design"
      ]
    },
    {
      title: "Online Crime Reporting System",
      description: "A platform for users to report crimes online and track case status.",
      tech: ["Python", "MySQL"],
      icon: "🚔"
    },
    {
      title: "E-Clinic System",
      description: "Online consultation system for doctors and patients.",
      tech: ["Python", "MySQL"],
      icon: "🏥"
    },
    {
      title: "BankEase",
      description: "Banking system managing customer accounts and transactions.",
      tech: ["Java", "MySQL"],
      icon: "🏦"
    },
    {
      title: "Real-time Bus Tracking",
      description: "Android app for real-time bus tracking (Ongoing).",
      tech: ["Flutter", "Firebase"],
      icon: "🚌"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Omkar Mangle
            </span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#education" className="hover:text-blue-400 transition-colors">Education</a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="block px-3 py-2 hover:bg-gray-800 rounded-md">About</a>
              <a href="#skills" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Skills</a>
              <a href="#projects" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Projects</a>
              <a href="#education" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Education</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Software Developer
                </span>
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                MCA student at SVERI's College of Engineering with a passion for software development.
                Experienced in Java, Python, and MySQL. Focused on Core Java, Spring Boot, and microservices.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                   className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:contact@example.com"
                   className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-gray-800">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Coding" 
                  className="w-full h-full object-cover rounded-lg mix-blend-overlay"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <SkillBadge key={index} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="space-y-8">
            <Education 
              degree="Master of Computer Applications (MCA)"
              institution="SVERI's College of Engineering, Pandharpur"
              year="2023 - Present"
            />
            <Education 
              degree="Bachelor of Computer Applications (BCA)"
              institution="Institute of Computer Management Studies, Pandharpur"
              year="2018 - 2021"
              grade="CGPA: 8.64"
            />
            <Education 
              degree="HSC (Higher Secondary Certificate)"
              institution="Vivek Vardhini Jr. College, Pandharpur"
              year="2017 - 2018"
              grade="56.77%"
            />
            <Education 
              degree="SSC (Secondary School Certificate)"
              institution="Apte Uplap Prashala, Pandharpur"
              year="2015 - 2016"
              grade="68.20%"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Omkar Mangle. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;