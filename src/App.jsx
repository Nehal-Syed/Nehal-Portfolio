import { useEffect } from 'react';
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

export default function App() {
  // Theme initialization and toggle functionality
  useEffect(() => {
    // Check for saved theme or prefer-color-scheme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const handleThemeToggle = () => {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem(
        'theme', 
        document.documentElement.classList.contains('dark') ? 'dark' : 'light'
      );
    };

    if (themeToggle) {
      themeToggle.addEventListener('click', handleThemeToggle);
    }

    // Cleanup
    return () => {
      if (themeToggle) {
        themeToggle.removeEventListener('click', handleThemeToggle);
      }
    };
  }, []);

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('href').substring(1);
        const element = document.getElementById(id);
        if (element) {
          const offset = 80; // Adjust for navbar height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <Navbar />
      
      {/* Add padding-top for navbar spacing */}
      <div className="pt-20">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}