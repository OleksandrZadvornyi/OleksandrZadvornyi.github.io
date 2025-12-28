import { useState } from 'react';
import { LuMenu, LuX, LuSun, LuMoon } from "react-icons/lu";

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Research', href: '#publications' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md transition-colors duration-300 bg-white/80 border-slate-200 dark:bg-slate-900/80 dark:border-slate-800 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="shrink-0">
            <a href="#" className="text-xl font-bold tracking-wider text-slate-900 dark:text-white">
              OZ<span className="text-blue-500">.</span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 text-slate-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
                >
                  {link.name}
                </a>
              ))}

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg transition-colors hover:bg-slate-100 dark:hover:bg-white dark:bg-slate-800 shadow-md text-slate-600 dark:text-gray-300"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <LuSun size={20} /> : <LuMoon size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Mobile Theme Toggle */}
            <button onClick={toggleTheme} className="text-slate-600 dark:text-gray-400">
              {theme === 'dark' ? <LuSun size={20} /> : <LuMoon size={20} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-slate-900"
            >
              {isOpen ? <LuX size={24} /> : <LuMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;