import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8">
    <div className="container mx-auto text-center">
      <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      <div className="flex justify-center space-x-6 mt-4">
        <a href="https://github.com/rohitmangwani?tab=repositories" className="hover:text-white">
          <FaGithub size={24} />
        </a>
        <a  href="https://www.linkedin.com/in/rohit-mangwani-8a96246a/" className="hover:text-white">
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  </footer>
  )
}

export default Footer