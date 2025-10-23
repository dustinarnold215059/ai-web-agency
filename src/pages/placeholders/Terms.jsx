import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const Terms = () => {
  const lastUpdated = "October 21, 2024";

  return (
    <div className="pt-8 min-h-screen">
      <section className="hero-gradient py-16">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="gradient-text">Terms of Service</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Last updated: {lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="card">
                <h2 className="text-2xl font-heading font-semibold mb-4">Agreement to Terms</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  By accessing and using our website and services, you agree to be bound by these 
                  Terms of Service and our Privacy Policy. If you do not agree to these terms, 
                  please do not use our services.
                </p>
              </div>

              <div className="card">
                <h2 className="text-2xl font-heading font-semibold mb-4">Our Services</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  We provide AI-powered website design and development services for small businesses, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Website design and development</li>
                  <li>Website redesign and optimization</li>
                  <li>Website maintenance and support</li>
                </ul>
              </div>

              <div className="card">
                <h2 className="text-2xl font-heading font-semibold mb-4">Payment and Refunds</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  We offer a 30-day money-back guarantee for our services. If you're not satisfied 
                  with our work, you can request a full refund within 30 days of project completion.
                </p>
              </div>

              <div className="card">
                <h2 className="text-2xl font-heading font-semibold mb-4">Intellectual Property</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Upon full payment, you own the final website and all custom content we create for you. 
                  We retain the right to showcase your project in our portfolio and marketing materials.
                </p>
              </div>

              <div className="card">
                <h2 className="text-2xl font-heading font-semibold mb-4">Limitation of Liability</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Our liability is limited to the amount paid for our services. We are not liable 
                  for any indirect, incidental, or consequential damages.
                </p>
              </div>

              <div className="card">
                <h2 className="text-2xl font-heading font-semibold mb-4">Contact Information</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  If you have questions about these Terms of Service, please{' '}
                  <Link to="/contact" className="text-primary-600 dark:text-primary-400 hover:underline">
                    contact us
                  </Link>.
                </p>
              </div>
            </motion.div>
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

export default Terms;