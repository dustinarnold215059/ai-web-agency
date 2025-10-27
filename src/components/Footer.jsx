import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import {
  EnvelopeIcon,
  PhoneIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import { CONTACT_INFO, COMPANY_INFO, SOCIAL_LINKS } from '../constants/contact';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if user has already subscribed
    const hasSubscribed = localStorage.getItem('newsletter_subscribed');
    if (hasSubscribed) {
      setSubscribed(true);
    }
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Check if already subscribed
    if (localStorage.getItem('newsletter_subscribed')) {
      setError('You have already subscribed to our newsletter!');
      return;
    }

    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setSubscribing(true);

    try {
      // Send newsletter subscription confirmation email to user
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_NEWSLETTER_CONFIRMATION_TEMPLATE,
        {
          user_email: email,
          user_name: email.split('@')[0],
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Send notification to admin about new subscriber
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_NEWSLETTER_ADMIN_TEMPLATE,
        {
          subscriber_email: email,
          subscription_date: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubscribed(true);
      setEmail('');
      localStorage.setItem('newsletter_subscribed', 'true');
      // Don't reset subscribed state - keep it permanent
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Newsletter subscription error:', error);
      }
      setError('Sorry, there was an error subscribing. Please try again.');
    } finally {
      setSubscribing(false);
    }
  };

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Website Design', href: '/services' },
        { name: 'Website Redesign', href: '/services' },
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
        { name: 'FAQ', href: '/faq' },
        { name: 'Case Studies', href: '/portfolio' },
        { name: 'Leave a Review', href: '/leave-review' },
        { name: 'Help Center', href: '/help' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
      ]
    }
  ];

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      text: CONTACT_INFO.email
    },
    {
      icon: PhoneIcon,
      text: CONTACT_INFO.phone
    },
    {
      icon: ClockIcon,
      text: CONTACT_INFO.businessHours.display
    }
  ];

  const socialLinks = [
    { name: 'Twitter', href: SOCIAL_LINKS.twitter, icon: '𝕏' },
    { name: 'LinkedIn', href: SOCIAL_LINKS.linkedin, icon: '💼' },
    { name: 'Facebook', href: SOCIAL_LINKS.facebook, icon: '📘' },
    { name: 'Instagram', href: SOCIAL_LINKS.instagram, icon: '📷' },
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
                <span className="text-white font-bold text-xl">{COMPANY_INFO.shortName}</span>
              </motion.div>
              <span className="text-2xl font-heading font-bold gradient-text">
                {COMPANY_INFO.name}
              </span>
            </Link>

            <p className="text-gray-400 mb-6 leading-relaxed">
              {COMPANY_INFO.tagline} {COMPANY_INFO.description}
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
            {subscribed ? (
              <div className="bg-green-500/10 border border-green-500/50 text-green-500 px-4 py-3 rounded-lg">
                Thanks for subscribing! Check your email for confirmation.
              </div>
            ) : (
              <div>
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 mb-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="Email address for newsletter"
                    aria-describedby={error ? 'newsletter-error' : undefined}
                    aria-invalid={error ? 'true' : 'false'}
                    disabled={subscribing}
                    className="flex-1 w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:opacity-50"
                  />
                  <motion.button
                    type="submit"
                    className="btn-primary whitespace-nowrap w-full sm:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={subscribing}
                  >
                    {subscribing ? 'Subscribing...' : 'Subscribe'}
                  </motion.button>
                </form>
                {error && (
                  <p id="newsletter-error" className="text-red-400 text-sm mt-1" role="alert">
                    {error}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.name} page`}
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-sm" aria-hidden="true">{social.icon}</span>
                </motion.a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></span>
                <span>SSL Secured</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-blue-500 rounded-full" aria-hidden="true"></span>
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
