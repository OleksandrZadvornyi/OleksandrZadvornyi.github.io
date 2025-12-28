import React from 'react';
import { LuFileText, LuMic, LuBookOpen, LuExternalLink, LuCalendar, LuCircleCheck, LuClock, LuUsers } from "react-icons/lu";

import presentationImg from '../assets/presentation.jpg';

const publications = [
  {
    type: "Journal Article",
    title: "Comparative Analysis of ML Algorithms for Market Capitalization Forecasting",
    publisher: "Scientific Journal of TNTU",
    date: "2025",
    status: "Published",
    authors: "O. Zadvornyi, O. Pastukh",
    link: "https://doi.org/10.33108/visnyk_tntu2025.03.026",
    tags: ["Python", "Transformers", "ARIMA", "FinTech"],
    summary: "Proved that Time Series Transformer models outperform traditional financial algorithms (ARIMA/SMA) for long-term stock market forecasting. Analyzed data from 1,000 companies over 25 years to achieve 17.44% MAPE accuracy."
  },
  {
    type: "Conference Paper (Master's Thesis)",
    title: "Increasing Efficiency of Epileptic Seizure Detection via Hybrid Topological Features",
    publisher: "XIV Int. Conference on Modern Technologies",
    date: "Dec 2025",
    status: "Presented",
    authors: "O. Zadvornyi, I. Boyko",
    link: "/papers/zadvornyi-thesis-abstract-2025.pdf",
    tags: ["Python", "TDA", "Random Forest", "Healthcare AI"],
    summary: "Developed a hybrid framework combining Spectral Analysis and Topological Data Analysis (TDA) to detect seizures in EEG data. Achieved an 8.5% increase in precision by capturing non-linear structural changes in brain activity."
  },
  {
    type: "Journal Article",
    title: "A Technology For Generation And Quality Evaluation Of LLM-Generated Source Code",
    publisher: "Cybernetics and Systems Analysis",
    date: "TBA",
    status: "In Review",
    authors: "O. Pastukh, V. Yatsyshyn, O. Zadvornyi",
    link: null,
    tags: ["LLM", "Prompt Engineering", "Code Quality", "R&D"],
    summary: "Proposed a novel standardized metric for evaluating AI-generated code. The framework assesses security, semantic quality, and structural integrity, aiming to make LLM-generated code production-ready."
  }
];

const StatusBadge = ({ status }) => {
  const styles = {
    "Published": "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30",
    "Presented": "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300 border-blue-200 dark:border-blue-500/30",
    "In Review": "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300 border-yellow-200 dark:border-yellow-500/30"
  };

  const icons = {
    "Published": <LuCircleCheck size={14} />,
    "Presented": <LuMic size={14} />,
    "In Review": <LuClock size={14} />
  };

  return (
    <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${styles[status]}`}>
      {icons[status]}
      {status}
    </span>
  );
};

// Helper component to highlight my name in the author list
const AuthorList = ({ authors }) => {
  // Split authors by comma
  const authorArray = authors.split(',').map(a => a.trim());

  return (
    <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-gray-400 mb-3">
      <LuUsers size={16} className="mt-0.5 shrink-0 text-slate-400" />
      <span>
        {authorArray.map((author, index) => {
          // Check if the author string contains the name
          const isMe = author.includes("Zadvornyi");
          return (
            <React.Fragment key={index}>
              <span className={isMe ? "font-semibold text-slate-900 dark:text-white" : ""}>
                {author}
              </span>
              {index < authorArray.length - 1 && ", "}
            </React.Fragment>
          );
        })}
      </span>
    </div>
  );
};

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Research & <span className="text-blue-500">Publications</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            Applying academic rigor to real-world engineering problems. My research focuses on AI, Time Series Analysis, and Code Quality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* LEFT COLUMN: Publication Cards (Span 2 columns) */}
          <div className="lg:col-span-2 space-y-6">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="group bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all hover:shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-blue-500 font-medium">
                      <LuBookOpen size={16} />
                      <span>{pub.type}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                      {pub.title}
                    </h3>
                  </div>
                  <div className="shrink-0 flex items-center gap-3">
                    <span className="text-sm text-slate-500 dark:text-gray-400 flex items-center gap-1">
                      <LuCalendar size={14} /> {pub.date}
                    </span>
                    <StatusBadge status={pub.status} />
                  </div>
                </div>

                <AuthorList authors={pub.authors} />

                <p className="text-slate-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {pub.summary}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-slate-700/50">
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-slate-600 dark:text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {/* Change text based on whether it is a PDF or a website */}
                      {pub.link.endsWith('.pdf') ? "View Abstract (PDF)" : "Read Paper"}
                      <LuExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: Presentation Spotlight (Span 1 column) */}
          <div className="lg:col-span-1 space-y-6">

            {/* Photo Card */}
            <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="relative aspect-4/3 rounded-xl overflow-hidden mb-4 bg-slate-100 dark:bg-slate-800">
                <img
                  src={presentationImg}
                  alt="Presenting at XIV International Conference"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent flex items-end p-4">
                  <p className="text-white font-medium text-sm">
                    Presenting Master's Thesis results at XIV Int. Conference
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-500/20 rounded-lg text-blue-600 dark:text-blue-400">
                    <LuMic size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Public Speaking</h4>
                    <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">
                      Experienced in presenting complex technical findings to scientific audiences.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-500/20 rounded-lg text-purple-600 dark:text-purple-400">
                    <LuFileText size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Technical Writing</h4>
                    <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">
                      Authored 3 peer-reviewed papers on AI and Software Engineering.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Publications;