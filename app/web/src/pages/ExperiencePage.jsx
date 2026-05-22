import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, Building2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const ExperiencePage = () => {
  return (
    <>
      <Helmet>
        <title>Experience - Maidur Sumanth</title>
        <meta name="description" content="Professional experience and internships of Maidur Sumanth." />
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
                  Professional Experience
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  My journey in the tech industry, applying full-stack development skills to real-world projects.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-20">
            <div className="section-container max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card border border-border rounded-2xl p-8 md:p-10 card-hover relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1.5 rounded-bl-2xl font-medium text-sm shadow-sm">
                  Current Role
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center shrink-0 border border-border">
                    <Building2 className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold text-foreground mb-2">MERN Stack Internship</h2>
                    <h3 className="text-lg font-medium text-primary mb-4">Aitch Nu Global Technologies Pvt. Ltd.</h3>
                    
                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>Feb 2026 - Present (4 months)</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        <span>Bengaluru, Remote</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4" />
                        <span>Internship</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Currently working as a MERN Stack Intern, contributing to the development of scalable web applications. 
                        Collaborating with the team to design, develop, and maintain full-stack solutions using MongoDB, Express.js, React, and Node.js.
                      </p>
                      <p>
                        Gaining hands-on experience in building RESTful APIs, managing database schemas, and creating responsive, user-friendly frontend interfaces. 
                        Actively participating in code reviews and agile development processes to ensure high-quality deliverables.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ExperiencePage;