import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { StarIcon, CheckIcon, HeartIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

const LeaveReview = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    rating: 0,
    review: '',
    displayPublicly: true,
  });

  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  // Restore form data from localStorage on mount
  useEffect(() => {
    const savedFormData = localStorage.getItem('review_form_data');
    if (savedFormData) {
      try {
        const parsed = JSON.parse(savedFormData);
        setFormData(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error('Error restoring form data:', error);
      }
    }
  }, []);

  // Save form data to localStorage on change (debounced)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (formData.name || formData.email || formData.review) {
        localStorage.setItem('review_form_data', JSON.stringify(formData));
      }
    }, 1000); // Debounce 1 second

    return () => clearTimeout(timeoutId);
  }, [formData]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (formData.rating === 0) {
      newErrors.rating = 'Please select a rating';
    }

    if (!formData.review.trim()) {
      newErrors.review = 'Review is required';
    } else if (formData.review.trim().length < 20) {
      newErrors.review = 'Review must be at least 20 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleRatingClick = (rating) => {
    setFormData(prev => ({ ...prev, rating }));
    if (errors.rating) {
      setErrors(prev => ({ ...prev, rating: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({});

    // Set timeout for the request
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
      setErrors({ submit: 'Request timed out. Please check your connection and try again.' });
    }, 30000); // 30 second timeout

    try {
      // Send review notification to admin
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        'template_review_submission',
        {
          client_name: formData.name,
          business_name: formData.businessName,
          client_email: formData.email,
          rating: formData.rating,
          review_text: formData.review,
          display_publicly: formData.displayPublicly ? 'Yes' : 'No',
          submission_date: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Send thank you email to client
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        'template_review_thankyou',
        {
          client_name: formData.name,
          client_email: formData.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      clearTimeout(timeoutId);
      setIsSubmitted(true);
      // Clear saved form data on successful submission
      localStorage.removeItem('review_form_data');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      clearTimeout(timeoutId);
      if (import.meta.env.DEV) {
        console.error('Review submission error:', error);
      }

      // Provide more specific error messages
      let errorMessage = 'There was an error submitting your review. Please try again or email us directly.';
      if (error.text) {
        if (error.text.includes('network') || error.text.includes('Failed to fetch')) {
          errorMessage = 'Network error. Please check your internet connection and try again.';
        } else if (error.status === 400) {
          errorMessage = 'Invalid form data. Please check your entries and try again.';
        } else if (error.status === 401 || error.status === 403) {
          errorMessage = 'Service temporarily unavailable. Please contact us directly.';
        }
      }

      setErrors({ submit: errorMessage });
    } finally {
      clearTimeout(timeoutId);
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-8 min-h-screen flex items-center justify-center hero-gradient">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto text-center p-8"
        >
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckIcon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-heading font-bold mb-4">Thank You!</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            We truly appreciate you taking the time to share your experience with us.
            Your feedback helps us improve and helps other businesses find us!
          </p>
          <div className="card p-6 text-left mb-6">
            <h3 className="font-semibold mb-3">What happens next?</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• We'll review your testimonial</li>
              <li>• If you approved, we may feature it on our website and marketing materials</li>
              <li>• You'll receive a confirmation email</li>
              <li>• We may reach out for permission to use your photo/logo</li>
            </ul>
          </div>
          <HeartIcon className="w-12 h-12 text-red-500 mx-auto" />
        </motion.div>
      </div>
    );
  }

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
            <HeartIcon className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Share Your <span className="gradient-text">Experience</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We'd love to hear about your experience working with us!
              Your feedback helps us improve and helps other businesses make informed decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Review Form */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card"
          >
            <h2 className="text-2xl font-heading font-bold mb-6">Leave a Review</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Business Name */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={errors.name ? 'true' : 'false'}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent bg-white dark:bg-gray-700 ${
                      errors.name
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500'
                    }`}
                    placeholder="John Smith"
                  />
                  {errors.name && (
                    <div aria-live="polite" aria-atomic="true">
                      <p id="name-error" className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                        {errors.name}
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    required
                    aria-describedby={errors.businessName ? 'businessName-error' : undefined}
                    aria-invalid={errors.businessName ? 'true' : 'false'}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent bg-white dark:bg-gray-700 ${
                      errors.businessName
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500'
                    }`}
                    placeholder="Your Business Name"
                  />
                  {errors.businessName && (
                    <div aria-live="polite" aria-atomic="true">
                      <p id="businessName-error" className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                        {errors.businessName}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent bg-white dark:bg-gray-700 ${
                    errors.email
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <div aria-live="polite" aria-atomic="true">
                    <p id="email-error" className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                      {errors.email}
                    </p>
                  </div>
                )}
              </div>

              {/* Star Rating */}
              <div>
                <label id="rating-label" className="block text-sm font-medium mb-2">
                  How would you rate your experience? *
                </label>
                <div className="flex items-center space-x-2" role="radiogroup" aria-labelledby="rating-label" aria-describedby={errors.rating ? 'rating-error' : undefined}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingClick(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                      className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded"
                    >
                      {star <= (hoveredRating || formData.rating) ? (
                        <StarIconSolid className="w-10 h-10 text-yellow-400" />
                      ) : (
                        <StarIcon className="w-10 h-10 text-gray-300" />
                      )}
                    </button>
                  ))}
                  <span className="ml-4 text-lg font-semibold text-gray-700 dark:text-gray-300">
                    {formData.rating > 0 ? `${formData.rating} Star${formData.rating > 1 ? 's' : ''}` : 'Select rating'}
                  </span>
                </div>
                {errors.rating && (
                  <div aria-live="polite" aria-atomic="true">
                    <p id="rating-error" className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                      {errors.rating}
                    </p>
                  </div>
                )}
              </div>

              {/* Review Text */}
              <div>
                <label htmlFor="review" className="block text-sm font-medium mb-2">
                  Your Review *
                </label>
                <textarea
                  id="review"
                  name="review"
                  value={formData.review}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  aria-describedby={errors.review ? 'review-error' : 'review-hint'}
                  aria-invalid={errors.review ? 'true' : 'false'}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent bg-white dark:bg-gray-700 ${
                    errors.review
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500'
                  }`}
                  placeholder="Tell us about your experience working with Every Man's Website Design. What did you like? How did we help your business?"
                />
                <div className="flex justify-between items-center mt-2">
                  {errors.review && (
                    <div aria-live="polite" aria-atomic="true">
                      <p id="review-error" className="text-sm text-red-600 dark:text-red-400" role="alert">
                        {errors.review}
                      </p>
                    </div>
                  )}
                  <p id="review-hint" className="text-sm text-gray-500 ml-auto">
                    {formData.review.length} characters (minimum 20)
                  </p>
                </div>
              </div>

              {/* Permission Checkbox */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="displayPublicly"
                  name="displayPublicly"
                  checked={formData.displayPublicly}
                  onChange={handleInputChange}
                  className="mt-1 mr-3 rounded text-primary-600 focus:ring-primary-500"
                />
                <label htmlFor="displayPublicly" className="text-sm text-gray-600 dark:text-gray-400">
                  I give permission for Every Man's Website Design to display this review publicly
                  on their website, marketing materials, and social media. I understand that my
                  name and business name may be featured alongside the review.
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isLoading}
                className={`w-full text-lg py-4 ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'btn-primary'
                }`}
                whileHover={!isLoading ? { scale: 1.02 } : {}}
                whileTap={!isLoading ? { scale: 0.98 } : {}}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                    Submitting...
                  </div>
                ) : (
                  'Submit Review'
                )}
              </motion.button>

              {errors.submit && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4" aria-live="polite" aria-atomic="true">
                  <p className="text-red-600 dark:text-red-400 text-sm font-medium mb-3" role="alert">
                    {errors.submit}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setErrors({});
                      handleSubmit(new Event('submit'));
                    }}
                    className="btn-outline text-sm px-4 py-2"
                  >
                    Retry Submission
                  </button>
                </div>
              )}
            </form>
          </motion.div>

          {/* Privacy Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center text-sm text-gray-500"
          >
            <p>Your email will never be shared publicly or used for marketing purposes.</p>
            <p className="mt-2">We only use it to contact you if we have questions about your review.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LeaveReview;
