
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/rk-rohiit',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/rohitkumar46',
      label: 'LinkedIn',
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/rohiit46',
      label: 'Twitter',
    },
    {
      icon: Mail,
      href: 'mailto:askrohiitsharma@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>by Rohit Kumar</span>
          </div>

          {/* Copyright Year */}
          <p className="text-sm text-gray-500">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;