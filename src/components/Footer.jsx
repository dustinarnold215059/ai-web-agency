import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Website Design', href: '/services' },
        { name: 'Website Redesign', href: '/services' },
        { name: 'E-commerce Sites', href: '/services' },
        { name: 'Landing Pages', href: '/services' },
        { name: 'Website Maintenance', href: '/services' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Process', href: '/how-it-works' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Contact', href: '/contact' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/portfolio' },
        { name: 'Help Center', href: '/help' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
      ]
    }
  ];

  const contactInfo = [
    {
      icon: MapPinIcon,
      text: '123 Business Ave, Suite 100\nAnytown, ST 12345'
    },
    {
      icon: PhoneIcon,
      text: '(555) 123-4567'
    },
    {
      icon: EnvelopeIcon,
      text: 'hello@webcraftai.com'
    },
    {
      icon: ClockIcon,
      text: 'Mon-Fri: 9AM-6PM EST\nSat: 10AM-4PM EST'
    }
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/webcraft_ai', icon: '𝕏' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/webcraft-ai', icon: '💼' },
    { name: 'Facebook', href: 'https://facebook.com/webcraft.ai', icon: '📘' },
    { name: 'Instagram', href: 'https://instagram.com/webcraft_ai', icon: '📷' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <motion.div
                className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-white font-bold text-xl">AI</span>
              </motion.div>
              <span className="text-2xl font-heading font-bold gradient-text">
                WebCraft AI
              </span>
            </Link>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering small businesses with AI-powered website design. 
              Fast, affordable, and professional websites that help your 
              business grow online.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <item.icon className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 text-sm whitespace-pre-line">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <div key={section.title}>
              <h3 className="font-heading font-semibold text-lg mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md">
            <h3 className="font-heading font-semibold text-lg mb-2">
              Stay Updated
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest web design tips and AI insights delivered to your inbox.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <motion.button
                className="btn-primary whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} WebCraft AI. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-sm">{social.icon}</span>
                </motion.a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>SSL Secured</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>GDPR Compliant</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;