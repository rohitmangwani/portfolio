import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter,FaMapMarkerAlt,FaPhone  } from 'react-icons/fa';
import { motion } from 'framer-motion'; 
const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      setSubmitted(true); // Simulate a successful form submission
    };
  
    return (
        <section id="contact" className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
          <div className="container mx-auto text-center px-4">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Get In Touch
            </motion.h2>
    
            <p className="text-lg text-gray-400 mb-12">
              Have a question or want to work together? Feel free to reach out!
            </p>
    
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* Contact Form */}
              <motion.div
                className="relative bg-gray-800 p-8 rounded-lg shadow-2xl transition duration-300 hover:shadow-3xl border border-gray-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {!submitted ? (
                  <form onSubmit={handleSubmit}>
                    <div className="relative mb-6">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder=" "
                        className="peer w-full px-4 py-3 bg-gray-700 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                        required
                      />
                      <label className="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-placeholder-shown:text-gray-400 peer-focus:top-[-10px] peer-focus:left-2 peer-focus:text-indigo-500 text-sm bg-gray-800 px-1">
                        Your Name
                      </label>
                    </div>
    
                    <div className="relative mb-6">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder=" "
                        className="peer w-full px-4 py-3 bg-gray-700 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                        required
                      />
                      <label className="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-placeholder-shown:text-gray-400 peer-focus:top-[-10px] peer-focus:left-2 peer-focus:text-indigo-500 text-sm bg-gray-800 px-1">
                        Your Email
                      </label>
                    </div>
    
                    <div className="relative mb-6">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder=" "
                        className="peer w-full px-4 py-3 bg-gray-700 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                        rows="5"
                        required
                      ></textarea>
                      <label className="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-placeholder-shown:text-gray-400 peer-focus:top-[-10px] peer-focus:left-2 peer-focus:text-indigo-500 text-sm bg-gray-800 px-1">
                        Your Message
                      </label>
                    </div>
    
                    <motion.button
                      type="submit"
                      className="w-full py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition duration-300 relative"
                      whileHover={{ scale: 1.05 }}
                    >
                      Send Message
                    </motion.button>
                  </form>
                ) : (
                  <div className="text-xl text-green-500">
                    Thank you! Your message has been sent.
                  </div>
                )}
              </motion.div>
    
              {/* Social Media Links */}
              <motion.div
                className="flex flex-col items-center lg:items-start space-y-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold">Connect with Me</h3>
                <div className="flex space-x-6">
                  <motion.a
                    href="https://github.com/rohitmangwani?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition duration-300"
                    whileHover={{ scale: 1.1, color: '#ffffff' }}
                  >
                    <FaGithub size={32} />
                  </motion.a>
                  <motion.a
                    href="q https://www.linkedin.com/in/rohit-mangwani-8a96246a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition duration-300"
                    whileHover={{ scale: 1.1, color: '#ffffff' }}
                  >
                    <FaLinkedin size={32} />
                  </motion.a>
                            <a href="tel:+919098396979" className="flex items-center text-indigo-500 hover:text-indigo-400">
                        <FaPhone className="mr-2" /> {/* Added phone icon */}
                        Phone: +91 9098396979
                    </a>

                    {/* Location */}
                    <p className="text-gray-400 flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-indigo-500" />
                        <span>Location: Hyderabad, Telangana</span>
                    </p>
                </div>
    
                <div className="text-gray-400 mt-4">
                  <p className="mb-2">or send an email:</p>
                  <a href="mailto:your-email@example.com" className="text-indigo-500 hover:underline">
                    ro.mangwani@gmail.com
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      );
  };
  

export default Contact