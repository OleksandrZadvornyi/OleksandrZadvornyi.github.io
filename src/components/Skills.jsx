import {
  LuCode,
  LuDatabase,
  LuServer,
  LuTerminal,
  LuCpu,
  LuLayoutDashboard
} from "react-icons/lu";
import { useTranslation } from 'react-i18next';

const SkillCategory = ({ title, icon: Icon, skills, color }) => (
  <div className="bg-white dark:bg-slate-800 shadow-md p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-600 transition-colors">
    <div className="flex items-center gap-3 mb-4">
      <div className={`p-2 rounded-lg ${color} bg-opacity-20`}>
        <Icon size={24} className={color.replace('bg-', 'text-')} />
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-gray-300 text-sm font-medium rounded-full border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-colors cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const { t } = useTranslation();

  const categories = [
    {
      title: t('skills.categories.frontend'),
      icon: LuLayoutDashboard,
      color: "bg-pink-500",
      skills: ["React", "TypeScript", "Tailwind CSS", "Vite", "HTML5/CSS3"]
    },
    {
      title: t('skills.categories.qa'),
      icon: LuTerminal,
      color: "bg-orange-500",
      skills: ["WebdriverIO", "Selenium", "Mocha/Chai", "Page Object Model", "E2E Testing"]
    },
    {
      title: t('skills.categories.backend'),
      icon: LuServer,
      color: "bg-emerald-500",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs", "Git/GitHub"]
    },
    {
      title: t('skills.categories.languages'),
      icon: LuCode,
      color: "bg-green-500",
      skills: ["JavaScript (ES6+)", "TypeScript", "Python", "C++", "SQL"]
    },
    {
      title: t('skills.categories.data'),
      icon: LuCpu,
      color: "bg-purple-500",
      skills: ["Pandas", "PyTorch", "Time Series Analysis", "Jupyter"]
    },
    {
      title: t('skills.categories.tools'),
      icon: LuDatabase,
      color: "bg-yellow-500",
      skills: ["VS Code", "Docker", "Edge DevTools"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t('skills.title')} <span className="text-blue-500">{t('skills.highlight')}</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;