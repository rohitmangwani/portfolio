import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa'; // Import icon from react-icons

const projects = [
  {
    title: "Mechanical Franchise Distribution",
    description: "Developed an application to manage mechanical shop franchises, optimizing operations with real-time spare parts monitoring, performance tracking, and sales auditing. Key features include inventory management, customer reviews, and shop performance analysis, streamlining franchise operations, ensuring timely restocking, and enabling data-driven decision-making to foster business growth.",
    link: "#"
  },
  {
    title: "Mechanical Franchise Distribution",
    description: "Developed an application to manage mechanical shop franchises, optimizing operations with real-time spare parts monitoring, performance tracking, and sales auditing. Key features include inventory management, customer reviews, and shop performance analysis, streamlining franchise operations, ensuring timely restocking, and enabling data-driven decision-making to foster business growth.",
    link: "#"
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a 
                href={project.link} 
                className="flex items-center text-indigo-500 mt-4 transition duration-300 hover:text-indigo-400"
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Project <FaExternalLinkAlt className="ml-2" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
