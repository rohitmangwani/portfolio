import React from 'react'
import { FaReact, FaNodeJs, FaDatabase, FaFileCode, FaHtml5, FaPhp } from 'react-icons/fa';
import { SiLaravel, SiMysql, SiAngular } from 'react-icons/si';
import { motion } from 'framer-motion';

const skillsData = [
    { name: 'React', icon: <FaReact size={40} />, description: 'A JavaScript library for building user interfaces.' },
    { name: 'Node.js', icon: <FaNodeJs size={40} />, description: 'JavaScript runtime built on Chrome’s V8 JavaScript engine.' },
    { name: 'MongoDB', icon: <FaDatabase size={40} />, description: 'NoSQL database for modern applications.' },
    { name: 'CSS', icon: <FaFileCode size={40} />, description: 'Style sheet language for styling web pages.' },
    { name: 'HTML5', icon: <FaHtml5 size={40} />, description: 'Markup language for creating web pages.' },
    { name: 'PHP', icon: <FaPhp size={40} />, description: 'A popular general-purpose scripting language that is especially suited to web development.' },
    { name: 'Laravel', icon: <SiLaravel size={40} />, description: 'A PHP framework for web artisans.' },
    { name: 'MySQL', icon: <SiMysql size={40} />, description: 'An open-source relational database management system.' },
    { name: 'Angular', icon: <SiAngular size={40} />, description: 'A platform for building mobile and desktop web applications.' },
  ];
  
  
  const Skills = () => {
    return (
      <section id="skills" className="min-h-screen bg-gray-900 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Skills
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400 mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Here are some of the technologies I've worked with:
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {skillsData.map((skill) => (
              <motion.div
                key={skill.name}
                className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-center mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default Skills