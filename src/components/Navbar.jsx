import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 transition-all duration-500 ease-in-out bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#" 
            className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent transition-all duration-500 hover:scale-105 hover:from-blue-700 hover:to-purple-700 dark:hover:from-cyan-300 dark:hover:to-blue-400"
            onClick={closeMenu}
          >
            Nehal Syed
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a 
              href="#about" 
              className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-300 group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#skills" 
              className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-300 group"
            >
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#projects" 
              className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-300 group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#experience" 
              className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-300 group"
            >
              Experience
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#contact" 
              className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-300 group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button 
              id="themeToggle"
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:rotate-12"
              aria-label="Toggle theme"
            >
              <i className="fas fa-sun dark:hidden"></i>
              <i className="fas fa-moon hidden dark:block"></i>
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <i className="fas fa-times text-xl"></i>
              ) : (
                <i className="fas fa-bars text-xl"></i>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col p-4 space-y-4">
            <a 
              href="#about" 
              className="py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 flex items-center"
              onClick={closeMenu}
            >
              <i className="fas fa-user mr-3"></i>
              About
            </a>
            <a 
              href="#skills" 
              className="py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 flex items-center"
              onClick={closeMenu}
            >
              <i className="fas fa-code mr-3"></i>
              Skills
            </a>
            <a 
              href="#projects" 
              className="py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 flex items-center"
              onClick={closeMenu}
            >
              <i className="fas fa-briefcase mr-3"></i>
              Projects
            </a>
            <a 
              href="#experience" 
              className="py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 flex items-center"
              onClick={closeMenu}
            >
              <i className="fas fa-timeline mr-3"></i>
              Experience
            </a>
            <a 
              href="#contact" 
              className="py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 flex items-center"
              onClick={closeMenu}
            >
              <i className="fas fa-envelope mr-3"></i>
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 dark:bg-black/40 z-40 md:hidden"
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
};

export default Navbar;