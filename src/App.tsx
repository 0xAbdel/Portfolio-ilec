import React from 'react';
import { Card } from './components/Card';
import { Section } from './components/Section';
import { ThemeToggle } from './components/ThemeToggle';
import { GeometricShapes } from './components/GeometricShapes';
import {
  Github,
  Linkedin,
  Mail,
  Globe,
  Brain,
  Shield,
  Code2,
  Database,
  Palette,
  Globe2,
  Award,
  BookOpen,
  Users,
  Briefcase,
} from 'lucide-react';

function App() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with real-time inventory management, secure payments, and an intuitive admin dashboard.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
      technologies: ["Next.js", "TypeScript", "Stripe", "Prisma"],
      category: "Full Stack",
      color: "text-emerald-400",
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Analytics dashboard that uses machine learning to provide insights and predictions from user data.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      technologies: ["React", "Python", "TensorFlow", "D3.js"],
      category: "Data Science",
      color: "text-blue-400",
    },
    {
      title: "Social Media Mobile App",
      description: "Cross-platform mobile application for connecting professionals in creative industries.",
      image: "https://images.unsplash.com/photo-1573152958734-1922c188fba3?w=800",
      technologies: ["React Native", "Firebase", "Redux", "Node.js"],
      category: "Mobile",
      color: "text-purple-400",
    },
    {
      title: "Real-time Collaboration Tool",
      description: "Browser-based collaboration tool with real-time document editing and video conferencing.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
      technologies: ["WebRTC", "Socket.io", "MongoDB", "Express"],
      category: "Web App",
      color: "text-rose-400",
    }
  ];

  const skills = [
    {
      title: "Development WEB",
      description: "Creation de sites et d'applications web modernes en suivant un cahier des charges",
      icon: Code2,
      color: "text-purple-400",
    },
    {
      title: "Maintenance Informatique",
      description: "Resoudre les problèmes techniques et assurer le bon fonctionnement des systèmes",
      icon: Shield,
      color: "text-blue-400",
    },
    {
      title: "Base de Données",
      description: "Gestion et optimisation des bases de données ainsi que la sécurité des données",
      icon: Database,
      color: "text-emerald-400",
    },
    {
      title: "UI/UX Design",
      description: "Conception d'interfaces utilisateur intuitives et attrayantes pour une expérience utilisateur optimale",
      icon: Palette,
      color: "text-rose-400",
    },
  ];

  const experience = [
    {
      company: "Tech Solutions Inc.",
      position: "Senior Frontend Developer",
      period: "2021 - Present",
      achievements: [
        "Led a team of 5 developers in building a modern SaaS platform",
        "Improved application performance by 40%",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
      ],
    },
    {
      company: "Digital Innovations Ltd.",
      position: "Full Stack Developer",
      period: "2019 - 2021",
      achievements: [
        "Developed and maintained multiple client projects",
        "Introduced TypeScript reducing bugs by 30%",
        "Mentored junior developers",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <GeometricShapes />
      <ThemeToggle />
      
      {/* Hero Section */}
      <Section className="min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">Abdelrahman El Wakil</h1>
            <h2 className="text-2xl text-purple-400 mb-6">Apprenti Developpeur informatique</h2>
            <p className="text-gray-300 mb-8">
              Étudiant en informatique dans un cursus BTS SIO depuis 2 ans et passionné par le développement et le réseau.
              Alternant au service du support informatique chez <strong>GIEPS, une filliale AXA</strong>.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-colors">
                Me contacter
              </a>
              <div className="flex gap-4">
                <a href="https://github.com/0xAbdel" className="hover:text-purple-400 transition-colors">
                  <Github />
                </a>
                <a href="https://www.linkedin.com/in/abdelrahman-e-8b1741243/" className="hover:text-purple-400 transition-colors">
                  <Linkedin />
                </a>
                <a href="mailto:abdel.elw353@gmail.com" className="hover:text-purple-400 transition-colors">
                  <Mail />
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://i.postimg.cc/9f5XRkFh/IMG-3228.webp"
              alt="Profile"
              className="rounded-2xl"
            />
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about">
        <h2 className="text-3xl font-bold mb-8">Mon Parcours</h2>
        <div className="space-y-8">
          <Card>
            <p className="text-gray-300 leading-relaxed text-lg">
              Ayant passé un Baccalauréa STI2D, la voie de l'informatique était une evidence pour moi avant même mon entrée au lycée.<br />
              Après l'obtention de mon BAC j'ai intégré Epitech, une école d'informatique réputé pour sa pédagogie par projets pendant 3 ans.<br />
              J'ai ensuite intégré un BTS SIO afin de découvrir d'autres facettes de l'informatique et me faire une expérience professionnel <br /> a travers l'alternance en entreprise.<br />

            </p>
          </Card>

          <div className="grid md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="text-center">
                <skill.icon className={`w-8 h-8 ${skill.color} mx-auto mb-4`} />
                <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="space-y-4">
              <div className="flex items-center gap-4">
                <Globe2 className="w-8 h-8 text-blue-400" />
                <div>
                  <h3 className="text-xl font-semibold">Projets En Entreprise</h3>
                  <p className="text-gray-400">
                    Participation à des projets en entreprise, travaillant sur des solutions innovantes et des défis techniques.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="space-y-4">
              <div className="flex items-center gap-4">
                <Award className="w-8 h-8 text-yellow-400" />
                <div>
                  <h3 className="text-xl font-semibold">Formations D'Entreprise</h3>
                  <p className="text-gray-400">
                    Participation à des formations internes de sensibilisation sur les dernières technologies et la sécurité en entreprise.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="space-y-4">
              <div className="flex items-center gap-4">
                <BookOpen className="w-8 h-8 text-emerald-400" />
                <div>
                  <h3 className="text-xl font-semibold">Apprentissage</h3>
                  <p className="text-gray-400">
                    Apprentissage continu sur le terrain ainsi qu'a travers differentes documentations et procédure internes.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="space-y-4">
              <div className="flex items-center gap-4">
                <Users className="w-8 h-8 text-purple-400" />
                <div>
                  <h3 className="text-xl font-semibold">Travail d'Equipe</h3>
                  <p className="text-gray-400">
                    Équipes de travail collaboratif, Alternant dans le même domaine d'études et passionnés par l'informatique nous permettant de partager nos connaissances.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Professional Experience */}
      <Section id="experience">
        <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
        <div className="space-y-6">
          {experience.map((job, index) => (
            <Card key={index} className="relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-purple-500/10">
                  <Briefcase className="w-6 h-6 text-purple-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{job.company}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400">{job.position}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400">{job.period}</span>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className={`text-sm font-medium ${project.color}`}>
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Globe className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Tech Watch Section */}
      <Section id="tech-watch">
        <h2 className="text-3xl font-bold mb-8">Technology Watch</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <Brain className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-4">AI Watch</h3>
            <p className="text-gray-300">
              Staying current with the latest developments in AI, including machine learning frameworks,
              natural language processing, and AI-powered development tools.
            </p>
          </Card>
          <Card>
            <Shield className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Security Watch</h3>
            <p className="text-gray-300">
              Monitoring cybersecurity trends, best practices, and emerging threats to ensure
              robust and secure application development.
            </p>
          </Card>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="pb-32">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <Card>
          <div className="flex flex-col items-center text-center">
            <Mail className="w-12 h-12 text-rose-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Let's Connect</h3>
            <p className="text-gray-300 mb-4">
              I'm always open to new opportunities and interesting projects.
            </p>
            <a
              href="mailto:contact@example.com"
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-colors"
            >
              Send Message
            </a>
          </div>
        </Card>
      </Section>
    </div>
  );
}

export default App;