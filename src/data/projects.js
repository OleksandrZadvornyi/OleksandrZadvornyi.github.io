import {
    LuCode,
    LuDatabase,
    LuLayoutDashboard,
    LuTerminal,
    LuActivity,
    LuSearch,
    LuMonitor,
    LuGlobe,
    LuBookOpen
} from "react-icons/lu";

export const projects = [
    {
        title: "Fire Gallery",
        description: "A modern image gallery with Firebase Authentication, Firestore and drag-and-drop storage.",
        tech: ["React", "TypeScript", "Firebase", "Tailwind"],
        category: "Web Dev",
        github: "https://github.com/OleksandrZadvornyi/fire-gallery",
        demo: "https://fire-gallery-84947.web.app/signin",
        icon: LuLayoutDashboard,
        color: "text-blue-400"
    },
    {
        title: "Weather Forecasting Transformer",
        description: "Deep learning model forecasting daily max temperatures using Time Series Transformers and GluonTS.",
        tech: ["Python", "PyTorch", "GluonTS", "HuggingFace"],
        category: "Data Science",
        github: "https://github.com/OleksandrZadvornyi/weather-forecasting",
        demo: null,
        icon: LuActivity,
        color: "text-emerald-400"
    },
    {
        title: "Kal-Hans Backend",
        description: "RESTful API for an e-commerce platform managing products, blogs and social posts.",
        tech: ["Node.js", "Express", "MongoDB", "TypeScript"],
        category: "Web Dev",
        github: "https://github.com/OleksandrZadvornyi/kal-hans-backend",
        demo: null,
        icon: LuDatabase,
        color: "text-green-400"
    },
    {
        title: "EEG Seizure Detection",
        description: "Automated framework using Topological Data Analysis and Random Forest on CHB-MIT Scalp EEG data.",
        tech: ["Python", "MNE", "Scikit-Learn", "Streamlit"],
        category: "Data Science",
        github: "https://github.com/OleksandrZadvornyi/eeg",
        demo: null,
        icon: LuActivity,
        color: "text-purple-400"
    },
    {
        title: "WebdriverIO Automation",
        description: "Robust E2E testing framework implementing the Page Object Model (POM) design pattern.",
        tech: ["JavaScript", "WebdriverIO", "Selenium", "Mocha"],
        category: "QA Automation",
        github: "https://github.com/OleksandrZadvornyi/webdriver-demo",
        demo: null,
        icon: LuTerminal,
        color: "text-orange-400"
    },
    {
        title: "LLM Code Evaluation",
        description: "Framework for assessing credibility of LLM-generated Python code using static analysis.",
        tech: ["Python", "LangChain", "Docker", "NLP"],
        category: "Data Science",
        github: "https://github.com/OleksandrZadvornyi/prompt-engineering",
        demo: null,
        icon: LuSearch,
        color: "text-yellow-400"
    },
    {
        title: "Audio Recorder (C++)",
        description: "Enhanced Qt Audio Recorder implementing Observer, Command and Strategy patterns.",
        tech: ["C++", "Qt Framework", "Design Patterns"],
        category: "Software Engineering",
        github: "https://github.com/OleksandrZadvornyi/audiorecorder",
        demo: null,
        icon: LuCode,
        color: "text-blue-600"
    },
    {
        title: "Frontend Performance CLI",
        description: "CLI tool to analyze frontend performance using Lighthouse and Puppeteer programmatically.",
        tech: ["JavaScript", "Puppeteer", "Lighthouse", "CLI"],
        category: "Web Dev",
        github: "https://github.com/OleksandrZadvornyi/frontend-performance-analyzer",
        demo: null,
        icon: LuTerminal,
        color: "text-pink-400"
    },
    {
        title: "Kal-Hans Frontend",
        description: "Modern e-commerce UI for the Kal-Hans brand. Features responsive design and connects to the Node.js backend.",
        tech: ["React", "TypeScript", "Tailwind", "Vite"],
        category: "Web Dev",
        github: "https://github.com/OleksandrZadvornyi/kal-hans-landing",
        demo: "https://kal-hans.netlify.app/",
        icon: LuMonitor,
        color: "text-teal-400"
    },
    {
        title: "Dental Clinic Multi-Lang",
        description: "A multilingual landing page supporting 5 languages. Built with a custom Webpack configuration and i18next.",
        tech: ["JavaScript", "Webpack", "i18next", "SCSS"],
        category: "Web Dev",
        github: "https://github.com/OleksandrZadvornyi/dental-clinic-landing",
        demo: "https://denticss.netlify.app/",
        icon: LuGlobe,
        color: "text-cyan-500"
    },
    {
        title: "Educate Platform",
        description: "A responsive education platform landing page featuring modern animations and multi-language support.",
        tech: ["Vite", "JavaScript", "CSS3", "Animations"],
        category: "Web Dev",
        github: "https://github.com/OleksandrZadvornyi/educate-landing",
        demo: "https://e-learn-website.netlify.app/",
        icon: LuBookOpen,
        color: "text-indigo-400"
    }
];