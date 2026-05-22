import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const ProjectDetailModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0 overflow-hidden bg-card border-border flex flex-col">
        <div className="relative w-full h-48 sm:h-64 bg-muted shrink-0">
          <img 
            src={project.image || "https://images.unsplash.com/photo-1591206246016-b4355bcd5f93"} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-2 text-white/80 text-sm font-medium mb-2">
              <Calendar className="w-4 h-4" />
              <span>{project.date}</span>
              {project.organization && (
                <>
                  <span className="mx-2">•</span>
                  <Building2 className="w-4 h-4" />
                  <span>{project.organization}</span>
                </>
              )}
            </div>
            <DialogTitle className="text-2xl sm:text-3xl font-bold text-white text-balance">
              {project.title}
            </DialogTitle>
          </div>
        </div>

        <ScrollArea className="flex-grow p-6">
          <div className="space-y-8">
            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Overview</h3>
              <DialogDescription className="text-base text-muted-foreground leading-relaxed">
                {project.fullDescription || project.description}
              </DialogDescription>
            </div>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Key Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md text-sm font-medium border border-border/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>

        <div className="p-6 border-t border-border bg-muted/30 flex flex-col sm:flex-row gap-3 justify-end shrink-0">
          {project.githubUrl && (
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                View Source
              </a>
            </Button>
          )}
          {project.demoUrl && (
            <Button asChild className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailModal;