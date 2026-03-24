import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Globe, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink, 
  ChevronRight, 
  Menu, 
  X,
  BookOpen,
  User,
  Briefcase,
  GraduationCap,
  Send
} from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const skills = [
  { name: 'Java', level: 75, icon: <Code2 className="w-5 h-5" /> },
  { name: 'C Programming', level: 80, icon: <Terminal className="w-5 h-5" /> },
  { name: 'Python', level: 60, icon: <Cpu className="w-5 h-5" /> },
  { name: 'HTML/CSS', level: 85, icon: <Globe className="w-5 h-5" /> },
];

const projects = [
  {
    title: 'Student Management System',
    description: 'A Python-based application to manage student records, grades, and attendance with a simple GUI.',
    tech: ['Python', 'Tkinter', 'SQLite'],
    link: '#',
  },
  {
    title: 'Basic Calculator',
    description: 'A robust command-line calculator built in C that handles basic arithmetic operations with error handling.',
    tech: ['C Programming'],
    link: '#',
  },
  {
    title: 'Simple Portfolio',
    description: 'A modern, responsive personal portfolio website built using React and Tailwind CSS.',
    tech: ['React', 'Tailwind CSS', 'Motion'],
    link: '#',
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-red-600 selection:text-white">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.a 
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tighter flex items-center gap-2"
          >
            <span className="text-red-600">ROHIT</span>
            <span className="text-zinc-100">ARYA</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-medium hover:text-red-500 transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-zinc-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-zinc-900 border-b border-zinc-800 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium hover:text-red-500 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-3 py-1 bg-red-600/10 text-red-500 text-xs font-bold tracking-widest uppercase rounded-full border border-red-600/20 mb-6"
            >
              Available for Internships
            </motion.span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6">
              ROHIT <br />
              <span className="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]">ARYA</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-medium mb-8 max-w-lg">
              BCA Student | <span className="text-zinc-100">Aspiring Software Developer</span>
            </p>
            <p className="text-zinc-500 mb-10 max-w-md leading-relaxed">
              Passionate about coding, learning new technologies, and building real-world projects. Currently exploring the depths of Java and Python.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects"
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] flex items-center gap-2"
              >
                View My Work <ChevronRight className="w-4 h-4" />
              </a>
              <a 
                href="#contact"
                className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-lg border border-zinc-800 transition-all"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden md:flex justify-center"
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-red-600 rounded-2xl rotate-6 opacity-20 animate-pulse" />
              <div className="absolute inset-0 bg-zinc-900 border-2 border-red-600/50 rounded-2xl flex items-center justify-center overflow-hidden">
                <Code2 className="w-32 h-32 text-red-600" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-zinc-950 border border-zinc-800 rounded-xl p-4 flex flex-col justify-center shadow-2xl">
                <span className="text-red-500 font-bold text-2xl">BCA</span>
                <span className="text-zinc-500 text-xs uppercase tracking-widest">Student</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -top-10 -left-10 text-red-600/10 font-black text-9xl select-none">ABOUT</div>
                <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
                  <User className="text-red-600" /> Who Am I?
                </h2>
                <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                  <p>
                    Hey there! I'm <span className="text-zinc-100 font-medium">Rohit Arya</span>, a tech enthusiast from India currently pursuing my <span className="text-red-500">BCA</span>. 
                  </p>
                  <p>
                    As a fresher in the world of software development, I'm constantly curious about how things work under the hood. I enjoy the challenge of solving complex problems and turning ideas into functional code.
                  </p>
                  <p>
                    When I'm not coding, you'll probably find me exploring new technologies, reading about tech trends, or working on small logic puzzles. I'm friendly, casual, and always ready to learn something new!
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              {[
                { label: 'Location', value: 'India' },
                { label: 'Education', value: 'BCA Student' },
                { label: 'Interest', value: 'Software Dev' },
                { label: 'Status', value: 'Fresher' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-red-600/50 transition-colors group"
                >
                  <span className="block text-zinc-500 text-xs uppercase tracking-widest mb-2 group-hover:text-red-500 transition-colors">{item.label}</span>
                  <span className="text-xl font-bold">{item.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">My <span className="text-red-600">Toolkit</span></h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">The languages and technologies I'm currently mastering as I grow as a developer.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-4"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-600/10 rounded-lg text-red-500">
                      {skill.icon}
                    </div>
                    <span className="font-bold text-lg">{skill.name}</span>
                  </div>
                  <span className="text-zinc-500 font-mono">{skill.level}%</span>
                </div>
                <div className="h-2 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-red-600 to-red-400 shadow-[0_0_10px_rgba(220,38,38,0.5)]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold mb-4">Featured <span className="text-red-600">Projects</span></h2>
              <p className="text-zinc-500 max-w-xl">A glimpse into the real-world projects I've built while learning the ropes of programming.</p>
            </div>
            <a href="#" className="text-red-500 font-bold flex items-center gap-2 hover:underline">
              View All Projects <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-red-600/50 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Briefcase className="w-20 h-20" />
                </div>
                <div className="relative z-10">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="px-2 py-1 bg-zinc-800 text-zinc-400 text-[10px] font-bold uppercase tracking-wider rounded border border-zinc-700">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-red-500 transition-colors">{project.title}</h3>
                  <p className="text-zinc-500 mb-8 line-clamp-3">
                    {project.description}
                  </p>
                  <a 
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-red-500 transition-colors"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-4">
              <GraduationCap className="text-red-600" /> Education
            </h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-red-600/30"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-red-600 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
              <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-red-600/30 transition-colors">
                <div className="flex flex-col md:flex-row justify-between mb-4 gap-2">
                  <h3 className="text-2xl font-bold">Bachelor of Computer Applications (BCA)</h3>
                  <span className="px-3 py-1 bg-red-600/10 text-red-500 text-xs font-bold rounded-full border border-red-600/20 self-start">
                    2024 - Present
                  </span>
                </div>
                <p className="text-zinc-400 text-lg mb-4">Currently pursuing my undergraduate degree with a focus on core computer science principles and software development.</p>
                <ul className="space-y-2 text-zinc-500">
                  <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-red-600" /> Learning Data Structures & Algorithms</li>
                  <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-red-600" /> Exploring Database Management Systems</li>
                  <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-red-600" /> Building foundational programming skills</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">Let's <span className="text-red-600">Connect</span></h2>
              <p className="text-zinc-400 text-lg mb-10">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-red-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-zinc-500 text-xs uppercase tracking-widest">Email Me</span>
                    <a href="mailto:rohitarya1310@gmail.com" className="text-lg font-bold hover:text-red-500 transition-colors">rohitarya1310@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-red-600">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-zinc-500 text-xs uppercase tracking-widest">Location</span>
                    <span className="text-lg font-bold">India</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                {[
                  { icon: <Github />, href: '#' },
                  { icon: <Linkedin />, href: '#' },
                  { icon: <Mail />, href: 'mailto:rohitarya1310@gmail.com' },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center hover:border-red-600 hover:text-red-500 transition-all transform hover:-translate-y-1"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 transition-colors resize-none"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 group"
                >
                  Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-xl font-bold tracking-tighter">
            <span className="text-red-600">ROHIT</span>
            <span className="text-zinc-100">ARYA</span>
          </div>
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Rohit Arya. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
