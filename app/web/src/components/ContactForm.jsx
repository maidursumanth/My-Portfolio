import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Send, Mail, Phone, ExternalLink } from 'lucide-react';

const ContactForm = () => {
  const { toast } = useToast();
  // As requested, pre-filling the "Recipient" info in the form context.
  const recipientEmail = "sumanth.eee.rymec@gmail.com";
  const recipientPhone = "9008167623";

  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.senderName.trim()) newErrors.senderName = 'Name is required';
    if (!formData.senderEmail.trim()) {
      newErrors.senderEmail = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.senderEmail)) {
      newErrors.senderEmail = 'Valid email is required';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      // Store in localStorage as requested
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push({
        ...formData,
        to: recipientEmail,
        timestamp: new Date().toISOString(),
        id: Date.now()
      });
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ senderName: '', senderEmail: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "An error occurred. Please try emailing directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border p-6 rounded-2xl shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-2">
            <Label className="text-muted-foreground text-xs uppercase tracking-wider">To Email (Read-only)</Label>
            <Input readOnly value={recipientEmail} className="bg-muted/50 text-muted-foreground" />
          </div>
          <div className="space-y-2">
            <Label className="text-muted-foreground text-xs uppercase tracking-wider">To Phone (Read-only)</Label>
            <Input readOnly value={recipientPhone} className="bg-muted/50 text-muted-foreground" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="senderName">Your Name</Label>
            <Input
              id="senderName"
              name="senderName"
              value={formData.senderName}
              onChange={handleChange}
              className="bg-background border-border text-foreground"
              placeholder="John Doe"
            />
            {errors.senderName && <p className="text-sm text-destructive">{errors.senderName}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="senderEmail">Your Email</Label>
            <Input
              id="senderEmail"
              name="senderEmail"
              type="email"
              value={formData.senderEmail}
              onChange={handleChange}
              className="bg-background border-border text-foreground"
              placeholder="john@example.com"
            />
            {errors.senderEmail && <p className="text-sm text-destructive">{errors.senderEmail}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="bg-background border-border text-foreground"
            placeholder="Project Inquiry"
          />
          {errors.subject && <p className="text-sm text-destructive">{errors.subject}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="bg-background border-border text-foreground resize-none"
            placeholder="How can I help you?"
          />
          {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
        >
          {isSubmitting ? 'Sending...' : <><Send className="w-4 h-4 mr-2" /> Send Message</>}
        </Button>
      </form>

      <div className="bg-secondary/50 rounded-2xl p-6 border border-border">
        <h3 className="font-semibold mb-4 text-foreground">Quick Contact Links</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href={`mailto:${recipientEmail}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
            {recipientEmail}
          </a>
          <a href={`tel:${recipientPhone}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            {recipientPhone}
          </a>
          <a href="https://linkedin.com/in/msumanth1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ExternalLink className="w-4 h-4" />
            LinkedIn Profile
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ExternalLink className="w-4 h-4" />
            GitHub Profile
          </a>
          <a href="https://maidursumanth-0478qum.gamma.site" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors sm:col-span-2">
            <ExternalLink className="w-4 h-4" />
            Portfolio Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;