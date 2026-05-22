import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Gamepad2,
  Bot,
  Sparkles,
  BrainCircuit,
  Briefcase,
  PenTool,
  Wrench,
} from "lucide-react";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import SkillCard from "@/components/SkillCard.jsx";

const SkillsPage = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: Layout,
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript ES6",
         "TypeScript",
        "React,JS",
        "Tailwind CSS",
        "Bootstrap",
        "Static Web Design",
        "Responsive Web Design",
        "CSS Flexbox",
        "DOM Manipulation",
        "Event Handling",
        "UI Development",
        "Front-End Development",
      ],
    },
    {
      category: "Backend & Programming",
      icon: Server,
      skills: [
        "Python",
        "JavaScript",
        "Node.js",
        "Express.js",
        "API Development",
        "API integration",
        "Server-side Development",
        "Authorization & Authentication",
        "FastAPI Development",
        "Error Handling & Debugging",
        " REST API Development",
      ],
    },
    {
      category: "Database",
      icon: Server,
      skills: [
        "SQL",
        "MYSQL",
        "SQLite",
        "MONGODB",
        "Database Design",
        "Data Modeling",
        "Database Management",
      ],
    },
  
    {
      category: "Robotic Process Automation",
      icon: Bot,
      skills: [
        "RPA",
        "Process Automation Design",
        "Bot Development",
        "Trigger-Based Automation",
        "Workflow Automation",
        "Automation Pipelines",
        "Real-World Automation Project Development",
        "Data Extraction & Processing",
      ],
    },
    {
      category: "AI & Automation",
      icon: Sparkles,
      skills: [
        "AI Agent Development",
        "Model Context Protocol MCP",
        "AI Tool Integration",
        "AI Workflows Design",
        "Workflow Automation",
        "Automation Pipelines",
        "API Integration",
        "Gmail API Integration",
        "LinkedIn API Integration",
        "Google Sheets Integration",
        "Telegram Bot Integration",
        "Facebook Pages API Integration",
        "Conditional Routing Logic",
        "Data Mapping & Transformation",
        "Workflow Automation",
        "AI Tool Integration",
      ],
    },
    {
      category: "AI / Machine Learning",
      icon: BrainCircuit,
      skills: [
        "Artificial Intelligence",
        "Machine Learning",
        "Generative AI",
        "Natural Language Processing NLP",
        "AI Content Generation",
        "AI Content Summarization",
        "Azure AI Studio",
        "Microsoft Azure",
        "Amazon Web Services AWS",
        "Cloud Computing",
        "Generative AI Tools",
      ],
    },
    {
      category: "Professional Skills",
      icon: Briefcase,
      skills: [
        "Problem Solving",
        "Communication",
        "Client Communication",
        "Cross-team Collaboration",
        "Project Planning",
        "Project Management",
        "Data Analysis",
        "Company Analysis",
        "Mergers & Acquisitions M&A",
        "Discounted Cash Flow DCF",
        "Goal Setting",
        "Growth Strategies",
        "Focus and Prioritization",
        "Root Cause Analysis",
        "Mindset Tools",
        "Time Management",
      ],
    },
    {
      category: "Design & UX",
      icon: PenTool,
      skills: [
        "UI/UX Design",
        "Responsive Layout Design",
        "Modern Web Interfaces",
        "User Experience Design",
        "Frontend Optimization",
      ],
    },
    {
      category: "Tools & Platforms",
      icon: Wrench,
      skills: [
        "Git & GitHub",
        "Automation Anywhere",
        "Visual Studio Code",
        "NxtWave",
        "Microsoft Azure",
        "AWS",
        "API Testing",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Skills - Maidur Sumanth</title>
        <meta
          name="description"
          content="Comprehensive list of technical, professional, and AI/Automation skills of Maidur Sumanth."
        />
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
                  Skills & Expertise
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  A detailed breakdown of my technical capabilities, ranging
                  from frontend development to advanced AI integrations and
                  professional competencies.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-20">
            <div className="section-container">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
                {skillCategories.map((category, index) => (
                  <div
                    key={index}
                    className={
                      category.skills.length > 8
                        ? "md:col-span-2 lg:col-span-2"
                        : ""
                    }
                  >
                    <SkillCard
                      category={category.category}
                      skills={category.skills}
                      icon={category.icon}
                      index={index}
                    />
                  </div>
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

export default SkillsPage;
