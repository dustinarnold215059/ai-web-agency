import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HomeIcon, ArrowLeftIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const NotFound = () => {
  return (
    <main>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Number */}
          <motion.h1
            className="text-9xl md:text-[12rem] font-bold gradient-text mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            404
          </motion.h1>

          {/* Emoji Icon */}
          <motion.div
            className="text-6xl mb-6"
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            🤔
          </motion.div>

          {/* Message */}
          <motion.h2
            className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Page Not Found
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              to="/"
              className="btn-primary inline-flex items-center justify-center px-6 py-3"
            >
              <HomeIcon className="w-5 h-5 mr-2" />
              Go to Homepage
            </Link>

            <button
              onClick={() => window.history.back()}
              className="btn-outline inline-flex items-center justify-center px-6 py-3"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4 flex items-center justify-center">
              <MagnifyingGlassIcon className="w-4 h-4 mr-2" />
              Looking for something? Try these pages:
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/services"
                className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
              >
                Services
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                to="/pricing"
                className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
              >
                Pricing
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                to="/portfolio"
                className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
              >
                Portfolio
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                to="/contact"
                className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
              >
                Contact
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                to="/faq"
                className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
              >
                FAQ
              </Link>
            </div>
          </motion.div>

          {/* Contact Support */}
          <motion.div
            className="mt-8 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <p>
              Still need help?{' '}
              <Link to="/contact" className="text-primary-600 hover:underline">
                Contact our support team
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
    </main>
  );
};

export default NotFound;
