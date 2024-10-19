import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-900 shadow-lg">
    <nav className="container mx-auto p-4 flex justify-between items-center text-white">
      <div className="text-2xl font-bold">My Portfolio</div>
      <div className="hidden md:flex space-x-6">
        <a href="#about" className="hover:text-indigo-400 transition duration-300">About</a>
        <a href="#skills" className="hover:text-indigo-400 transition duration-300">Skills</a>
        <a href="#projects" className="hover:text-indigo-400 transition duration-300">Projects</a>
        <a href="#contact" className="hover:text-indigo-400 transition duration-300">Contact</a>
      </div>
      <div className="flex space-x-4">
        <a href="mailto:your-email@example.com" className="hover:text-indigo-400 transition duration-300">Email</a>
        <a href="https://github.com/rohitmangwani?tab=repositories" className="hover:text-white transition duration-300">
          <FaGithub size={24} />
        </a>
        <a  href="https://www.linkedin.com/in/rohit-mangwani-8a96246a/" className="hover:text-white transition duration-300">
          <FaLinkedin size={24} />
        </a>
        <a href="https://twitter.com" className="hover:text-white transition duration-300">
          <FaTwitter size={24} />
        </a>
      </div>
    </nav>
  </header>
  )
}

export default Header