import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          disclaimer: {
            title: 'Welcome to Hoodagoods',
            intro: 'We use cookies and similar technologies to improve your browsing experience, personalize content and offers, show targeted ads, analyze traffic, and better understand you.',
            dataUsage: 'By clicking "Accept All", you consent to:',
            cookies: 'The use of cookies and similar technologies',
            processing: 'Processing of your personal data',
            sharing: 'Sharing of your information with our trusted partners',
            rights: 'You can exercise your rights by clicking "Decline". However, this may limit some site functionality.',
            privacyPolicy: 'Privacy Policy',
            terms: 'Terms of Use',
            acceptAll: 'Accept All',
            decline: 'Decline'
          }
        }
      }
      // Add more languages as needed
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;