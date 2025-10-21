import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

const PricingCard = ({ plan, index }) => {
  const cardColors = {
    gray: 'border-gray-200 dark:border-gray-600',
    primary: 'border-primary-300 dark:border-primary-600 ring-2 ring-primary-500 ring-opacity-50',
    secondary: 'border-secondary-300 dark:border-secondary-600',
  };

  const buttonColors = {
    gray: 'btn-outline',
    primary: 'btn-primary',
    secondary: 'btn-secondary',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`card relative ${cardColors[plan.color]} ${
        plan.popular ? 'transform scale-105' : ''
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center">
        <h3 className="text-xl font-heading font-semibold mb-2">{plan.name}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
          {plan.description}
        </p>

        <div className="mb-6">
          <div className="flex items-center justify-center mb-2">
            <span className="text-4xl font-bold">${plan.price}</span>
            <span className="text-gray-500 dark:text-gray-400 ml-2">one-time</span>
          </div>
          {plan.originalPrice && (
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <span className="line-through">${plan.originalPrice}</span>
              <span className="text-green-600 ml-2 font-semibold">
                Save ${plan.originalPrice - plan.price}
              </span>
            </div>
          )}
        </div>

        <div className="space-y-3 mb-8 text-left">
          {plan.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-start">
              {feature.included ? (
                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5 mr-3" />
              ) : (
                <XMarkIcon className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5 mr-3" />
              )}
              <span className={`text-sm ${
                feature.included 
                  ? 'text-gray-700 dark:text-gray-300' 
                  : 'text-gray-400 dark:text-gray-500'
              }`}>
                {feature.name}
              </span>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 dark:border-gray-600 pt-6 mb-6">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="font-medium text-gray-700 dark:text-gray-300">Delivery</div>
              <div className="text-gray-500 dark:text-gray-400">{plan.deliveryTime}</div>
            </div>
            <div>
              <div className="font-medium text-gray-700 dark:text-gray-300">Revisions</div>
              <div className="text-gray-500 dark:text-gray-400">{plan.revisions}</div>
            </div>
          </div>
        </div>

        <Link
          to="/contact"
          className={`w-full block text-center ${buttonColors[plan.color]}`}
        >
          {plan.cta}
        </Link>

        <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
          {plan.support}
        </p>
      </div>
    </motion.div>
  );
};

export default PricingCard;