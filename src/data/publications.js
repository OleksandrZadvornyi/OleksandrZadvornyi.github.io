export const publications = [
    {
        type: {
            en: "Journal Article",
            ua: "Стаття в журналі"
        },
        title: {
            en: "Comparative Analysis of ML Algorithms for Market Capitalization Forecasting",
            ua: "Порівняльний аналіз алгоритмів ML для прогнозування ринкової капіталізації"
        },
        publisher: {
            en: "Scientific Journal of TNTU",
            ua: "Вісник ТНТУ"
        },
        date: "2025",
        status: "Published", // Kept as code for badge logic
        authors: {
            en: "O. Zadvornyi, O. Pastukh",
            ua: "О. Задворний, О. Пастух"
        },
        link: "https://doi.org/10.33108/visnyk_tntu2025.03.026",
        tags: ["Python", "Transformers", "ARIMA", "FinTech"],
        summary: {
            en: "Proved that Time Series Transformer models outperform traditional financial algorithms (ARIMA/SMA) for long-term stock market forecasting. Analyzed data from 1,000 companies over 25 years to achieve 17.44% MAPE accuracy.",
            ua: "Доведено, що моделі Time Series Transformer перевершують традиційні фінансові алгоритми (ARIMA/SMA) для довгострокового прогнозування фондового ринку. Проаналізовано дані 1000 компаній за 25 років, досягнуто точності MAPE 17.44%."
        }
    },
    {
        type: {
            en: "Conference Paper (Master's Thesis)",
            ua: "Матеріали конференції (Магістерська дисертація)"
        },
        title: {
            en: "Increasing Efficiency of Epileptic Seizure Detection via Hybrid Topological Features",
            ua: "Підвищення ефективності виявлення епілептичних нападів за допомогою гібридних топологічних ознак"
        },
        publisher: {
            en: "XIV Int. Conference on Modern Technologies",
            ua: "XIV Міжнародна конференція сучасних технологій"
        },
        date: "Dec 2025",
        status: "Presented",
        authors: {
            en: "O. Zadvornyi, I. Boyko",
            ua: "О. Задворний, І. Бойко"
        },
        link: "/papers/zadvornyi-thesis-abstract-2025.pdf",
        tags: ["Python", "TDA", "Random Forest", "Healthcare AI"],
        summary: {
            en: "Developed a hybrid framework combining Spectral Analysis and Topological Data Analysis (TDA) to detect seizures in EEG data. Achieved an 8.5% increase in precision by capturing non-linear structural changes in brain activity.",
            ua: "Розроблено гібридний фреймворк, що поєднує спектральний аналіз та топологічний аналіз даних (TDA) для виявлення нападів у даних ЕЕГ. Досягнуто підвищення точності на 8.5% шляхом виявлення нелінійних структурних змін у мозковій активності."
        }
    },
    {
        type: {
            en: "Journal Article",
            ua: "Стаття в журналі"
        },
        title: {
            en: "A Technology For Generation And Quality Evaluation Of LLM-Generated Source Code",
            ua: "Технологія генерації та оцінки якості вихідного коду, згенерованого LLM"
        },
        publisher: {
            en: "Cybernetics and Systems Analysis",
            ua: "Кібернетика та системний аналіз"
        },
        date: "TBA",
        status: "In Review",
        authors: {
            en: "O. Pastukh, V. Yatsyshyn, O. Zadvornyi",
            ua: "О. Пастух, В. Яцишин, О. Задворний"
        },
        link: null,
        tags: ["LLM", "Prompt Engineering", "Code Quality", "R&D"],
        summary: {
            en: "Proposed a novel standardized metric for evaluating AI-generated code. The framework assesses security, semantic quality and structural integrity, aiming to make LLM-generated code production-ready.",
            ua: "Запропоновано нову стандартизовану метрику для оцінки коду, згенерованого ШІ. Фреймворк оцінює безпеку, семантичну якість та структурну цілісність з метою підготовки згенерованого коду до використання у продакшені."
        }
    }
];