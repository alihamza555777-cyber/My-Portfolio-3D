import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { Mail, MapPin, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../components/BrandIcons';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);

    try {
      const res = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch {
      alert('Network error. Is the backend running?');
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading
          label="Contact"
          title="Let's Work Together"
          description="Have a project in mind, or just want to connect? Feel free to reach out."
        />

        <div className="contact-wrapper">
          {/* Info column */}
          <div className="contact-info fade-in">
            <h3>Get in Touch</h3>
            <p>
              I'm always excited to hear about new projects and opportunities. 
              Whether you have a question or just want to say hi, my inbox is always open.
            </p>

            <div className="contact-links">
              <a href="mailto:hamzamughal555777@gmail.com" className="contact-link-item">
                <div className="icon-circle">
                  <Mail size={20} />
                </div>
                <div className="link-text">
                  <span className="link-label">Email</span>
                  <span className="link-value">hamzamughal555777@gmail.com</span>
                </div>
              </a>

              <a href="#" className="contact-link-item">
                <div className="icon-circle">
                  <MapPin size={20} />
                </div>
                <div className="link-text">
                  <span className="link-label">Location</span>
                  <span className="link-value">Pakistan</span>
                </div>
              </a>

              <a href="https://github.com/alihamza555777-cyber" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <div className="icon-circle">
                  <GithubIcon size={20} />
                </div>
                <div className="link-text">
                  <span className="link-label">GitHub</span>
                  <span className="link-value">github.com/ali-hamza</span>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/ali-hamza-578b0a328?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <div className="icon-circle">
                  <LinkedinIcon size={20} />
                </div>
                <div className="link-text">
                  <span className="link-label">LinkedIn</span>
                  <span className="link-value">linkedin.com/in/ali-hamza</span>
                </div>
              </a>

              <a href="https://www.instagram.com/hamzii_x_" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <div className="icon-circle">
                  <InstagramIcon size={20} />
                </div>
                <div className="link-text">
                  <span className="link-label">Instagram</span>
                  <span className="link-value">@hamzii_x_</span>
                </div>
              </a>
            </div>
          </div>

          {/* Form column */}
          <form className="contact-form fade-in" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="contact-name">Your Name</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Email Address</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" id="contact-submit">
              <Send size={16} />
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
