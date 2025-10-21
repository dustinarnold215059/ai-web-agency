import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  RocketLaunchIcon,
  ClockIcon,
  CurrencyDollarIcon,
  SparklesIcon,
  CheckIcon,
  StarIcon,
  ChevronRightIcon,
  BoltIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline';

const Home = () => {
  const trustIndicators = [
    {
      icon: BoltIcon,
      title: 'Lightning Fast',
      description: 'Websites delivered in 5-7 days',
      stat: '7x Faster',
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Affordable',
      description: 'Starting at just $997',
      stat: '70% Less',
    },
    {
      icon: SparklesIcon,
      title: 'AI-Powered',
      description: 'Modern design meets smart technology',
      stat: '100% Custom',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Guaranteed',
      description: '30-day money-back guarantee',
      stat: '99% Satisfied',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Tell us about your business goals and vision',
      icon: '💬',
    },
    {
      number: '02',
      title: 'AI Design',
      description: 'Our AI creates your custom website design',
      icon: '🤖',
    },
    {
      number: '03',
      title: 'Launch',
      description: 'Review, refine, and go live in days',
      icon: '🚀',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      business: 'Boutique Bakery',
      rating: 5,
      text: 'WebCraft AI transformed my bakery\'s online presence in just 6 days. Orders increased by 300% in the first month!',
      image: '👩‍🍳',
    },
    {
      name: 'Mike Rodriguez',
      business: 'Fitness Studio',
      rating: 5,
      text: 'The AI-powered design perfectly captured our brand. Professional, fast, and incredibly affordable.',
      image: '💪',
    },
    {
      name: 'Lisa Chen',
      business: 'Legal Services',
      rating: 5,
      text: 'Finally, a web design service that understands small business needs. Highly recommend!',
      image: '⚖️',
    },
  ];

  const stats = [
    { number: '500+', label: 'Websites Created' },
    { number: '5-7', label: 'Days Delivery' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl opacity-10 animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500 rounded-full filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-6"
              >
                <SparklesIcon className="w-4 h-4 mr-2" />
                AI-Powered Web Design
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight"
              >
                Professional Websites for{' '}
                <span className="gradient-text">Small Businesses</span>{' '}
                in Days, Not Months
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              >
                Skip the expensive agencies and long wait times. Get a stunning, 
                mobile-responsive website powered by AI technology at a fraction 
                of the cost—delivered in just 5-7 days.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                  Get Started Today
                  <RocketLaunchIcon className="w-5 h-5 ml-2" />
                </Link>
                <Link to="/portfolio" className="btn-outline text-lg px-8 py-4">
                  View Portfolio
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 flex items-center justify-center lg:justify-start space-x-2 text-sm text-gray-500 dark:text-gray-400"
              >
                <CheckIcon className="w-4 h-4 text-green-500" />
                <span>30-day money-back guarantee</span>
                <span className="mx-2">•</span>
                <CheckIcon className="w-4 h-4 text-green-500" />
                <span>No hidden fees</span>
              </motion.div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                {/* Mock Browser Window */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center px-4 py-3 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-white dark:bg-gray-600 rounded px-3 py-1 text-xs text-gray-500 dark:text-gray-300">
                        your-business.com
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="h-4 bg-gradient-to-r from-primary-400 to-secondary-400 rounded w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-5/6"></div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-4/6"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="h-16 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-900 rounded"></div>
                      <div className="h-16 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-900 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center text-white font-bold"
              >
                AI
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center text-white"
              >
                <DevicePhoneMobileIcon className="w-8 h-8" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {trustIndicators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                  {item.stat}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              How It Works: <span className="gradient-text">Simple as 1-2-3</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our AI-powered process makes getting a professional website 
              easier than ever before.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                <div className="card hover-lift">
                  <div className="text-6xl mb-4">{step.icon}</div>
                  <div className="text-primary-600 dark:text-primary-400 font-bold text-lg mb-2">
                    Step {step.number}
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRightIcon className="w-8 h-8 text-primary-300 dark:text-primary-700" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/how-it-works" className="btn-primary">
              Learn More About Our Process
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary-600 dark:bg-primary-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-100 dark:text-primary-200">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. See how we've helped small 
              businesses grow their online presence.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover-lift"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.business}
                    </p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "{testimonial.text}"
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
              Ready to Transform Your Business Online?
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Join hundreds of successful small businesses who chose WebCraft AI 
              for their website needs. Get started today!
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

export default Home;