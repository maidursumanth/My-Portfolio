import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ExternalLink, MessageSquare } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Maidur Sumanth</title>
        <meta name="description" content="Get in touch with Maidur Sumanth for full-stack web development opportunities." />
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
                  Let's Connect
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Whether you have a question, a project opportunity, or just want to say hi, I'll try my best to get back to you!
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-20">
            <div className="section-container">
              <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Form Column */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="lg:col-span-7"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Send a Message</h2>
                  </div>
                  <ContactForm />
                </motion.div>

                {/* Info Column */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="lg:col-span-5 space-y-8"
                >
                  <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold mb-6 text-foreground">Contact Information</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-secondary rounded-xl text-secondary-foreground shrink-0">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                          <a href="mailto:sumanth.eee.rymec@gmail.com" className="text-foreground hover:text-primary transition-colors break-all font-medium">
                            sumanth.eee.rymec@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-secondary rounded-xl text-secondary-foreground shrink-0">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
                          <a href="tel:9008167623" className="text-foreground hover:text-primary transition-colors font-medium">
                            9008167623
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-secondary rounded-xl text-secondary-foreground shrink-0">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Location</p>
                          <p className="text-foreground font-medium">
                            India
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold mb-4">Looking for new opportunities!</h3>
                    <p className="text-primary-foreground/90 leading-relaxed mb-6">
                      I'm currently looking for roles where I can leverage my CCBP 4.0 training and passion for full-stack development. Let's build something amazing together.
                    </p>
                    <a 
                      href="https://linkedin.com/in/msumanth1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-background text-foreground hover:bg-background/90 px-6 py-3 rounded-xl font-semibold transition-colors"
                    >
                      Connect on LinkedIn
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
                
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;