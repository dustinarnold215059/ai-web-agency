import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CalendarIcon,
  ClockIcon,
  TagIcon,
  UserIcon,
  ArrowLeftIcon,
  ShareIcon
} from '@heroicons/react/24/outline';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-lg text-center">
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-lg text-gray-700 mb-8">
            Sorry, we couldn't find the article you're looking for. It may have been moved or removed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/blog" className="btn-primary">
              ← Back to Blog
            </Link>
            <Link to="/contact" className="btn-outline">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback to copying URL to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('URL copied to clipboard!');
    }
  };

  // Convert markdown-like content to JSX (basic implementation)
  const formatContent = (content) => {
    const lines = content.split('\n');
    const elements = [];
    let currentParagraph = [];

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('## ')) {
        if (currentParagraph.length > 0) {
          elements.push(
            <p key={`p-${elements.length}`} className="mb-6 text-gray-700 leading-relaxed">
              {currentParagraph.join(' ')}
            </p>
          );
          currentParagraph = [];
        }
        elements.push(
          <h2 key={`h2-${index}`} className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4">
            {trimmedLine.replace('## ', '')}
          </h2>
        );
      } else if (trimmedLine.startsWith('### ')) {
        if (currentParagraph.length > 0) {
          elements.push(
            <p key={`p-${elements.length}`} className="mb-6 text-gray-700 leading-relaxed">
              {currentParagraph.join(' ')}
            </p>
          );
          currentParagraph = [];
        }
        elements.push(
          <h3 key={`h3-${index}`} className="text-xl font-heading font-semibold text-gray-900 mt-6 mb-3">
            {trimmedLine.replace('### ', '')}
          </h3>
        );
      } else if (trimmedLine.startsWith('```')) {
        if (currentParagraph.length > 0) {
          elements.push(
            <p key={`p-${elements.length}`} className="mb-6 text-gray-700 leading-relaxed">
              {currentParagraph.join(' ')}
            </p>
          );
          currentParagraph = [];
        }
        // For code blocks, we'll just style them as pre for now
        const nextCodeLineIndex = lines.findIndex((l, i) => i > index && l.trim().startsWith('```'));
        if (nextCodeLineIndex > -1) {
          const codeLines = lines.slice(index + 1, nextCodeLineIndex);
          elements.push(
            <pre key={`code-${index}`} className="bg-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
              <code className="text-sm font-mono text-gray-800">
                {codeLines.join('\n')}
              </code>
            </pre>
          );
        }
      } else if (trimmedLine.startsWith('- ')) {
        if (currentParagraph.length > 0) {
          elements.push(
            <p key={`p-${elements.length}`} className="mb-6 text-gray-700 leading-relaxed">
              {currentParagraph.join(' ')}
            </p>
          );
          currentParagraph = [];
        }
        elements.push(
          <li key={`li-${index}`} className="mb-2 text-gray-700">
            {trimmedLine.replace('- ', '')}
          </li>
        );
      } else if (trimmedLine !== '' && !trimmedLine.startsWith('```')) {
        currentParagraph.push(trimmedLine);
      } else if (trimmedLine === '' && currentParagraph.length > 0) {
        elements.push(
          <p key={`p-${elements.length}`} className="mb-6 text-gray-700 leading-relaxed">
            {currentParagraph.join(' ')}
          </p>
        );
        currentParagraph = [];
      }
    });

    if (currentParagraph.length > 0) {
      elements.push(
        <p key={`p-${elements.length}`} className="mb-6 text-gray-700 leading-relaxed">
          {currentParagraph.join(' ')}
        </p>
      );
    }

    return elements;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back to Blog */}
            <Link 
              to="/blog" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            {/* Category */}
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                <TagIcon className="w-3 h-3 mr-1" />
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <UserIcon className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Share Button */}
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ShareIcon className="w-4 h-4" />
              Share Article
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-0">
        <div className="container-custom">
          <motion.div
            className="aspect-video rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={post.image}
              alt={post.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {formatContent(post.content)}
            </motion.div>

            {/* Tags */}
            <motion.div
              className="mt-12 pt-8 border-t border-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div
              className="mt-12 pt-8 border-t border-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex justify-between items-center">
                <Link to="/blog" className="btn-outline">
                  ← More Articles
                </Link>
                <Link to="/contact" className="btn-primary">
                  Start Your Project →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;