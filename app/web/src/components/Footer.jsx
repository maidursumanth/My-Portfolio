import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block text-xl font-bold tracking-tight mb-4 text-foreground">
              Maidur <span className="text-primary">Sumanth</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full-Stack Developer | CCBP 4.0 | NxtWave.<br/>
              Passionate about coding challenges and hands-on projects.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6 text-foreground">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit">Home</Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit">About</Link>
              <Link to="/skills" className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit">Skills</Link>
              <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit">Projects</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit">Contact</Link>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6 text-foreground">Contact Details</h3>
            <div className="flex flex-col gap-4">
              <a href="mailto:sumanth.eee.rymec@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors break-all">
                <Mail className="w-4 h-4 shrink-0 text-primary" />
                sumanth.eee.rymec@gmail.com
              </a>
              <a href="tel:9008167623" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4 shrink-0 text-primary" />
                9008167623
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 shrink-0 text-primary" />
                India
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6 text-foreground">Social Connect</h3>
            <div className="flex flex-col gap-4">
              <a href="https://linkedin.com/in/msumanth1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <ExternalLink className="w-4 h-4 shrink-0 text-primary" />
                LinkedIn Profile
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <ExternalLink className="w-4 h-4 shrink-0 text-primary" />
                GitHub Account
              </a>
              <a href="https://maidursumanth-0478qum.gamma.site" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <ExternalLink className="w-4 h-4 shrink-0 text-primary" />
                Live Portfolio
              </a>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Maidur Sumanth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;