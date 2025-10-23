import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  MagnifyingGlassIcon,
  CogIcon,
  PaintBrushIcon,
  BoltIcon,
  ClockIcon,
  CurrencyDollarIcon,
  CheckIcon,
  StarIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

const Services = () => {
  const mainServices = [
    {
      icon: ComputerDesktopIcon,
      title: 'Custom Website Design',
      description: 'Professional, AI-powered websites tailored to your business needs and brand identity.',
      features: ['Custom Design', 'Mobile Responsive', 'SEO Optimized', 'Fast Loading'],
      price: 'Starting at $997',
      popular: false,
    },
    {
      icon: PaintBrushIcon,
      title: 'Website Redesign',
      description: 'Transform your existing website with modern design and improved user experience.',
      features: ['Modern UI/UX', 'Performance Boost', 'Mobile Optimization', 'Content Migration'],
      price: 'Starting at $797',
      popular: true,
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Landing Pages',
      description: 'High-converting landing pages designed to capture leads and drive sales.',
      features: ['Conversion Focused', 'A/B Testing Ready', 'Lead Capture', 'Analytics Integration'],
      price: 'Starting at $497',
      popular: false,
    },
  ];

  const addOnServices = [
    {
      icon: MagnifyingGlassIcon,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive more organic traffic.',
      price: '$297 one-time',
    },
    {
      icon: CogIcon,
      title: 'Website Maintenance',
      description: 'Keep your website updated, secure, and running smoothly.',
      price: '$197/month',
    },
    {
      icon: BoltIcon,
      title: 'Performance Optimization',
      description: 'Speed up your website for better user experience and SEO.',
      price: '$397 one-time',
    },
  ];

  const industries = [
    { name: 'Restaurants & Food', icon: '🍕', description: 'Menu displays, online ordering, reservation systems' },
    { name: 'Healthcare', icon: '🏥', description: 'Appointment booking, patient portals, HIPAA compliance' },
    { name: 'Professional Services', icon: '💼', description: 'Service listings, client portals, consultation booking' },
    { name: 'Real Estate', icon: '🏠', description: 'Property listings, virtual tours, lead capture' },
    { name: 'Fitness & Wellness', icon: '💪', description: 'Class schedules, membership signup, trainer profiles' },
    { name: 'Education', icon: '📚', description: 'Course catalogs, student portals, online learning' },
    { name: 'Automotive', icon: '🚗', description: 'Inventory displays, service booking, financing tools' },
  ];

  const advantages = [
    {
      icon: BoltIcon,
      title: '7x Faster Delivery',
      description: 'Traditional agencies take 2-3 months. We deliver in 5-7 days using AI technology.',
    },
    {
      icon: CurrencyDollarIcon,
      title: '70% Cost Savings',
      description: 'Skip the $5,000-$15,000 agency fees. Professional websites starting at $997.',
    },
    {
      icon: ClockIcon,
      title: '24/7 AI Design',
      description: 'Our AI works around the clock, creating multiple design variations in hours.',
    },
    {
      icon: StarIcon,
      title: 'Consistent Quality',
      description: 'AI ensures every website meets our high standards for design and performance.',
    },
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
              AI-Powered <span className="gradient-text">Web Design Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Professional websites designed by AI, perfected by humans. 
              Fast, affordable, and tailored to your business needs.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Start Your Project Today
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to establish a strong online presence for your business.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative card hover-lift h-full ${service.popular ? 'ring-2 ring-primary-500' : ''}`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-6 bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                        {service.price}
                      </span>
                      <Link 
                        to="/contact" 
                        className="btn-outline flex items-center text-sm px-4 py-2"
                      >
                        Get Quote
                        <ArrowRightIcon className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Advantages */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Choose <span className="gradient-text">AI-Powered Design?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See how our AI technology gives you advantages over traditional web design agencies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 dark:bg-primary-900 rounded-2xl flex items-center justify-center">
                  <advantage.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Enhance your website with our professional add-on services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {addOnServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover-lift text-center h-full"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary-100 dark:bg-secondary-900 rounded-2xl flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-secondary-600 dark:text-secondary-400" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {service.description}
                </p>
                <div className="text-lg font-bold text-secondary-600 dark:text-secondary-400 mb-4">
                  {service.price}
                </div>
                <Link to="/contact" className="btn-outline w-full">
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Specialties */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Industry Specialties
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We understand the unique needs of different industries and create 
              websites that work specifically for your business type.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="card hover-lift text-center h-full"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="font-heading font-semibold mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {industry.description}
                </p>
              </motion.div>
            ))}
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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Let's discuss your project and create a website that helps your business grow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link 
                to="/portfolio" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;