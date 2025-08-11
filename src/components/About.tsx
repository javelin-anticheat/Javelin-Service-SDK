import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, Lightbulb, Award, Globe } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Every decision we make prioritizes the security and integrity of the gaming experience."
    },
    {
      icon: Target,
      title: "Precision Technology",
      description: "Our advanced algorithms deliver pinpoint accuracy in detecting and preventing cheating attempts."
    },
    {
      icon: Users,
      title: "Player-Centric",
      description: "We design our solutions with the player experience at the forefront of every innovation."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously pushing the boundaries of what's possible in anti-cheat technology."
    }
  ];

  const milestones = [
    { year: "2020", event: "EA Javelin Anticheat project initiated" },
    { year: "2021", event: "First successful deployment in EA Sports titles" },
    { year: "2022", event: "Expanded to cover 25+ game titles" },
    { year: "2023", event: "AI-powered detection system launched" },
    { year: "2024", event: "100M+ players protected milestone reached" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* About Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">EA Javelin</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            EA Javelin Anticheat is EA's latest anti-cheat technology designed to provide the safest gaming 
            experience for players and fans worldwide. Our mission extends beyond traditional cheat prevention—we're 
            pioneering the future of fair play through innovative technology and unwavering commitment to integrity.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-black/50 backdrop-blur-sm border border-red-900/30 rounded-2xl p-8 lg:p-12 mb-16"
        >
          <div className="text-center mb-8">
            <Globe className="w-16 h-16 text-red-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
          </div>
          <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            To foster a gaming environment where skill and sportsmanship are the only paths to victory. 
            EA Javelin Anticheat represents our unwavering commitment to fair play and integrity, ensuring 
            that every player can compete on a level playing field where talent and dedication determine success.
          </p>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:from-red-500/30 group-hover:to-red-600/30 transition-all duration-300 border border-red-500/20">
                  <value.icon className="w-10 h-10 text-red-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">{value.title}</h4>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Journey</h3>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center mb-8 last:mb-0"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center border border-cyan-500/30">
                  <span className="text-red-400 font-bold text-lg">{milestone.year}</span>
                </div>
                <div className="ml-8 flex-grow">
                  <div className="bg-black/50 backdrop-blur-sm border border-red-900/30 rounded-lg p-6">
                    <p className="text-gray-300 text-lg">{milestone.event}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Team Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">Leadership Excellence</h3>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            Our leadership team combines decades of experience in gaming security, artificial intelligence, 
            and software engineering to deliver unparalleled anti-cheat solutions.
          </p>
          <div className="flex justify-center">
            <Award className="w-16 h-16 text-red-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;