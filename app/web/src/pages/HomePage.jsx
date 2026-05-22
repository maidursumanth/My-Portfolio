import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Phone, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Maidur Sumanth - Full-Stack Developer</title>
        <meta name="description" content="Portfolio of Maidur Sumanth, a Full-Stack Developer specializing in 4.0 technologies, currently learning at NxtWave CCBP 4.0 Academy." />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative min-h-[90dvh] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1587637721784-024d2b51e1dd)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Deep dark overlay to ensure text readability */}
              <div className="absolute inset-0 bg-background/90 backdrop-blur-[2px]" />
            </div>

            <div className="relative z-10 section-container w-full pt-20 pb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
              >
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary mb-8">
                  <span className="text-sm font-medium">Available for Hire</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-foreground text-balance tracking-tight">
                  Maidur Sumanth
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground max-w-3xl leading-snug">
                  Full-Stack Developer | CCBP 4.0 | NxtWave | EEE-26 RYMEC
                </h2>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
                  Learning full-stack development with specialisation in 4.0 technologies. 
                  Passionate about coding challenges and hands-on projects.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-16">
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all rounded-full px-8 h-14 text-base">
                    <Link to="/projects" className="flex items-center gap-2">
                      View My Work
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="bg-transparent border-border text-foreground hover:bg-secondary hover:text-primary transition-all rounded-full px-8 h-14 text-base">
                    <Link to="/contact">
                      Get In Touch
                    </Link>
                  </Button>
                </div>

                {/* Quick Contact Info Below Hero */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-border">
                  <a href="mailto:sumanth.eee.rymec@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                    <div className="p-3 rounded-full bg-secondary group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium truncate">Email Me</span>
                  </a>
                  <a href="tel:9008167623" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                    <div className="p-3 rounded-full bg-secondary group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium">9008167623</span>
                  </a>
                  <a href="https://linkedin.com/in/msumanth1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                    <div className="p-3 rounded-full bg-secondary group-hover:bg-primary/20 transition-colors">
                      <ExternalLink className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                    <div className="p-3 rounded-full bg-secondary group-hover:bg-primary/20 transition-colors">
                      <ExternalLink className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
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

export default HomePage;