import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Globe, Award } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    {
      icon: Globe,
      number: "50+",
      label: "Games Protected",
      description: "Across multiple platforms and genres"
    },
    {
      icon: Users,
      number: "100M+",
      label: "Players Secured",
      description: "Safe gaming experience delivered"
    },
    {
      icon: TrendingUp,
      number: "99.9%",
      label: "Detection Accuracy",
      description: "Industry-leading precision rate"
    },
    {
      icon: Award,
      number: "24/7",
      label: "Protection Active",
      description: "Continuous monitoring and defense"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Millions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our numbers speak for themselves - delivering unmatched protection and reliability
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:from-red-500/30 group-hover:to-red-600/30 transition-all duration-300 border border-red-500/20">
                <stat.icon className="w-10 h-10 text-red-400" />
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-bold text-white mb-2"
              >
                {stat.number}
              </motion.div>
              
              <h3 className="text-xl font-semibold text-red-400 mb-2">{stat.label}</h3>
              <p className="text-gray-400">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;