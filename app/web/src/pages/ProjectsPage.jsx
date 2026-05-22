import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProjectCard from '@/components/ProjectCard.jsx';
import ProjectDetailModal from '@/components/ProjectDetailModal.jsx';
import TicTacToe from '@/assets/Tic Tac Toe.jpg';
import Rock_Paper_Scissors from '@/assets/Rock Paper Scissors.jpg';
import Food_website from '@/assets/Food app.png';
import amazone from '@/assets/amazon_logo.png';
import Calculater from '@/assets/Calculater.png';
import Ai_workflow_automation from '@/assets/AI Agent for Automated LinkedIn Image Posting.png';
import RPA_projects from '@/assets/RPA projects automation anywhere.png';
import Make from '@/assets/make.jpg';
import Diwali from '@/assets/Diwali.png';
import Book_my_show from '@/assets/Book my show.png';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allProjects = [
    {
      id: 1,
      title: 'Tic Tac Toe',
      category: 'Games',
      date: 'Mar 2026',
      dateValue: new Date('2026-03-01'),
      description: 'A classic Tic Tac Toe game with interactive UI and win detection logic.',
      fullDescription: 'Developed a fully functional Tic Tac Toe game featuring an interactive user interface, real-time turn tracking, and robust win/draw detection logic. Built to practice DOM manipulation and state management.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation', 'Frontend Development',   'Game Logic'],
      features: ['Two-player gameplay','Win and draw detection','Interactive UI updates','Reset game functionality'],
      organization: 'NxtWave',
      githubUrl: 'https://github.com/maidursumanth/Tic-Tac-Toe',
      image: TicTacToe,
      liveDemoUrl: 'https://tic-tac-toe-green-gamma.vercel.app/'
    },
    {
      id: 2,
      title: 'Rock Paper Scissors',
      category: 'Games',
      date: 'Feb 2026',
      dateValue: new Date('2026-02-01'),
      description: 'Interactive Rock Paper Scissors game against a randomized computer opponent.',
      fullDescription: 'An engaging web-based Rock Paper Scissors game where users play against a computer opponent. Features score tracking, animated choices, and responsive design.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Event Handling'],
      features: ['Play against computer', 'Score tracking system', 'Animated selection feedback', 'Responsive layout'],
      organization: 'NxtWave',
      githubUrl: 'https://github.com/maidursumanth/Rock-Paper-Scissor-',
      image: Rock_Paper_Scissors,
      liveDemoUrl: 'https://rock-paper-scissor-bay-three.vercel.app/'
    },
    {
      id: 3,
      title: 'Food Ordering App',
      category: 'Web Apps',
      date: 'Jan 2026',
      dateValue: new Date('2026-01-01'),
      description: 'A comprehensive food ordering interface with menu browsing and cart management.',
      fullDescription: 'A dynamic food ordering web application allowing users to browse menus, add items to a cart, and view total pricing. Focuses on complex state management and UI component structuring.',
      technologies: ['HTML5','CSS3', 'Bootstrap','Flexbox'],
      features: ['Dynamic menu rendering', 'Shopping cart management', 'Real-time total calculation', 'Category filtering'],
      organization: 'NxtWave',
      githubUrl: 'https://github.com/maidursumanth/Food-Website',
      image: Food_website,
      liveDemoUrl: 'https://foodwebpagesusinghtmlcss.netlify.app/'
    },
    {
      id: 4,
      title: 'Amazon Clone Website',
      category: 'Web Apps',
      date: 'Dec 2025',
      dateValue: new Date('2025-12-01'),
      description: 'A frontend clone of the Amazon e-commerce platform focusing on UI/UX replication.',
      fullDescription: 'A pixel-perfect frontend clone of the Amazon homepage and product listing pages. Built to master complex CSS layouts, flexbox, grid, and responsive design principles.',
      technologies: ['HTML5', 'CSS3', 'Flexbox', 'CSS Grid'],
      features: ['Responsive navigation bar', 'Product grid layout', 'Hover effects and transitions', 'Mobile-friendly design'],
      organization: 'NxtWave',
      githubUrl: 'https://github.com/maidursumanth/Amazone-clone-Website',
      image: amazone,
      liveDemoUrl : 'https://amazonproject-silk.vercel.app/'
    },
    {
      id: 5,
      title: 'Calculator',
      category: 'Web Apps',
      date: 'Nov 2025',
      dateValue: new Date('2025-11-01'),
      description: 'A fully functional web-based calculator with standard arithmetic operations.',
      fullDescription: 'A sleek, responsive calculator application supporting standard arithmetic operations. Implements complex logic for handling decimal points, continuous operations, and error states.',
      technologies: ['JavaScript', 'HTML5', 'CSS3'],
      features: ['Standard arithmetic operations', 'Keyboard support', 'Clear and delete functions', 'Error handling (e.g., divide by zero)'],
      organization: 'NxtWave',
      githubUrl: 'https://github.com/maidursumanth/Calculater-using-HTML-CSS-JAVASCRIPT',
      image: Calculater,
      liveDemoUrl:'https://calculaterusinghtmlcssjavascript.netlify.app/'
    },
    {
      id: 6,
      title: 'Restaurant Website',
      category: 'Web Application',
      date: 'Feb 2026',
      dateValue: new Date('2026-02-01'),
      description: 'A multi-page responsive website for a modern restaurant.',
      fullDescription: 'A beautifully designed, responsive website for a fictional restaurant. Includes a home page, dynamic menu, about section, and a contact form. Built with a mobile-first approach.',
      technologies: ['HTML5', 'Bootstrap', 'CSS3', 'JavaScript', 'Responsive Web Design','DOM Manipulation', 'UI Development','TypeScript'],
      features: ['Mobile-first responsive design', 'Dynamic menu sections', 'Image carousels', 'Contact form UI'],
      organization: 'NxtWave',
      githubUrl: 'https://github.com/maidursumanth/bomato-bites',
      image: 'https://images.unsplash.com/photo-1515693421389-81c6ff3e4ea6',
      liveDemoUrl : 'https://bomato-bite.lovable.app/'
    },
    {
      id: 7,
      title: 'AI Agent for Automated LinkedIn Image Posting',
      category: 'AI/ML',
      date: 'Sep 2025',
      dateValue: new Date('2025-09-01'),
      description: 'An AI-powered tool that generates blog posts and summaries using NLP models.',
      fullDescription: 'Leveraged Generative AI APIs to build a tool that automatically generates structured blog posts, summaries, and social media captions based on user prompts.',
      technologies: ['Python', 'Generative AI', 'NLP', 'API Integration'],
      features: ['Custom prompt engineering', 'Content summarization', 'Multiple output formats', 'API rate limiting handling'],
      organization: 'Personal Project',
      githubUrl: 'https://github.com/maidursumanth/AI-Linkedin-Post-Agent',
      image: Ai_workflow_automation
    },
    {
      id: 8,
      title: 'RPA projects automation anywhere',
      category: 'Automation',
      date: 'Aug 2025',
      dateValue: new Date('2025-08-01'),
      description: 'RPA bot that categorizes incoming emails and sends automated contextual responses.',
      fullDescription: 'Designed an RPA workflow integrating with the Gmail API to read incoming emails, categorize them using basic NLP, and dispatch automated, context-aware responses.',
      technologies: ['RPA', 'Python', 'Gmail API', 'Automation Pipelines'],
      features: ['Email parsing and categorization', 'Trigger-based automation', 'Contextual auto-reply', 'Error logging'],
      organization: 'Personal Project',
      githubUrl: 'https://github.com/maidursumanth/RPA_projects_automation_anywhere...',
      image: RPA_projects
    },
    {
      id: 9,
      title: ' Social Media AI Automation.',
      category: 'Automation',
      date: 'Jul 2025',
      dateValue: new Date('2025-07-01'),
      description: 'Automated tool for extracting and processing public profile data for analysis.',
      fullDescription: 'Built a data extraction pipeline to gather public professional data. Implemented data mapping, transformation, and exported results to Google Sheets for further analysis.',
      technologies: ['Python', 'Data Extraction', 'Google Sheets API', 'Data Mapping'],
      features: ['Automated data extraction', 'Data cleaning and transformation', 'Direct export to Google Sheets', 'Rate limit management'],
      organization: 'Personal Project',
      githubUrl: 'https://github.com/maidursumanth/social-media-ai-automation.',
      image: Make,
      liveDemoUrl : 'https://eu1.make.com/public/shared-scenario/0XwZGHwV4Ee/integration-google-sheets'
    },
    {
      id: 10,
      title: 'Happy Diwali Page',
      category: 'Web Apps',
      date: 'Jun 2025',
      dateValue: new Date('2025-06-01'),
      description: 'An interactive, animated greeting page celebrating the Diwali festival.',
      fullDescription: 'A visually rich, animated web page created to celebrate Diwali. Features CSS animations, audio integration, and interactive elements to create a festive user experience.',
      technologies: ['HTML5', 'CSS3 Animations', 'JavaScript'],
      features: ['CSS keyframe animations', 'Interactive greeting cards', 'Audio playback controls', 'Responsive layout'],
      organization: 'NxtWave',
      githubUrl: 'https://github.com/maidursumanth/Happy-Diwali-',
      image: Diwali,
      liveDemoUrl : 'https://agent-699da8fd021b995fd159a7f3--diwalipage.netlify.app/'
    },
    {
      id: 11,
      title: 'Book My Show Application',
      category: 'Web Application',
      date: 'Sep 2025',
      dateValue:  new Date('2025-09-01'),
      description: 'A Book My Show–style ticket booking web application with smooth navigation and modern UI.',
      fullDescription: 'Built a Book My Show–style web application and created a walkthrough demo showcasing the complete event browsing and booking experience. The project focuses on creating a smooth real-world user journey similar to large-scale ticket booking platforms with a clean interface and simple navigation. This project helped improve frontend development skills, UI/UX understanding, and application flow design by building a practical real-world application.',
      technologies: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Frontend Development',
        'Responsive Design',
        'UI/UX Design'
      ],
      features: ['Automated FAQ responses', 'User state tracking', 'Conditional routing logic', 'Webhook integration'],
      organization: 'Personal Project',
      githubUrl: 'https://github.com/maidursumanth/Book-My-Show-Application',
      image: Book_my_show,
      liveDemoUrl : 'https://showreel-buddy.lovable.app/'
    },
  ];

  const categories = ['All', 'Games', 'Web Apps', 'Automation', 'AI/ML'];
  
  // Sort by date (newest first) and filter
  const filteredProjects = useMemo(() => {
    let result = filter === 'All' 
      ? allProjects 
      : allProjects.filter(p => p.category === filter);
      
    return result.sort((a, b) => b.dateValue - a.dateValue);
  }, [filter]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Projects - Maidur Sumanth</title>
        <meta name="description" content="Explore the portfolio of projects by Maidur Sumanth, including Web Apps, Games, Automation, and AI/ML." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="py-20 bg-muted/30 border-b border-border">
            <div className="section-container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  Featured Projects
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  A comprehensive collection of my work spanning web development, game logic, automation, and AI integrations.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-12">
            <div className="section-container">
              {/* Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      filter === cat 
                        ? 'bg-[hsl(var(--filter-btn-active-bg))] text-[hsl(var(--filter-btn-active-text))] shadow-md scale-105' 
                        : 'bg-[hsl(var(--filter-btn-bg))] text-[hsl(var(--filter-btn-text))] hover:bg-primary/20'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    index={index} 
                    onClick={handleProjectClick}
                  />
                ))}
              </div>
              
              {filteredProjects.length === 0 && (
                <div className="text-center py-20 text-muted-foreground flex flex-col items-center">
                  <div className="w-16 h-16 mb-4 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <p className="text-lg font-medium">No projects found for this category.</p>
                  <button 
                    onClick={() => setFilter('All')}
                    className="mt-4 text-primary hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </section>
        </main>

        <Footer />

        <ProjectDetailModal 
          project={selectedProject} 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>
    </>
  );
};

export default ProjectsPage;