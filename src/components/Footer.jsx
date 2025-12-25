import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Oleksandr Zadvornyi. All rights reserved.
        </div>

        <div className="text-gray-500 text-sm flex items-center gap-2">
          <span>Built with</span>
          <span className="text-blue-400 font-semibold">React</span>
          <span>&</span>
          <span className="text-teal-400 font-semibold">Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;