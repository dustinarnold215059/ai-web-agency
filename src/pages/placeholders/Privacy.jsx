import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const Privacy = () => {
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
              <span className="gradient-text">Privacy Policy</span>
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
                <h2 className="text-2xl font-heading font-semibold mb-4">Information We Collect</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Fill out our contact form</li>
                  <li>Request a quote for our services</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Communicate with us via email or phone</li>
                </ul>
              </div>

              <div className="card">
                <h2 className="text-2xl font-heading font-semibold mb-4">How We Use Your Information</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                </ul>
              </div>

              <div className="card">
                <h2 className="text-2xl font-heading font-semibold mb-4">Information Sharing</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this privacy policy or as required by law.
                </p>
              </div>

              <div className="card">
                <h2 className="text-2xl font-heading font-semibold mb-4">Contact Us</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  If you have any questions about this Privacy Policy, please contact us at{' '}
                  <Link to="/contact" className="text-primary-600 dark:text-primary-400 hover:underline">
                    our contact page
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

export default Privacy;