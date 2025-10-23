import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeftIcon, 
  QuestionMarkCircleIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const Help = () => {
  const helpOptions = [
    {
      icon: QuestionMarkCircleIcon,
      title: 'FAQ',
      description: 'Find answers to common questions',
      link: '/pricing',
      linkText: 'View FAQ Section'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Contact Support',
      description: 'Get in touch with our team',
      link: '/contact',
      linkText: 'Contact Us'
    },
    {
      icon: PhoneIcon,
      title: 'Phone Support',
      description: 'Call us during business hours',
      link: 'tel:+17345777138',
      linkText: '(734) 577-7138'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Support',
      description: 'Send us a detailed message',
      link: 'mailto:everymanswebsitedesign@gmail.com',
      linkText: 'everymanswebsitedesign@gmail.com'
    }
  ];

  return (
    <div className="pt-8 min-h-screen">
      <section className="hero-gradient section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="gradient-text">Help Center</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
              We're here to help! Choose the best way to get the support you need.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {helpOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover-lift"
              >
                <option.icon className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {option.description}
                </p>
                <Link
                  to={option.link}
                  className="btn-primary inline-block"
                >
                  {option.linkText}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/" 
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;