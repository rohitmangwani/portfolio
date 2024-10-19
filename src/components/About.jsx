import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="min-h-screen bg-gray-800 text-white py-20">
      <div className="container mx-auto text-center px-4">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Hello! I’m a Full Stack Developer with two years of hands-on experience in building dynamic web applications. Specializing in the MERN (MongoDB, Express.js, React, Node.js) and MEAN (MongoDB, Express.js, Angular, Node.js) stacks, I have a strong foundation in both front-end and back-end technologies. My expertise also extends to PHP, Laravel, and MySQL, allowing me to create robust server-side solutions.
        </motion.p>

        <motion.p
          className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          I am passionate about transforming complex ideas into user-friendly applications that deliver seamless experiences. My approach to development emphasizes clean code and efficient design, ensuring that every project I undertake is not only functional but also visually appealing.
        </motion.p>

        <motion.p
          className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.4 }}
        >
          Collaboration is key in my work. I thrive in team environments where I can share knowledge, gain new perspectives, and contribute to innovative solutions. I believe that the best results come from open communication and a shared vision.
        </motion.p>

        <motion.p
          className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        >
          As I continue to grow as a developer, I am eager to tackle challenging projects that push my skills and allow me to stay current with the latest technologies and trends. I’m always on the lookout for opportunities to learn and expand my horizons.
        </motion.p>

        <motion.p
          className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          Thank you for visiting my portfolio! Let’s connect and see how I can bring my skills and enthusiasm for development to your team.
        </motion.p>
      </div>
    </section>
  );
}

export default About;
