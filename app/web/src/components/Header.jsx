import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Menu, Mail, Phone, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Contact Bar */}
      <div className="hidden lg:block w-full bg-secondary text-secondary-foreground py-2 border-b border-border text-sm">
        <div className="section-container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="mailto:sumanth.eee.rymec@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              sumanth.eee.rymec@gmail.com
            </a>
            <a href="tel:9008167623" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              9008167623
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com/in/msumanth1" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
              LinkedIn <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
              GitHub <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://maidursumanth-0478qum.gamma.site" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
              Portfolio <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md">
        <div className="section-container">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <motion.span
                className="text-xl font-bold tracking-tight text-foreground"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Maidur <span className="text-primary">Sumanth</span>
              </motion.span>
            </Link>

            <nav className="hidden md:flex items-center gap-5 lg:gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link text-sm font-medium transition-colors hover:text-primary ${
                    isActive(link.path) ? 'active text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild variant="default" size="sm" className="ml-2 rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all">
                <Link to="/contact">Let's Talk</Link>
              </Button>
            </nav>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-foreground hover:text-primary hover:bg-secondary">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-border flex flex-col">
                <SheetHeader>
                  <SheetTitle className="text-left text-foreground">Navigation</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8 flex-grow">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors hover:text-primary ${
                        isActive(link.path) ? 'text-primary' : 'text-muted-foreground'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                
                <div className="mt-auto pt-6 border-t border-border flex flex-col gap-4 text-sm text-muted-foreground">
                  <a href="mailto:sumanth.eee.rymec@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" /> Email Me
                  </a>
                  <a href="tel:9008167623" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Phone className="w-4 h-4" /> Call Me
                  </a>
                  <div className="flex gap-4 pt-2">
                    <a href="https://linkedin.com/in/msumanth1" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;