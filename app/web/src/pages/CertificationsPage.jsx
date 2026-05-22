import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import aiCertificate from "../assets/Ai workflow automation project.png";
import azureCertificate from "../assets/Microsoft Azure.jpg";
import xpmCertificate from "../assets/Xpm.png";
import awsCertificate from "../assets/Aws.png";
import responsiveCertificate from "../assets/responsive-website.png";
import staticCertificate from "../assets/static-website.png";
import jpmCertificate from "../assets/JPMorgan_page-0001.jpg";
import thumbnailCertificate from "../assets/MVP Project certificate.png";
const CertificationsPage = () => {
  const certifications = [
    {
      title: "Microsoft Azure AI Essentials Professional Certificate",
      issuer: "Microsoft & LinkedIn",
      date: "Feb 2026",
      skills: [
        "Microsoft Azure",
        "Generative AI",
        "Cloud Computing",
        "AI Fundamentals",
        "Machine Learning",
      ],
      image: azureCertificate,
    },
    {
      title: "AI Workflow and Automation Project Certificate",
      issuer: "NxtWave",
      date: "Jan 2026",
      skills: ["AI Workflows", "Automation", "Project Management"],
      image: aiCertificate,
    },
    {
      title: "XPM 4.0 Fundamentals",
      issuer: "NxtWave",
      date: "Sep 2025",
      expires: "Sep 2025",
      skills: [
        "Focus and prioritization",
        "Goal Setting",
        "Time Management",
        "Productivity",
      ],
      image: xpmCertificate,
    },
    {
      title: "AWS Educate Introduction to Generative AI",
      issuer: "AWS",
      date: "Sep 2025",
      skills: ["AI", "Cloud Computing", "AWS Services"],
      image: awsCertificate,
    },
    {
      title: "Responsive website certificate",
      issuer: "NxtWave",
      date: "Mar 2025",
      skills: ["Bootstrap", "Responsive Web Design", "CSS3", "Flexbox"],
      image: responsiveCertificate,
    },
    {
      title: "Static Website Certificate",
      issuer: "NxtWave",
      date: "Mar 2025",
      skills: ["Bootstrap", "HTML5", "CSS", "Web Development"],
      image: staticCertificate,
    },
    {
      title: "JPMorgan Chase Investment Banking Job Simulation",
      issuer: "Forage",
      date: "Mar 2025",
      credentialId: "moRe9KfrCjrmmXXMa",
      skills: [
        "M&A",
        "Problem Solving",
        "Financial Analysis",
        "Data Modeling",
        "Communication",
      ],
      image: jpmCertificate,
    },
    {
      title: "AI-powered thumbnail generation Project certificate",
      issuer: "NxtWave",
      date: "May 2026",
      skills: ["AI-Powered Thumbnail Generation", "Generative AI" , "Prompt Engineering", "Image Generation", "Frontend Development"],
      image: thumbnailCertificate,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Certifications - Maidur Sumanth</title>
        <meta
          name="description"
          content="Professional certifications and achievements of Maidur Sumanth."
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
                  Licenses & Certifications
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Continuous learning and professional development credentials.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-20">
            <div className="section-container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card border border-border rounded-2xl p-6 card-hover flex flex-col h-full"
                  >
                    {cert.image && (
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full rounded-xl mb-4 border"
                      />
                    )}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-foreground leading-tight mb-1">
                          {cert.title}
                        </h2>
                        <p className="text-primary font-medium">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>Issued {cert.date}</span>
                      </div>
                      {cert.expires && (
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>Expires {cert.expires}</span>
                        </div>
                      )}
                      {cert.credentialId && (
                        <div className="flex items-center gap-1.5 w-full mt-1">
                          <span className="font-medium">Credential ID:</span>{" "}
                          {cert.credentialId}
                        </div>
                      )}
                    </div>

                    <div className="mt-auto pt-4 border-t border-border/50">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        Skills
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, idx) => (
                          <span key={idx} className="tech-badge">
                            {skill}
                          </span>
                        ))}
                      </div>
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

export default CertificationsPage;
