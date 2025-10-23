import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const Blog = () => {
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
              <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Our blog is coming soon! We'll be sharing insights about AI-powered web design, 
              small business tips, and success stories from our clients.
            </p>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md mx-auto">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Stay tuned for valuable content about web design trends, AI technology, and business growth strategies.
              </p>
              
              <Link 
                to="/" 
                className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
              >
                <ArrowLeftIcon className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;