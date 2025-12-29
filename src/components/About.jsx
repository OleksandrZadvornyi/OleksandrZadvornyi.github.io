import { LuAward, LuBookOpen, LuTerminal } from "react-icons/lu";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden border-t border-slate-800">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Education & Stats Card */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 shadow-md/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                  <LuAward size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Education</h3>
                  <p className="text-slate-600 dark:text-gray-400 text-sm">Master of Software Engineering</p>
                  <p className="text-gray-500 text-xs mt-1">Graduated Dec 2025</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 shadow-md/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-emerald-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/20 rounded-lg text-emerald-400">
                  <LuTerminal size={24} /> {/* Changed icon to Terminal or Shield */}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">QA Automation</h3>
                  <p className="text-slate-600 dark:text-gray-400 text-sm">End-to-End Testing</p>
                  <p className="text-gray-500 text-xs mt-1">WebdriverIO & CI/CD Pipelines</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 shadow-md/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-purple-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                  <LuTerminal size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Clean Code</h3>
                  <p className="text-slate-600 dark:text-gray-400 text-sm">Design Patterns & Architecture</p>
                  <p className="text-gray-500 text-xs mt-1">Focused on scalability & readability</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Bio */}
          <div className="text-slate-600 dark:text-gray-300 space-y-6 leading-relaxed">
            <p className="text-lg">
              I am a <span className="text-slate-900 dark:text-white font-semibold">Software Engineer</span> focused on the web ecosystem. My journey is driven by a desire to build applications that are not only performant but also robust and reliable. I specialize in <span className="text-blue-400">TypeScript</span>, <span className="text-blue-400">React</span> and <span className="text-emerald-400">Test Automation</span>.
            </p>

            <p>
              I distinguish myself by handling the full development lifecycle. Whether I'm building a responsive frontend interface or writing complex E2E test suites in <span className="text-slate-900 dark:text-white">WebdriverIO</span>, I prioritize code quality and stability.
            </p>

            <p>
              While my academic background is in Data Science (giving me strong analytical skills), my professional passion lies in <span className="text-slate-900 dark:text-white">Web Development</span> and <span className="text-slate-900 dark:text-white">Quality Assurance</span>.
            </p>

            {/* Quick Tech Tags - Updated order */}
            <div className="pt-4 flex flex-wrap gap-3">
              {['TypeScript', 'React', 'WebdriverIO', 'JavaScript', 'Node.js', 'Python'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white dark:bg-slate-800 shadow-md text-slate-600 dark:text-gray-300 text-sm rounded-full border border-slate-200 dark:border-slate-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;