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
  Cloud,
} from 'lucide-react';

function App() {
  const projects = [
    {
      title: "Marble Immobilier",
      description: "SiteWeb réaliser pour une Agence Immobilière, clé en main et moderne.",
      image: "https://i.postimg.cc/zB9ZgjvV/Chat-GPT-Image-9-avr-2025-02-01-58.png",
      technologies: ["PHP", "HTML", "css", "MySQL"],
      category: "Web App",
      color: "text-emerald-400",
    },
    {
      title: "CinéGest",
      description: "Logiciel de gestion de cinéma, permettant de gérer les films, les salles, les séances, les réservations, etc... en Javascript.",
      image: "https://i.postimg.cc/PxMYL62M/Cinegest-banner-800w.png",
      technologies: ["Java", "JavaFX", "SceneBuilder", "MySQL"],
      category: "Desktop App",
      color: "text-blue-400",
    },
    {
      title: "JavaNote",
      description: "Application de prise de notes, permettant de créer, modifier et supprimer des notes en Java.",
      image: "https://i.postimg.cc/DZCmkRxR/Chat-GPT-Image-9-avr-2025-02-08-00.png",
      technologies: ["Java", "JavaFX", "SceneBuilder", "MySQL"],
      category: "Desktop App",
      color: "text-blue-400",
    },
    {
      title: "Blog",
      description: "Site de blog, permettant de créer, modifier et supprimer des articles en PHP.",
      image: "https://i.postimg.cc/8c2pTGMX/Chat-GPT-Image-9-avr-2025-02-10-09.png",
      technologies: ["PHP", "HTML", "CSS", "MySQL"],
      category: "Web App",
      color: "text-emerald-400",
    }
  ];

  const skills = [
    {
      title: "Development",
      description: "Creation de sites et d'applications web modernes en suivant un cahier des charges.",
      icon: Code2,
      color: "text-purple-400",
    },
    {
      title: "Maintenance Informatique",
      description: "Resoudre les problèmes techniques et assurer le bon fonctionnement des systèmes.",
      icon: Shield,
      color: "text-emerald-400",
    },
    {
      title: "Infrastructure Cloud",
      description: "Gestion des postes de travail et utilisateur via les environnements cloud Azure et Exchange.",
      icon: Cloud,
      color: "text-blue-400",
    },
    {
      title: "Gestion de Base de Données",
      description: "Création, gestion et sécurisation de bases de données relationnelles avec MySQL.",
      icon: Database,
      color: "text-rose-400",
    },
  ];

  const experience = [
    {
      company: "Baccalauréat STI2D",
      position: "Lycée Jules Ferry - Cannes",
      period: "2020 - 2021",
      achievements: [
        "Option Inovation Technologique et Eco-Conception.",
        "Projets de développement d'applications et de systèmes.",
        "Obtention du diplôme.",
      ],
    },
    {
      company: "EPITECH",
      position: "NICE",
      period: "2021 - 2023",
      achievements: [
        "Formation en informatique axée sur la pédagogie par projets.",
        "Développement de compétences en programmation, gestion de projet et travail d'équipe.",
        "Apprentissage de languages de bas niveau, C, C+++",
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
              J'ai ensuite intégré un BTS SIO afin de découvrir d'autres facettes de l'informatique et me faire une expérience professionnel <br /> a travers l'alternance en entreprise.
            </p>
          </Card>

      {/* Professional Experience */}
      <Section id="experience">
        <h2 className="text-3xl font-bold mb-8">Cursus Scolaire</h2>
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

          <h2 className="text-3xl font-bold mb-8">Mes compétences & Expériences</h2>
          <p className="text-gray-300 mb-8"></p>
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

      

      {/* Projects Section */}
      <Section id="projects">
        <h2 className="text-3xl font-bold mb-8">Projets réalisés</h2>
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
                    href="https://github.com/0xAbdel/Broc-liande-Immobilier"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Globe className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href="https://github.com/0xAbdel/Broc-liande-Immobilier"
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
        <h2 className="text-3xl font-bold mb-8">Veille Technologique</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <Brain className="w-8 h-8 text-blue-400 mb-4" />
            <h3 
              className="text-xl font-semibold mb-4"
              onClick={() => window.open('https://feedly.com/i/board/content/user/d833c1f0-c8ca-425c-855f-76b2222d5096/tag/02d4e0b0-a91e-4908-9f43-0efec3533b05', '_blank')}
              style={{ cursor: 'pointer' }}
            >
              Intelligence Artificielle
            </h3>
            <p className="text-gray-300">
              Suivi des avancées en IA, apprentissage automatique et leurs applications dans le développement logiciel.
              Apprendre les dernières tendances et outils pour intégrer l'IA dans mes projets.
              Connaitre les enjeux éthiques et de sécurité liés à l'IA.
            </p>
          </Card>
          <Card>
            <Shield className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 
              className="text-xl font-semibold mb-4"
              onClick={() => window.open('https://feedly.com/i/board/content/user/d833c1f0-c8ca-425c-855f-76b2222d5096/tag/98bd56d9-cc48-46ff-b550-a27ff684d993', '_blank')}
              style={{ cursor: 'pointer' }}
            >
              CyberSécurité
            </h3>
            <p className="text-gray-300">
              Suivi des menaces de sécurité, des vulnérabilités et des meilleures pratiques pour protéger les systèmes.
              Apprendre les techniques de sécurité réseau et de cryptographie.
              Comprendre l'importance de la sécurité dans le développement logiciel et dans l'informatique en général.
            </p>
          </Card>
        </div>
      </Section>
    </div>
  );
}

export default App;