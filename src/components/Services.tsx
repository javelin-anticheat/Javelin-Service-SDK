import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Eye, Brain, Lock, Cpu } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Shield,
      title: "Real-Time Protection",
      description: "Advanced machine learning algorithms detect and prevent cheating attempts in real-time, ensuring fair gameplay for all users.",
      features: ["Instant threat detection", "Automated response system", "Zero-delay protection"]
    },
    {
      icon: Brain,
      title: "AI-Powered Detection",
      description: "Our sophisticated AI system learns and adapts to new cheating methods, staying ahead of evolving threats.",
      features: ["Machine learning algorithms", "Pattern recognition", "Behavioral analysis"]
    },
    {
      icon: Eye,
      title: "Behavioral Analysis",
      description: "Monitor player behavior patterns to identify suspicious activities and maintain game integrity.",
      features: ["Player movement tracking", "Statistical anomaly detection", "Gameplay pattern analysis"]
    },
    {
      icon: Zap,
      title: "Lightning Fast Response",
      description: "Sub-millisecond response times ensure cheaters are stopped before they can impact the game experience.",
      features: ["<1ms detection time", "Instant ban execution", "Real-time notifications"]
    },
    {
      icon: Lock,
      title: "Secure Infrastructure",
      description: "Enterprise-grade security architecture protects our anticheat systems from tampering and exploitation.",
      features: ["End-to-end encryption", "Secure boot verification", "Hardware-level protection"]
    },
    {
      icon: Cpu,
      title: "Minimal Performance Impact",
      description: "Optimized algorithms ensure maximum protection with minimal impact on game performance and system resources.",
      features: ["Low CPU usage", "Memory efficient", "Optimized for gaming"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="services" className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive anticheat solutions powered by cutting-edge technology and innovative algorithms
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black/50 backdrop-blur-sm border border-red-900/30 rounded-xl p-8 hover:border-red-500/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-red-500/30 group-hover:to-red-600/30 transition-all duration-300 border border-red-500/20">
                <service.icon className="w-8 h-8 text-red-400" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-400">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">Built with Enterprise Technology</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Machine Learning", desc: "Advanced AI algorithms" },
              { name: "Cloud Computing", desc: "Scalable infrastructure" },
              { name: "Real-time Processing", desc: "Instant analysis" },
              { name: "Behavioral Analytics", desc: "Pattern recognition" }
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-red-500 rounded-full"></div>
                </div>
                <h4 className="text-white font-semibold mb-2">{tech.name}</h4>
                <p className="text-gray-400 text-sm">{tech.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;