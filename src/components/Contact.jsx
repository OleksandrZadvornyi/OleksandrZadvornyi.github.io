import { LuMail, LuMapPin, LuArrowRight } from "react-icons/lu";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Let's <span className="text-blue-500">Connect</span>
        </h2>

        <p className="text-slate-600 dark:text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          I am currently looking for new opportunities in Software Engineering and Data Science.
          Whether you have a question, a project idea or just want to say hi, feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

          {/* Email Card */}
          <a
            href="mailto:zadvornyi.alex16@gmail.com"
            className="group bg-white dark:bg-slate-800 shadow-md p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 flex flex-col items-center"
          >
            <div className="p-4 bg-blue-500/10 rounded-full text-blue-400 group-hover:bg-blue-500 group-hover:text-slate-900 dark:text-white transition-colors mb-4">
              <LuMail size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Email Me</h3>
            <p className="text-slate-600 dark:text-gray-400 text-sm mb-4">zadvornyi.alex16@gmail.com</p>
            <span className="text-blue-400 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
              Send Message <LuArrowRight size={16} />
            </span>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/oleksandr-zadvornyi-ab955131a"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white dark:bg-slate-800 shadow-md p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 flex flex-col items-center"
          >
            <div className="p-4 bg-blue-500/10 rounded-full text-blue-400 group-hover:bg-blue-500 group-hover:text-slate-900 dark:text-white transition-colors mb-4">
              <FaLinkedin size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">LinkedIn</h3>
            <p className="text-slate-600 dark:text-gray-400 text-sm mb-4">Let's connect professionally</p>
            <span className="text-blue-400 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
              View Profile <LuArrowRight size={16} />
            </span>
          </a>

        </div>

        {/* Quick Info Row */}
        <div className="flex flex-wrap justify-center gap-8 text-slate-600 dark:text-gray-400 border-t border-slate-800 pt-8">
          <div className="flex items-center gap-2">
            <LuMapPin size={18} className="text-blue-500" />
            <span>Ternopil, Ukraine</span>
          </div>
          <a
            href="https://github.com/OleksandrZadvornyi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-slate-900 dark:text-white transition-colors"
          >
            <FaGithub size={18} className="text-blue-500" />
            <span>github.com/OleksandrZadvornyi</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;