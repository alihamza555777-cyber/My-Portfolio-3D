import { useState } from 'react';
import { MapPin } from 'lucide-react';
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

    const FORMSPREE_ID = "xjgjzpee"; 

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await res.json();
        if (Object.hasOwn(data, 'errors')) {
          alert(data["errors"].map(error => error["message"]).join(", "));
        } else {
          alert('Failed to send message.');
        }
      }
    } catch {
      alert('Network error. Please try again later.');
    }
  };

  return (
    <section 
      id="contact" 
      className="netflix-contact-container"
      style={{ backgroundImage: `url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&auto=format&fit=crop&q=80)` }}
    >
      <div className="netflix-contact-overlay"></div>
      
      <div className="netflix-contact-card">
        <h2 className="netflix-contact-title">Contact Me</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="netflix-input-group">
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <label htmlFor="contact-name" className="netflix-input-label">Your Name</label>
          </div>
          
          <div className="netflix-input-group">
            <input
              type="email"
              id="contact-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="nameemail@gmail.com"
              required
            />
            <label htmlFor="contact-email" className="netflix-input-label">Email Address</label>
          </div>
          
          <div className="netflix-input-group">
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              rows="4"
              required
            ></textarea>
            <label htmlFor="contact-message" className="netflix-input-label">Message Details...</label>
          </div>
          
          {submitted && (
            <div className="success-message">
              Thanks! Message transmitted successfully.
            </div>
          )}
          
          <button type="submit" className="netflix-contact-btn">
            {submitted ? 'Transmission Success!' : 'Send Message'}
          </button>
        </form>
        
        <div className="netflix-contact-footer">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e5e5e5' }}>
            <MapPin size={16} />
            <span>Located in Pakistan</span>
          </div>
          
          <div style={{ color: '#737373' }}>
            New to this portfolio? <a href="#hero" style={{ color: 'white', textDecoration: 'underline' }}>Explore from top</a>.
          </div>
          
          <div className="netflix-contact-socials">
            <a href="https://github.com/alihamza555777-cyber" target="_blank" rel="noopener noreferrer" className="netflix-contact-social-btn" aria-label="GitHub">
              <GithubIcon size={18} />
              <span>GitHub</span>
            </a>
            
            <a href="https://www.linkedin.com/in/ali-hamza-578b0a328?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="netflix-contact-social-btn" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
              <span>LinkedIn</span>
            </a>
            
            <a href="https://www.instagram.com/hamzii_x_" target="_blank" rel="noopener noreferrer" className="netflix-contact-social-btn" aria-label="Instagram">
              <InstagramIcon size={18} />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
