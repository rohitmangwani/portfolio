import React from 'react'
import { motion } from 'framer-motion';
function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col justify-center items-center text-center px-4">
    <motion.h1
      className="text-5xl sm:text-6xl font-bold"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Hello, I'm <span className="text-indigo-500">Rohit Mangwani</span>
    </motion.h1>

    <motion.h2
      className="text-3xl sm:text-4xl text-gray-400 mt-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      A Full Stack Developer
    </motion.h2>

    <motion.div
      className="flex space-x-4 mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
    >
      <a href="#projects" className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition duration-300">
        View Projects
      </a>
      <a href="#contact" className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition duration-300">
        Contact Me
      </a>
    </motion.div>
  </section>
  )
}

export default Hero