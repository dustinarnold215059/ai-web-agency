import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  EyeIcon,
  ClockIcon,
  StarIcon,
  FunnelIcon,
} from '@heroicons/react/24/outline';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'restaurant', name: 'Restaurants' },
    { id: 'retail', name: 'Retail' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'services', name: 'Professional Services' },
    { id: 'fitness', name: 'Fitness' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Bella Vista Restaurant',
      category: 'restaurant',
      industry: 'Italian Restaurant',
      deliveryTime: '6 days',
      rating: 5,
      image: '🍝',
      features: ['Online Menu', 'Reservation System', 'Order Online'],
      testimonial: 'Orders increased by 200% in the first month!',
      client: 'Maria Rossi',
      liveUrl: 'https://bellavista-demo.netlify.app',
      beforeAfter: true,
    },
    {
      id: 2,
      title: 'FitCore Gym',
      category: 'fitness',
      industry: 'Fitness Studio',
      deliveryTime: '5 days',
      rating: 5,
      image: '💪',
      features: ['Class Schedules', 'Membership Portal', 'Trainer Profiles'],
      testimonial: 'Professional, fast, and exactly what we needed.',
      client: 'Jake Thompson',
      liveUrl: 'https://fitcore-gym-demo.netlify.app',
      beforeAfter: false,
    },
    {
      id: 3,
      title: 'StyleHub Boutique',
      category: 'retail',
      industry: 'Fashion Retail',
      deliveryTime: '7 days',
      rating: 5,
      image: '👗',
      features: ['E-commerce', 'Inventory Management', 'Payment Processing'],
      testimonial: 'Sales doubled within two weeks of launch!',
      client: 'Sophie Chen',
      liveUrl: 'https://stylehub-boutique-demo.netlify.app',
      beforeAfter: true,
    },
    {
      id: 4,
      title: 'Dr. Smith Dental',
      category: 'healthcare',
      industry: 'Dental Practice',
      deliveryTime: '6 days',
      rating: 5,
      image: '🦷',
      features: ['Appointment Booking', 'Patient Portal', 'Service Info'],
      testimonial: 'Patient inquiries increased by 150%.',
      client: 'Dr. Michael Smith',
      liveUrl: 'https://drsmith-dental-demo.netlify.app',
      beforeAfter: false,
    },
    {
      id: 5,
      title: 'Johnson & Associates',
      category: 'services',
      industry: 'Legal Services',
      deliveryTime: '5 days',
      rating: 5,
      image: '⚖️',
      features: ['Practice Areas', 'Consultation Booking', 'Case Studies'],
      testimonial: 'Exactly what our firm needed. Very professional.',
      client: 'Sarah Johnson',
      liveUrl: 'https://johnson-law-demo.netlify.app',
      beforeAfter: false,
    },
    {
      id: 6,
      title: 'Green Thumb Garden Center',
      category: 'retail',
      industry: 'Garden Center',
      deliveryTime: '7 days',
      rating: 5,
      image: '🌱',
      features: ['Product Catalog', 'Care Guides', 'Online Store'],
      testimonial: 'Beautiful design that showcases our plants perfectly.',
      client: 'Tom Wilson',
      liveUrl: 'https://greenthumb-garden-demo.netlify.app',
      beforeAfter: true,
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '6.2', label: 'Average Delivery (Days)' },
    { number: '250%', label: 'Average ROI Increase' },
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
      <section className="py-8 bg-gray-50 dark:bg-gray-900 sticky top-20 z-40">
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
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeFilter === filter.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {filter.name}
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
                      <button className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium">
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
    </div>
  );
};

export default Portfolio;