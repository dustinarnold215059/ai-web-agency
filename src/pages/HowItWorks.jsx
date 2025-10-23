import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
  ClockIcon,
  CheckIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';

const HowItWorks = () => {
  // Helper function to get color classes for Tailwind v4 compatibility
  const getColorClasses = (color) => {
    switch (color) {
      case 'primary':
        return {
          iconBg: 'bg-primary-100 dark:bg-primary-900',
          iconText: 'text-primary-600 dark:text-primary-400',
          durationText: 'text-primary-600 dark:text-primary-400',
          visualBg: 'bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800',
          numberText: 'text-primary-300 dark:text-primary-700',
          largeIcon: 'text-primary-600 dark:text-primary-400',
        };
      case 'secondary':
        return {
          iconBg: 'bg-secondary-100 dark:bg-secondary-900',
          iconText: 'text-secondary-600 dark:text-secondary-400',
          durationText: 'text-secondary-600 dark:text-secondary-400',
          visualBg: 'bg-gradient-to-br from-secondary-100 to-secondary-200 dark:from-secondary-900 dark:to-secondary-800',
          numberText: 'text-secondary-300 dark:text-secondary-700',
          largeIcon: 'text-secondary-600 dark:text-secondary-400',
        };
      case 'accent':
        return {
          iconBg: 'bg-accent-100 dark:bg-accent-900',
          iconText: 'text-accent-600 dark:text-accent-400',
          durationText: 'text-accent-600 dark:text-accent-400',
          visualBg: 'bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-900 dark:to-accent-800',
          numberText: 'text-accent-300 dark:text-accent-700',
          largeIcon: 'text-accent-600 dark:text-accent-400',
        };
      default:
        return {
          iconBg: 'bg-primary-100 dark:bg-primary-900',
          iconText: 'text-primary-600 dark:text-primary-400',
          durationText: 'text-primary-600 dark:text-primary-400',
          visualBg: 'bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800',
          numberText: 'text-primary-300 dark:text-primary-700',
          largeIcon: 'text-primary-600 dark:text-primary-400',
        };
    }
  };

  const steps = [
    {
      number: '01',
      title: 'Discovery & Consultation',
      icon: ChatBubbleLeftRightIcon,
      duration: 'Day 1',
      description: 'We start with a detailed consultation to understand your business, goals, target audience, and design preferences.',
      details: [
        'Business goals and objectives discussion',
        'Target audience analysis',
        'Brand guidelines and preferences',
        'Content and functionality requirements',
        'Competitor analysis and inspiration',
      ],
      color: 'primary',
    },
    {
      number: '02',
      title: 'AI Design Generation',
      icon: SparklesIcon,
      duration: 'Days 2-3',
      description: 'Our advanced AI creates multiple design concepts tailored specifically to your industry and brand identity.',
      details: [
        'AI analyzes your industry best practices',
        'Multiple design variations generated',
        'Mobile-responsive layouts created',
        'Color schemes and typography optimized',
        'Industry-specific features integrated',
      ],
      color: 'secondary',
    },
    {
      number: '03',
      title: 'Human Refinement',
      icon: PaintBrushIcon,
      duration: 'Days 4-5',
      description: 'Our design experts review and refine the AI-generated concepts, ensuring quality and adding human creativity.',
      details: [
        'Professional design review and enhancement',
        'User experience optimization',
        'Brand consistency verification',
        'Content integration and optimization',
        'Performance and accessibility checks',
      ],
      color: 'accent',
    },
    {
      number: '04',
      title: 'Review & Launch',
      icon: RocketLaunchIcon,
      duration: 'Days 6-7',
      description: 'Final review with you, any last-minute adjustments, and then we launch your website to the world.',
      details: [
        'Client review and feedback session',
        'Final adjustments and refinements',
        'Quality assurance testing',
        'SEO optimization and setup',
        'Website launch and handover',
      ],
      color: 'primary',
    },
  ];

  const comparison = {
    traditional: {
      title: 'Traditional Agencies',
      timeline: '2-3 Months',
      cost: '$5,000 - $15,000',
      process: [
        'Initial consultation (Week 1)',
        'Proposal and contracts (Week 2)',
        'Design mockups (Weeks 3-6)',
        'Multiple revision rounds (Weeks 7-10)',
        'Development phase (Weeks 11-12)',
        'Testing and launch (Week 13)',
      ],
      pros: ['Fully custom design', 'Dedicated team'],
      cons: ['Very expensive', 'Long timeline', 'Multiple stakeholders', 'Scope creep'],
    },
    aiPowered: {
      title: 'Every Man\'s Website Design Process',
      timeline: '5-7 Days',
      cost: '$997 - $1,497',
      process: [
        'Consultation & discovery (Day 1)',
        'AI design generation (Days 2-3)',
        'Human refinement (Days 4-5)',
        'Review & launch (Days 6-7)',
      ],
      pros: ['Lightning fast delivery', 'Affordable pricing', 'AI + Human expertise', 'Guaranteed timeline', 'Fully custom design', 'Dedicated team'],
      cons: ['Less customization than $15k projects'],
    },
  };

  const faqs = [
    {
      question: 'How can you deliver websites so quickly?',
      answer: 'Our AI technology can generate design concepts in hours instead of weeks. Combined with our streamlined process and expert team, we eliminate the typical delays of traditional web design.'
    },
    {
      question: 'Will my website look generic or templated?',
      answer: 'Not at all! Our AI creates custom designs based on your specific industry, brand, and requirements. Each website is unique and tailored to your business needs.'
    },
    {
      question: 'What if I need changes after the website is complete?',
      answer: 'We include one round of minor revisions. For major changes, we offer maintenance packages and can discuss additional modifications.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! We offer various maintenance and support packages to keep your website updated, secure, and performing optimally.'
    },
    {
      question: 'How do you ensure the quality matches expensive agencies?',
      answer: 'Our AI is trained on thousands of high-performing websites, and every design is reviewed by our expert team. We maintain the same quality standards at a fraction of the cost.'
    },
  ];

  const timeline = [
    { time: 'Day 1', activity: 'Consultation Call', status: 'discovery' },
    { time: 'Day 2', activity: 'AI Design Generation Begins', status: 'design' },
    { time: 'Day 3', activity: 'Design Concepts Ready', status: 'design' },
    { time: 'Day 4', activity: 'Human Review & Refinement', status: 'refinement' },
    { time: 'Day 5', activity: 'Content Integration', status: 'refinement' },
    { time: 'Day 6', activity: 'Client Review & Feedback', status: 'launch' },
    { time: 'Day 7', activity: 'Final Adjustments & Launch', status: 'launch' },
  ];

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
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              How Our <span className="gradient-text">AI-Powered Process</span> Works
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              From consultation to launch in just 5-7 days. See how we combine 
              AI technology with human expertise to deliver exceptional results.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center text-green-600">
                <ClockIcon className="w-5 h-5 mr-2" />
                <span>5-7 Day Delivery</span>
              </div>
              <div className="flex items-center text-blue-600">
                <CheckIcon className="w-5 h-5 mr-2" />
                <span>Guaranteed Timeline</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {steps.map((step, index) => {
              const colorClasses = getColorClasses(step.color);
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full ${colorClasses.iconBg} flex items-center justify-center`}>
                        <step.icon className={`w-6 h-6 ${colorClasses.iconText}`} />
                      </div>
                      <div>
                        <span className={`${colorClasses.durationText} font-semibold text-sm`}>
                          {step.duration}
                        </span>
                        <h3 className="text-2xl font-heading font-bold">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <CheckIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual */}
                  <div className="flex-1 flex justify-center">
                    <div className={`w-80 h-80 rounded-2xl ${colorClasses.visualBg} flex items-center justify-center relative overflow-hidden`}>
                      <div className={`text-6xl font-bold ${colorClasses.numberText} absolute top-4 right-4`}>
                        {step.number}
                      </div>
                      <step.icon className={`w-24 h-24 ${colorClasses.largeIcon}`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              7-Day Timeline
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here's what happens each day of your website creation process.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 to-secondary-400"></div>
              
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-center mb-8"
                >
                  <div className={`w-4 h-4 rounded-full border-4 border-white dark:border-gray-900 ${
                    item.status === 'discovery' ? 'bg-primary-500' :
                    item.status === 'design' ? 'bg-secondary-500' :
                    item.status === 'refinement' ? 'bg-accent-500' :
                    'bg-green-500'
                  } relative z-10`}></div>
                  
                  <div className="ml-8 card flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-lg">{item.activity}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{item.time}</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === 'discovery' ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300' :
                        item.status === 'design' ? 'bg-secondary-100 text-secondary-700 dark:bg-secondary-900 dark:text-secondary-300' :
                        item.status === 'refinement' ? 'bg-accent-100 text-accent-700 dark:bg-accent-900 dark:text-accent-300' :
                        'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                      }`}>
                        {item.status}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Traditional vs AI-Powered Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See how our AI-powered approach compares to traditional web design agencies.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Traditional */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-600 dark:text-gray-400">
                {comparison.traditional.title}
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Timeline:</span>
                  <span className="text-red-600">{comparison.traditional.timeline}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Cost:</span>
                  <span className="text-red-600">{comparison.traditional.cost}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Process:</h4>
                <ul className="space-y-2">
                  {comparison.traditional.process.map((step, index) => (
                    <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 flex-shrink-0"></div>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-green-600 mb-2">Pros:</h5>
                  <ul className="space-y-1">
                    {comparison.traditional.pros.map((pro, index) => (
                      <li key={index} className="text-sm text-gray-600 dark:text-gray-400">• {pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-red-600 mb-2">Cons:</h5>
                  <ul className="space-y-1">
                    {comparison.traditional.cons.map((con, index) => (
                      <li key={index} className="text-sm text-gray-600 dark:text-gray-400">• {con}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* AI-Powered */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card border-2 border-primary-200 dark:border-primary-800 relative"
            >
              <div className="absolute -top-3 left-6 bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Recommended
              </div>
              
              <h3 className="text-xl font-heading font-semibold mb-4 text-primary-600 dark:text-primary-400">
                {comparison.aiPowered.title}
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Timeline:</span>
                  <span className="text-green-600 font-semibold">{comparison.aiPowered.timeline}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Cost:</span>
                  <span className="text-green-600 font-semibold">{comparison.aiPowered.cost}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Process:</h4>
                <ul className="space-y-2">
                  {comparison.aiPowered.process.map((step, index) => (
                    <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-green-600 mb-2">Pros:</h5>
                  <ul className="space-y-1">
                    {comparison.aiPowered.pros.map((pro, index) => (
                      <li key={index} className="text-sm text-gray-600 dark:text-gray-400">• {pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-orange-600 mb-2">Considerations:</h5>
                  <ul className="space-y-1">
                    {comparison.aiPowered.cons.map((con, index) => (
                      <li key={index} className="text-sm text-gray-600 dark:text-gray-400">• {con}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Common questions about our AI-powered web design process.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-start space-x-4">
                  <QuestionMarkCircleIcon className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
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
              Ready to Experience the Future of Web Design?
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Join hundreds of businesses who've chosen our AI-powered process 
              for faster, more affordable web design.
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

export default HowItWorks;