import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, Calendar, Code, Laptop, BookOpen } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const AboutPage = () => {
  const educationTimeline = [
    {
      institution: 'Visvesvaraya Technological University',
      degree: 'Bachelor of Engineering (BE) - Electrical and Electronics Engineering',
      duration: 'Nov 2022 – Dec 2026',
      grade: 'Grade A',
      skills: ['Root Cause Analysis', 'Goal Setting']
    },
    {
      institution: 'Sri M M Patil PU College',
      degree: 'PUC - Science',
      duration: 'Completed',
      grade: 'Grade A',
      skills: ['Root Cause Analysis']
    },
    {
      institution: 'NxtWave',
      degree: 'Computer Programming, Full Stack Web Development',
      duration: 'Nov 2022 – Mar 2027',
      achievement: 'Deployed first project on AWS',
      skills: ['Generative AI Tools', 'Python', 'React', 'Node.js', 'MongoDB', 'Express.js', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'SQL', 'Git', 'Responsive Web Design', 'Problem Solving', 'Cloud Computing']
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Maidur Sumanth</title>
        <meta name="description" content="Learn about Maidur Sumanth's journey, education at RYMEC, and training at NxtWave CCBP 4.0." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="py-20 bg-muted/30">
            <div className="section-container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center mb-16"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  About Me
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  My journey into the world of tech and software development.
                </p>
              </motion.div>

              <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* Bio Column */}
                <motion.div 
                  className="lg:col-span-12 space-y-8"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <Code className="text-primary w-6 h-6" />
                      Professional Bio
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      At NxtWave's CCBP 4.0 Academy, I'm currently learning full-stack development with a specialisation in 4.0 technologies. In love with the coding challenges and hands-on projects.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      With Industry's first ever IRC 4.0, getting ready to take on new challenges in the tech world. I am dedicated to continuously improving my skills and applying them to solve real-world problems.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-card border border-border p-6 rounded-2xl flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full text-primary">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Location</p>
                        <p className="font-semibold text-foreground">India</p>
                      </div>
                    </div>
                    <div className="bg-card border border-border p-6 rounded-2xl flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full text-primary">
                        <Calendar className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Birthday</p>
                        <p className="font-semibold text-foreground">June 20</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </section>

          {/* Education Timeline Section */}
          <section className="py-20 border-t border-border">
            <div className="section-container max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center"
              >
                <h2 className="text-3xl font-bold flex items-center justify-center gap-3">
                  <BookOpen className="text-primary w-8 h-8" />
                  Education & Training
                </h2>
              </motion.div>

              <div className="timeline-container">
                {educationTimeline.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex flex-col md:flex-row items-start mb-12 last:mb-0"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 mt-1.5 z-10"></div>
                    
                    {/* Content Left (Empty on mobile, takes space on desktop) */}
                    <div className="hidden md:block md:w-1/2 pr-12 text-right">
                      {index % 2 === 0 && (
                        <div className="bg-card border border-border p-6 rounded-2xl card-hover text-left">
                          <h3 className="text-xl font-bold text-foreground mb-1">{item.institution}</h3>
                          <p className="text-primary font-medium mb-2">{item.degree}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                            <Calendar className="w-4 h-4" />
                            <span>{item.duration}</span>
                          </div>
                          {item.grade && <p className="text-sm font-medium text-foreground mb-3">Grade: {item.grade}</p>}
                          {item.achievement && (
                            <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-md text-sm font-semibold mb-4">
                              🏆 {item.achievement}
                            </div>
                          )}
                          <div className="flex flex-wrap gap-2 mt-2">
                            {item.skills.slice(0, 5).map((skill, idx) => (
                              <span key={idx} className="tech-badge">{skill}</span>
                            ))}
                            {item.skills.length > 5 && (
                              <span className="tech-badge bg-muted text-muted-foreground">+{item.skills.length - 5} more</span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content Right (Full width on mobile, right side on desktop) */}
                    <div className="w-full pl-16 md:pl-12 md:w-1/2">
                      {(index % 2 !== 0 || window.innerWidth < 768) && (
                        <div className={`bg-card border border-border p-6 rounded-2xl card-hover ${index % 2 === 0 ? 'md:hidden' : ''}`}>
                          <h3 className="text-xl font-bold text-foreground mb-1">{item.institution}</h3>
                          <p className="text-primary font-medium mb-2">{item.degree}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                            <Calendar className="w-4 h-4" />
                            <span>{item.duration}</span>
                          </div>
                          {item.grade && <p className="text-sm font-medium text-foreground mb-3">Grade: {item.grade}</p>}
                          {item.achievement && (
                            <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-md text-sm font-semibold mb-4">
                              🏆 {item.achievement}
                            </div>
                          )}
                          <div className="flex flex-wrap gap-2 mt-2">
                            {item.skills.slice(0, 5).map((skill, idx) => (
                              <span key={idx} className="tech-badge">{skill}</span>
                            ))}
                            {item.skills.length > 5 && (
                              <span className="tech-badge bg-muted text-muted-foreground">+{item.skills.length - 5} more</span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;