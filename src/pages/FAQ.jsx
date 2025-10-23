import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FAQSection from '../components/pricing/FAQSection';
import { faqs } from '../data/pricingData';
import { QuestionMarkCircleIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

const FAQ = () => {
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
            <QuestionMarkCircleIcon className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Find answers to common questions about our services, pricing, and process.
              Can't find what you're looking for? Contact us!
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} hideHeader={true} />

      {/* Still Have Questions? */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="card text-center bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border-2 border-primary-200 dark:border-primary-800">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Still Have Questions?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                We're here to help! Get in touch with us and we'll answer any questions you have.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3 text-gray-700 dark:text-gray-300">
                  <PhoneIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  <div className="text-left">
                    <div className="text-sm text-gray-500">Call us</div>
                    <div className="font-semibold">(734) 577-7138</div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-700 dark:text-gray-300">
                  <EnvelopeIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  <div className="text-left">
                    <div className="text-sm text-gray-500">Email us</div>
                    <div className="font-semibold">everymanswebsitedesign@gmail.com</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  Contact Us
                </Link>
                <Link to="/how-it-works" className="btn-outline">
                  Learn How It Works
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
