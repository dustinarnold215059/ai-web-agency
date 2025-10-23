import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  CheckIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    projectType: 'new-website',
    name: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: '',
    timeline: '',
    budget: '',
    description: '',
    features: [],
    hearAbout: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  // Restore form data from localStorage on mount
  useEffect(() => {
    const savedFormData = localStorage.getItem('contact_form_data');
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
      if (formData.name || formData.email || formData.businessName) {
        localStorage.setItem('contact_form_data', JSON.stringify(formData));
      }
    }, 1000); // Debounce 1 second

    return () => clearTimeout(timeoutId);
  }, [formData]);

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    if (!phone) return true; // Phone is optional
    const phoneRegex = /^[+]?[\d\s\-().]{7,20}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business name is required';
    }

    if (!formData.businessType) {
      newErrors.businessType = 'Please select your business type';
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
  };

  const handleFeatureChange = (feature) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    const allFields = ['name', 'email', 'businessName', 'businessType'];
    setTouched(allFields.reduce((acc, field) => ({ ...acc, [field]: true }), {}));

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
      // Prepare admin email data
      const adminEmailData = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        business_name: formData.businessName,
        business_type: formData.businessType,
        project_type: formData.projectType,
        budget: formData.budget || 'Not specified',
        timeline: formData.timeline || 'Not specified',
        features: formData.features.length > 0 ? formData.features.join(', ') : 'None selected',
        description: formData.description || 'No description provided',
        hear_about: formData.hearAbout || 'Not specified'
      };

      // Prepare user confirmation email data
      const userEmailData = {
        user_name: formData.name,
        user_email: formData.email,
        business_name: formData.businessName,
        project_type: formData.projectType,
        budget: formData.budget || 'Not specified',
        timeline: formData.timeline || 'Not specified'
      };

      // Send admin notification email
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE,
        adminEmailData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Send user confirmation email
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONTACT_ADMIN_TEMPLATE,
        userEmailData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      clearTimeout(timeoutId);
      setIsSubmitted(true);
      // Clear saved form data on successful submission
      localStorage.removeItem('contact_form_data');
      // Scroll to top to show Thank You message
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      clearTimeout(timeoutId);
      if (import.meta.env.DEV) {
        console.error('EmailJS Error:', error);
      }

      // Provide more specific error messages
      let errorMessage = 'There was an error submitting your form. Please try again.';
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

  const projectTypes = [
    { value: 'new-website', label: 'New Website', description: 'Build a brand new website from scratch' },
    { value: 'redesign', label: 'Website Redesign', description: 'Modernize your existing website' },
    { value: 'landing-page', label: 'Landing Page', description: 'Single page for marketing campaigns' },
  ];

  const businessTypes = [
    'Restaurant/Food Service',
    'Healthcare/Medical',
    'Professional Services',
    'Real Estate',
    'Fitness/Wellness',
    'Education',
    'Automotive',
    'Non-Profit',
    'Other',
  ];

  const timelines = [
    'ASAP (Rush delivery)',
    '1-2 weeks',
    '2-4 weeks',
    '1-2 months',
    'No rush',
  ];

  const budgets = [
    'Under $1,000',
    '$1,000 - $2,000',
    '$2,000 - $5,000',
    '$5,000+',
    'Need consultation',
  ];

  const features = [
    'Appointment Booking',
    'Contact Forms',
    'Photo Gallery',
    'Blog/News Section',
    'Customer Reviews',
    'Social Media Integration',
    'Live Chat',
    'Email Newsletter',
    'Search Functionality',
    'Multi-language Support',
    'Member Login Area',
  ];

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Phone',
      details: ['(734) 577-7138', 'Mon-Fri: 9AM-6PM EST'],
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      details: ['everymanswebsitedesign@gmail.com', 'Response within 24 hours'],
    },
    {
      icon: ClockIcon,
      title: 'Business Hours',
      details: ['Monday - Friday: 9AM-6PM EST', 'Saturday: 10AM-4PM EST'],
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Submit Project Details',
      description: 'Tell us about your business and project requirements',
    },
    {
      step: '02',
      title: 'Free Consultation',
      description: 'We will schedule a call to discuss your needs and provide a custom quote',
    },
    {
      step: '03',
      title: 'Project Kickoff',
      description: 'Once approved, we start your website and deliver in 5-7 days',
    },
  ];

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
            We have received your project details and will get back to you within 24 hours 
            with a custom quote and next steps.
          </p>
          <div className="card p-4 text-left">
            <h3 className="font-semibold mb-2">What happens next?</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• We will review your project requirements</li>
              <li>• Prepare a custom quote and timeline</li>
              <li>• Schedule a consultation call</li>
              <li>• Send you a detailed project proposal</li>
            </ul>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="hero-gradient py-16">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Let's Build Your <span className="gradient-text">Dream Website</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Ready to transform your business online? Tell us about your project 
              and get a custom quote within 24 hours.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center text-green-600">
                <CheckIcon className="w-5 h-5 mr-2" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center text-blue-600">
                <ClockIcon className="w-5 h-5 mr-2" />
                <span>24-hour response</span>
              </div>
              <div className="flex items-center text-purple-600">
                <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
                <span>Custom quote</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-heading font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card"
              >
                <h2 className="text-2xl font-heading font-bold mb-6">
                  Project Details
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Project Type */}
                  <div>
                    <label className="block text-sm font-medium mb-3">
                      What type of project do you need? *
                    </label>
                    <div className="grid lg:grid-cols-2 gap-3">
                      {projectTypes.map((type) => (
                        <label
                          key={type.value}
                          className={`cursor-pointer border-2 rounded-lg p-4 transition-all ${
                            formData.projectType === type.value
                              ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                              : 'border-gray-200 dark:border-gray-700 hover:border-primary-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="projectType"
                            value={type.value}
                            checked={formData.projectType === type.value}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className="font-semibold">{type.label}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {type.description}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="grid lg:grid-cols-2 gap-4">
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
                        onBlur={handleBlur}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent bg-white dark:bg-gray-700 transition-colors ${
                          errors.name && touched.name
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500'
                        }`}
                        placeholder="John Smith"
                      />
                      {errors.name && touched.name && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                      )}
                    </div>
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
                        onBlur={handleBlur}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent bg-white dark:bg-gray-700 transition-colors ${
                          errors.email && touched.email
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500'
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && touched.email && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent bg-white dark:bg-gray-700 transition-colors ${
                          errors.phone && touched.phone
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500'
                        }`}
                        placeholder="(734) 577-7138"
                      />
                      {errors.phone && touched.phone && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phone}</p>
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
                        onBlur={handleBlur}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent bg-white dark:bg-gray-700 transition-colors ${
                          errors.businessName && touched.businessName
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500'
                        }`}
                        placeholder="Your Business Name"
                      />
                      {errors.businessName && touched.businessName && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.businessName}</p>
                      )}
                    </div>
                  </div>

                  {/* Business Details */}
                  <div className="grid lg:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="businessType" className="block text-sm font-medium mb-2">
                        Business Type *
                      </label>
                      <select
                        id="businessType"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent bg-white dark:bg-gray-700 transition-colors ${
                          errors.businessType && touched.businessType
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500'
                        }`}
                      >
                        <option value="">Select your industry</option>
                        {businessTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.businessType && touched.businessType && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.businessType}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                        Preferred Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((timeline) => (
                          <option key={timeline} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700"
                    >
                      <option value="">Select budget range</option>
                      {budgets.map((budget) => (
                        <option key={budget} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>

                  {/* Features */}
                  <div>
                    <label className="block text-sm font-medium mb-3">
                      What features do you need? (Select all that apply)
                    </label>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {features.map((feature) => (
                        <label
                          key={feature}
                          className="flex items-center cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={formData.features.includes(feature)}
                            onChange={() => handleFeatureChange(feature)}
                            className="mr-3 rounded text-primary-600 focus:ring-primary-500"
                          />
                          <span className="text-sm">{feature}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium mb-2">
                      Project Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700"
                      placeholder="Tell us more about your project, goals, and any specific requirements..."
                    />
                  </div>

                  {/* How did you hear about us */}
                  <div>
                    <label htmlFor="hearAbout" className="block text-sm font-medium mb-2">
                      How did you hear about us?
                    </label>
                    <select
                      id="hearAbout"
                      name="hearAbout"
                      value={formData.hearAbout}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700"
                    >
                      <option value="">Select an option</option>
                      <option value="google">Google Search</option>
                      <option value="social-media">Social Media</option>
                      <option value="referral">Referral from friend/colleague</option>
                      <option value="online-ad">Online Advertisement</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full text-lg py-4 transition-all duration-300 ${
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
                        Sending...
                      </div>
                    ) : (
                      'Send Project Details'
                    )}
                  </motion.button>
                  
                  {/* Form-level error display */}
                  {errors.submit && (
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                      <p className="text-red-600 dark:text-red-400 text-sm font-medium">
                        {errors.submit}
                      </p>
                    </div>
                  )}
                </form>
              </motion.div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card"
              >
                <h3 className="text-xl font-heading font-semibold mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 dark:text-gray-400 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Calendar Link */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <CalendarDaysIcon className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                <h3 className="text-lg font-heading font-semibold mb-2">
                  Prefer to Schedule a Call?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Book a free 15-minute consultation to discuss your project.
                </p>
                <a
                  href="https://calendly.com/everymanswebsitedesign/starting-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full inline-block"
                >
                  Schedule Consultation
                </a>
              </motion.div>

              {/* FAQ Link */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <h3 className="text-lg font-heading font-semibold mb-2">
                  Have Questions?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Check out our FAQ or learn more about our process.
                </p>
                <div className="space-y-2">
                  <Link to="/faq" className="btn-outline w-full text-sm inline-block">
                    View FAQ
                  </Link>
                  <Link to="/how-it-works" className="btn-outline w-full text-sm inline-block">
                    How It Works
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;