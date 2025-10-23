import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { StarIcon, ClockIcon, ShieldCheckIcon, CheckIcon } from '@heroicons/react/24/outline';
import PricingCard from '../components/pricing/PricingCard';
import ValuePropsSection from '../components/pricing/ValuePropsSection';
import { plans, valueProps, addOns, calculator } from '../data/pricingData';

const Pricing = () => {

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
              Simple, <span className="gradient-text">Transparent Pricing</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Professional websites at a fraction of traditional agency costs. 
              No hidden fees, no surprises—just exceptional value.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center text-green-600">
                <ShieldCheckIcon className="w-5 h-5 mr-2" />
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center text-blue-600">
                <ClockIcon className="w-5 h-5 mr-2" />
                <span>Delivered in 5-7 days</span>
              </div>
              <div className="flex items-center text-purple-600">
                <StarIcon className="w-5 h-5 mr-2" />
                <span>98% client satisfaction</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Propositions */}
      <ValuePropsSection valueProps={valueProps} />

      {/* Pricing Plans */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              All plans include our AI-powered design process, mobile responsiveness, 
              and professional quality. Choose based on your needs and timeline.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <PricingCard key={plan.name} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Optional Add-ons
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Enhance your website with our professional add-on services. 
              Add them to any plan or order them separately.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover-lift"
              >
                <h3 className="text-lg font-heading font-semibold mb-2">{addon.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{addon.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    ${addon.price}
                  </span>
                  <span className="text-gray-500 text-sm">/{addon.cycle}</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {addon.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="btn-outline w-full text-sm">
                  Add to Project
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Compare the Savings
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See how much you save compared to traditional web design agencies.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Traditional Agency */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card"
              >
                <h3 className="text-xl font-heading font-semibold mb-6 text-center text-gray-600">
                  Traditional Web Agency
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                    <span>Initial Design</span>
                    <span className="font-semibold">${calculator.traditionalAgency.designCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                    <span>Development</span>
                    <span className="font-semibold">${calculator.traditionalAgency.developmentCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                    <span>Timeline</span>
                    <span className="font-semibold text-red-600">{calculator.traditionalAgency.timeWeeks} weeks</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                    <span>Revision Cost</span>
                    <span className="font-semibold">${calculator.traditionalAgency.revisionCost}/round</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 text-lg font-bold">
                    <span>Total Cost</span>
                    <span className="text-red-600">
                      ${(calculator.traditionalAgency.designCost + calculator.traditionalAgency.developmentCost).toLocaleString()}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Every Man's Website Design */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card border-2 border-primary-200 dark:border-primary-800 relative"
              >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    You Save 87%!
                  </div>
                </div>
                
                <h3 className="text-xl font-heading font-semibold mb-6 text-center text-primary-600 dark:text-primary-400">
                  Every Man's Website Design
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                    <span>Design + Development</span>
                    <span className="font-semibold">${calculator.webCraftAI.designCost}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                    <span>Additional Fees</span>
                    <span className="font-semibold text-green-600">$0</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                    <span>Timeline</span>
                    <span className="font-semibold text-green-600">{calculator.webCraftAI.timeWeeks} week</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                    <span>Revision Cost</span>
                    <span className="font-semibold">${calculator.webCraftAI.revisionCost}/round</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 text-lg font-bold">
                    <span>Total Cost</span>
                    <span className="text-green-600">
                      ${calculator.webCraftAI.designCost}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Savings Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12 p-8 bg-green-50 dark:bg-green-900/20 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-2">
                You Save ${(calculator.traditionalAgency.designCost + calculator.traditionalAgency.developmentCost - calculator.webCraftAI.designCost).toLocaleString()}
              </h3>
              <p className="text-green-600 dark:text-green-400">
                And get your website {calculator.traditionalAgency.timeWeeks - calculator.webCraftAI.timeWeeks} weeks faster!
              </p>
            </motion.div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Choose your plan and get your professional website delivered in just 5-7 days. 
              30-day money-back guarantee.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link 
                to="/portfolio" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;