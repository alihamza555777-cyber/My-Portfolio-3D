import { Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../components/BrandIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <p className="footer-copy">
            © {currentYear} Ali Hamza. Built with <Heart size={12} style={{ display: 'inline', verticalAlign: 'middle', color: '#f87171' }} /> and React.
          </p>
          <div className="footer-socials">
            <a href="https://github.com/alihamza555777-cyber" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon size={16} />
            </a>
            <a href="https://www.linkedin.com/in/ali-hamza-578b0a328?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={16} />
            </a>

            <a href="https://www.instagram.com/hamzii_x_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
