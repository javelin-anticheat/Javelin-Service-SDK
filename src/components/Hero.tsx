import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Users, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-red-500/10 border border-red-500/30 rounded-full mb-8"
            >
              <Shield className="w-5 h-5 text-red-400 mr-2" />
              <span className="text-red-300 font-medium">Next-Generation Anticheat Technology</span>
            </motion.div>

            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              EA Javelin
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                Anticheat
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              EA Javelin Anticheat is EA's latest anti-cheat technology designed to provide the safest gaming 
              experience for players and fans worldwide. We're not just preventing cheats—we're building the 
              future of fair play with cutting-edge innovation and uncompromising integrity.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-red-500/25">
                Explore Our Technology
              </button>
              <button className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-red-500 hover:text-red-400 transition-all duration-300">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {[
              { icon: Shield, label: 'Games Protected', value: '50+' },
              { icon: Users, label: 'Players Secured', value: '100M+' },
              { icon: Zap, label: 'Detection Speed', value: '<1ms' },
              { icon: Award, label: 'Accuracy Rate', value: '99.9%' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-red-500/20">
                  <stat.icon className="w-8 h-8 text-red-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Executive Quotes */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="bg-black/50 backdrop-blur-sm border border-red-900/30 rounded-xl p-8">
              <blockquote className="text-gray-300 text-lg mb-6 italic">
                "Our mission is to foster a gaming environment where skill and sportsmanship are the only 
                paths to victory. EA Javelin Anticheat is a testament to our commitment to fair play and integrity."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">EM</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Elise Murphy</div>
                  <div className="text-gray-400">Head of Game Security</div>
                </div>
              </div>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-red-900/30 rounded-xl p-8">
              <blockquote className="text-gray-300 text-lg mb-6 italic">
                "With EA Javelin Anticheat, we are not just reacting to cheating attempts; we are proactively 
                creating a safe space where players can trust the fairness of their gaming experiences."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">AW</span>
                </div>
                <div>
                  <div className="text-white font-semibold">AC Ward</div>
                  <div className="text-gray-400">Director of Anticheat Engineering</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;