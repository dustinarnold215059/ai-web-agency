import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  EyeIcon,
  ClockIcon,
  StarIcon,
  FunnelIcon,
  XMarkIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isFilterChanging, setIsFilterChanging] = useState(false);
  const modalRef = useRef(null);

  // Focus trap for modal
  useEffect(() => {
    if (selectedProject && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      // Handle edge case where modal has no focusable elements
      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setSelectedProject(null);
        }

        if (e.key === 'Tab' && focusableElements.length > 0) {
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      firstElement?.focus();

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [selectedProject]);

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'restaurant', name: 'Restaurants' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'services', name: 'Professional Services' },
    { id: 'fitness', name: 'Fitness' },
  ];

  const projects = [
    {
      id: 1,
      title: "Mike's Handyman Services",
      category: 'services',
      industry: 'Home Services',
      deliveryTime: '3 days',
      rating: 5,
      image: '🔨',
      features: ['Contact Form', 'Service Showcase', 'Trust Badges', 'Mobile Responsive'],
      testimonial: 'Simple, professional landing page that brings in leads daily!',
      client: 'Mike Johnson',
      liveUrl: 'https://portfolio-handyman-dustin-arnolds-projects.vercel.app',
      beforeAfter: false,
      description: 'A professional landing page for a local handyman service. Clean design that highlights services, builds trust, and converts visitors into customers with a prominent contact form.',
      challenge: 'Needed a simple, professional online presence to generate local leads.',
      solution: 'Created a focused landing page with clear services, trust indicators, and easy contact options.',
      results: ['Professional online presence', 'Lead generation ready', 'Mobile-optimized for local searches'],
    },
    {
      id: 2,
      title: 'Bella Beauty Salon',
      category: 'services',
      industry: 'Beauty & Wellness',
      deliveryTime: '3 days',
      rating: 5,
      image: '💅',
      features: ['Service Menu', 'Team Profiles', 'Gallery', 'Online Booking'],
      testimonial: 'Beautiful design that perfectly captures our salon atmosphere!',
      client: 'Bella Martinez',
      liveUrl: 'https://portfolio-salon-dustin-arnolds-projects.vercel.app',
      beforeAfter: false,
      description: 'An elegant landing page for a boutique beauty salon featuring services, team profiles, and a stunning gallery to showcase their work.',
      challenge: 'Showcase salon services and atmosphere to attract new clients.',
      solution: 'Designed an elegant, feminine landing page with service details, team profiles, and visual portfolio.',
      results: ['Increased online bookings', 'Better client communication', 'Enhanced brand image'],
    },
    {
      id: 3,
      title: 'Bella Vita Ristorante',
      category: 'restaurant',
      industry: 'Italian Restaurant',
      deliveryTime: '5 days',
      rating: 5,
      image: '🍝',
      features: ['Digital Menu', 'Online Reservations', 'About Story', 'Contact Info'],
      testimonial: 'Reservations doubled since launching our new website!',
      client: 'Chef Antonio Rossi',
      liveUrl: 'https://portfolio-restaurant-dustin-arnolds-projects.vercel.app',
      beforeAfter: true,
      description: 'A complete website redesign for an authentic Italian restaurant. Warm, inviting design showcasing their delicious menu with integrated reservation system.',
      challenge: 'Outdated website not mobile-friendly and difficult to make reservations.',
      solution: 'Modern redesign with responsive layout, digital menu, and streamlined reservation process.',
      results: ['100% increase in online reservations', 'Mobile traffic up 200%', 'Improved customer satisfaction'],
    },
    {
      id: 4,
      title: 'IronCore Fitness',
      category: 'fitness',
      industry: 'Fitness Center',
      deliveryTime: '7 days',
      rating: 5,
      image: '💪',
      features: ['Class Schedules', 'Membership Plans', 'Trainer Profiles', 'Facilities Tour', 'Blog'],
      testimonial: 'Our online presence finally matches the quality of our gym!',
      client: 'Marcus Thompson',
      liveUrl: 'https://portfolio-gym-dustin-arnolds-projects.vercel.app',
      beforeAfter: false,
      description: 'A comprehensive custom website for a modern fitness center featuring class schedules, membership options, trainer profiles, facilities showcase, and fitness blog.',
      challenge: 'Needed a complete online presence to compete with larger gym chains.',
      solution: 'Built a full-featured website with 7 pages covering all aspects of the gym experience.',
      results: ['300% increase in membership inquiries', 'Professional brand image', 'Enhanced member engagement'],
    },
    {
      id: 5,
      title: 'Bright Smile Dental Care',
      category: 'healthcare',
      industry: 'Dental Practice',
      deliveryTime: '7 days',
      rating: 5,
      image: '🦷',
      features: ['Service Details', 'Team Bios', 'New Patient Info', 'Resources', 'Appointment Booking'],
      testimonial: 'Patient inquiries increased by 150% in the first month!',
      client: 'Dr. James Anderson',
      liveUrl: 'https://portfolio-dental-dustin-arnolds-projects.vercel.app',
      beforeAfter: false,
      description: 'A professional custom website for a family dental practice. Clean, trustworthy design with comprehensive service information, team profiles, and patient resources.',
      challenge: 'Attract new patients and provide comprehensive information about services.',
      solution: 'Created an 8-page website with detailed service info, team credentials, new patient forms, and educational resources.',
      results: ['150% increase in new patient inquiries', 'Better patient education', 'Streamlined intake process'],
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const stats = [
    { number: '5', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '5', label: 'Average Delivery (Days)' },
    { number: '175%', label: 'Average Growth Increase' },
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how we've helped small businesses transform their online presence
              with AI-powered website design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 dark:bg-gray-900 sticky top-16 md:top-20 z-40">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="flex items-center space-x-2 mr-6">
              <FunnelIcon className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">Filter by Industry:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => {
                    setIsFilterChanging(true);
                    setActiveFilter(filter.id);
                    setTimeout(() => setIsFilterChanging(false), 300);
                  }}
                  disabled={isFilterChanging}
                  aria-pressed={activeFilter === filter.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed ${
                    activeFilter === filter.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {isFilterChanging && activeFilter === filter.id ? (
                    <span className="flex items-center">
                      <span className="animate-spin mr-2 h-3 w-3 border-2 border-white border-t-transparent rounded-full"></span>
                      {filter.name}
                    </span>
                  ) : (
                    filter.name
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card hover-lift group"
                >
                  {/* Project Image/Icon */}
                  <div className="relative mb-6">
                    <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 rounded-lg flex items-center justify-center text-6xl mb-4 group-hover:scale-105 transition-transform duration-300">
                      {project.image}
                    </div>

                    {project.beforeAfter && (
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Before/After Available
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-heading font-semibold mb-1">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {project.industry}
                        </p>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(project.rating)].map((_, i) => (
                          <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Delivery Time */}
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <ClockIcon className="w-4 h-4 mr-2" />
                      <span>Delivered in {project.deliveryTime}</span>
                    </div>

                    {/* Testimonial */}
                    <blockquote className="border-l-4 border-primary-500 pl-4 italic text-gray-600 dark:text-gray-400">
                      "{project.testimonial}"
                      <footer className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        — {project.client}
                      </footer>
                    </blockquote>

                    {/* Actions */}
                    <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium"
                      >
                        <EyeIcon className="w-4 h-4 mr-1" />
                        View Details
                      </button>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-secondary-600 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300 text-sm font-medium"
                        >
                          Visit Live Site
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 dark:text-gray-400">
                No projects found in this category. Check back soon!
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Process Showcase */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              From Concept to Launch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See how our AI-powered process delivers professional websites
              in just days, not months.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-lg font-heading font-semibold mb-2">
                Day 1: Discovery
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We gather your requirements, brand assets, and business goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-lg font-heading font-semibold mb-2">
                Days 2-4: AI Design
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Our AI creates multiple design concepts tailored to your industry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-heading font-semibold mb-2">
                Days 5-7: Launch
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Final refinements, testing, and your website goes live.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Let's create a website that helps your business grow and succeed online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <h3 id="modal-title" className="text-2xl font-heading font-bold">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {selectedProject.industry}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close modal"
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Project Image */}
                <div className="w-full h-32 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 rounded-lg flex items-center justify-center text-4xl">
                  {selectedProject.image}
                </div>

                {/* Description */}
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-2">Project Overview</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Challenge & Solution */}
                {selectedProject.challenge && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-heading font-semibold text-lg mb-2">Challenge</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {selectedProject.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg mb-2">Solution</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>
                )}

                {/* Features */}
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-3">Key Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                {selectedProject.results && (
                  <div>
                    <h4 className="font-heading font-semibold text-lg mb-3">Results</h4>
                    <div className="space-y-2">
                      {selectedProject.results.map((result, index) => (
                        <div key={index} className="flex items-center">
                          <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                      {selectedProject.deliveryTime}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Delivery Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 flex items-center justify-center">
                      {[...Array(selectedProject.rating)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Client Rating</div>
                  </div>
                </div>

                {/* Testimonial */}
                <blockquote className="border-l-4 border-primary-500 pl-4 italic text-gray-600 dark:text-gray-400">
                  "{selectedProject.testimonial}"
                  <footer className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    — {selectedProject.client}
                  </footer>
                </blockquote>

                {/* CTA */}
                <div className="flex justify-center pt-4">
                  <Link
                    to="/contact"
                    onClick={() => setSelectedProject(null)}
                    className="btn-primary"
                  >
                    Start Your Project
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
