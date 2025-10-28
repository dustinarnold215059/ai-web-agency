import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  RocketLaunchIcon,
  HeartIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  UsersIcon,
  SparklesIcon,
  TrophyIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const About = () => {
  const values = [
    {
      icon: RocketLaunchIcon,
      title: 'Innovation First',
      description: 'We leverage cutting-edge AI technology to revolutionize web design, making professional websites accessible to every small business.',
    },
    {
      icon: HeartIcon,
      title: 'Small Business Focus',
      description: 'We understand the unique challenges small businesses face. Every solution we create is designed with your success in mind.',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Quality Guaranteed',
      description: 'Our commitment to excellence means every website meets our high standards. We stand behind our work with a 30-day guarantee.',
    },
    {
      icon: ClockIcon,
      title: 'Speed & Efficiency',
      description: 'Time is money for small businesses. Our AI-powered process delivers professional results in days, not months.',
    },
  ];

  const team = [
    {
      name: 'Dustin Arnold',
      role: 'Founder & CEO & Lead Designer',
      image: '👨‍💼',
      bio: 'Founder of Everyman\'s Website Design with a passion for helping small businesses succeed online through innovative AI-powered web design solutions.',
      expertise: ['Business Strategy', 'Web Design', 'AI Technology', 'Small Business Growth'],
    },
    {
      name: 'Maria Arnold',
      role: 'Customer Success',
      image: '🤝',
      bio: 'Dedicated to ensuring every client has an amazing experience. Manages client relationships and ensures project success.',
      expertise: ['Client Relations', 'Project Management', 'Customer Support'],
    },
  ];

  const stats = [
    { number: '10', label: 'Websites Created', description: 'Successful projects delivered' },
    { number: '98%', label: 'Client Satisfaction', description: 'Happy customers' },
    { number: '6.2', label: 'Avg. Delivery Days', description: 'Lightning fast turnaround' },
    { number: '87%', label: 'Cost Savings', description: 'Compared to traditional agencies' },
  ];

  const timeline = [
    {
      year: '2025',
      title: 'The Vision',
      description: 'Founded Everyman\'s Website Design with the mission to make professional web design accessible to small businesses through AI technology.',
      milestone: 'Company Founded',
    },
    {
      year: '2025',
      title: 'AI-Powered Development',
      description: 'Leveraged Claude Code for website development, combining AI efficiency with human creativity to deliver exceptional results.',
      milestone: 'Claude Code Integration',
    },
    {
      year: '2025',
      title: 'Building Excellence',
      description: 'Establishing our reputation for quality, speed, and affordability in web design for small businesses.',
      milestone: 'Growing & Serving',
    },
    {
      year: '2025',
      title: 'Expanding Reach',
      description: 'Continuing to refine our AI-powered process with a focus on serving small businesses in the Metro Detroit area and beyond.',
      milestone: 'Metro Detroit Focus',
    },
  ];

  const techStack = [
    'React & Modern JavaScript',
    'AI/ML Design Generation',
    'Cloud Infrastructure',
    'Advanced SEO Tools',
    'Performance Optimization',
    'Security Best Practices',
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Empowering Small Businesses with{' '}
                <span className="gradient-text">AI-Powered Design</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We believe every small business deserves a professional website 
                that helps them grow. Our AI technology makes this possible at 
                a fraction of traditional costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center sm:justify-start">
                <Link to="/contact" className="btn-primary w-full sm:w-auto text-center">
                  Start Your Project
                </Link>
                <Link to="/how-it-works" className="btn-outline w-full sm:w-auto text-center">
                  Learn Our Process
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="card p-4 hover-lift">
                    <RocketLaunchIcon className="w-8 h-8 text-primary-600 mb-2" />
                    <h3 className="font-semibold text-sm">Innovation</h3>
                  </div>
                  <div className="card p-4 hover-lift">
                    <HeartIcon className="w-8 h-8 text-red-500 mb-2" />
                    <h3 className="font-semibold text-sm">Small Business Focus</h3>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="card p-4 hover-lift">
                    <ShieldCheckIcon className="w-8 h-8 text-green-500 mb-2" />
                    <h3 className="font-semibold text-sm">Quality Guaranteed</h3>
                  </div>
                  <div className="card p-4 hover-lift">
                    <ClockIcon className="w-8 h-8 text-blue-500 mb-2" />
                    <h3 className="font-semibold text-sm">Fast Delivery</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text">
                  {stat.number}
                </div>
                <div className="font-semibold text-gray-800 dark:text-gray-200">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We are driven by the belief that every small business should have access 
              to professional web design that helps them compete and grow online.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover-lift"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 dark:bg-primary-900 rounded-2xl flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The passionate people behind Every Man's Website Design, dedicated to helping 
              small businesses succeed online.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover-lift"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-lg font-heading font-semibold mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>
                <div className="space-y-1">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded text-xs mr-1 mb-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From idea to industry leader - the story of how we're transforming 
              web design for small businesses.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 to-secondary-400"></div>
              
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-start mb-12"
                >
                  <div className="w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-gray-900 relative z-10"></div>
                  
                  <div className="ml-8 card flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-primary-600 dark:text-primary-400 font-bold">
                        {item.year}
                      </span>
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                        {item.milestone}
                      </span>
                    </div>
                    <h3 className="text-lg font-heading font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Technology
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We use cutting-edge technology and industry best practices to 
              deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover-lift"
              >
                <SparklesIcon className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
                <h3 className="font-semibold">{tech}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-primary-600 dark:bg-primary-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Why Small Businesses Choose Every Man's Website Design
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
              <div className="text-center">
                <TrophyIcon className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-lg font-semibold mb-2">Industry Leading</h3>
                <p className="text-primary-100">First to market with AI-powered web design for small businesses</p>
              </div>
              
              <div className="text-center">
                <UsersIcon className="w-12 h-12 mx-auto mb-4 text-primary-200" />
                <h3 className="text-lg font-semibold mb-2">Small Business Focused</h3>
                <p className="text-primary-100">Built specifically for small business needs and budgets</p>
              </div>
              
              <div className="text-center">
                <LightBulbIcon className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                <h3 className="text-lg font-semibold mb-2">Innovative Technology</h3>
                <p className="text-primary-100">Proprietary AI technology that delivers professional results</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-secondary-600 to-primary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Join Our Success Story?
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Let's work together to create a website that helps your business 
              grow and succeed online.
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
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;