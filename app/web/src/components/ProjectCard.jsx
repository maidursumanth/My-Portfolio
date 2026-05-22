import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Calendar, ChevronRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="h-full"
    >
      <Card
        className="h-full flex flex-col bg-[hsl(var(--project-card-bg))] border-[hsl(var(--project-card-border))] overflow-hidden card-hover cursor-pointer group"
        onClick={() => onClick(project)}
      >
        <div className="w-full h-48 overflow-hidden bg-muted relative">
          <img
            src={
              project.image ||
              "https://images.unsplash.com/photo-1591206246016-b4355bcd5f93"
            }
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
          {project.category && (
            <div className="absolute top-4 right-4 bg-background/95 backdrop-blur-sm text-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
              {project.category}
            </div>
          )}
        </div>

        <CardHeader className="pb-3">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-2">
            <Calendar className="w-3.5 h-3.5" />
            {project.date}
          </div>
          <CardTitle className="text-xl font-bold text-balance group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription className="text-muted-foreground line-clamp-2 mt-2">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-grow pb-4">
          {project.features && project.features.length > 0 && (
            <ul className="mb-4 space-y-1.5">
              {project.features.slice(0, 2).map((feature, idx) => (
                <li
                  key={idx}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <span className="text-primary mt-1 text-[10px]">●</span>
                  <span className="line-clamp-1">{feature}</span>
                </li>
              ))}
              {project.features.length > 2 && (
                <li className="text-xs text-muted-foreground/70 italic pl-4">
                  + {project.features.length - 2} more features
                </li>
              )}
            </ul>
          )}

          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-secondary/60 text-secondary-foreground rounded text-[11px] font-semibold"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-0.5 bg-muted text-muted-foreground rounded text-[11px] font-semibold">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex gap-3 mt-auto pt-4 border-t border-border/40 bg-muted/10">
          <Button
            variant="ghost"
            size="sm"
            className="flex-1 justify-between text-muted-foreground hover:text-primary hover:bg-primary/10"
            onClick={(e) => {
              e.stopPropagation();
              onClick(project);
            }}
          >
            <span>View Details</span>
            <ChevronRight className="w-4 h-4" />
          </Button>

          {project.githubUrl && (
            <Button
              variant="outline"
              size="icon"
              className="shrink-0"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.githubUrl, "_blank");
              }}
              aria-label="View GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </Button>
          )}
          {project.liveDemoUrl && (
            <Button
              variant="outline"
              size="icon"
              className="shrink-0"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.liveDemoUrl, "_blank");
              }}
              aria-label="View Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
