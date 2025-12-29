import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enJSON from './locales/en.json';
import uaJSON from './locales/ua.json';

i18n
    .use(LanguageDetector) // Detects user's browser language automatically
    .use(initReactI18next) // Passes i18n down to React
    .init({
        resources: {
            en: { ...enJSON },
            ua: { ...uaJSON }
        },
        fallbackLng: 'en', // Default language if detection fails
        interpolation: {
            escapeValue: false // React is already safe from XSS
        }
    });

export default i18n;