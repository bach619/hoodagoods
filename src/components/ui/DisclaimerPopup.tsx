import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface DisclaimerPopupProps {
  onAccept: () => void;
  onDecline: () => void;
}

const DisclaimerPopup: React.FC<DisclaimerPopupProps> = ({ onAccept, onDecline }) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = isVisible ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  const handleAccept = () => {
    setIsVisible(false);
    onAccept();
  };

  const handleDecline = () => {
    setIsVisible(false);
    onDecline();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl">
        <div className="absolute top-4 right-4">
          <button
            onClick={handleDecline}
            className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4">{t('disclaimer.title', 'Welcome to Hoodagoods')}</h2>
          
          <div className="prose prose-sm max-w-none mb-6">
            <p className="text-gray-600 mb-4">
              {t('disclaimer.intro', 'We use cookies and similar technologies to improve your browsing experience, personalize content and offers, show targeted ads, analyze traffic, and better understand you.')}
            </p>

            <p className="text-gray-600 mb-4">
              {t('disclaimer.dataUsage', 'By clicking "Accept All", you consent to:')}
            </p>

            <ul className="list-disc pl-5 mb-4 text-gray-600">
              <li>{t('disclaimer.cookies', 'The use of cookies and similar technologies')}</li>
              <li>{t('disclaimer.processing', 'Processing of your personal data')}</li>
              <li>{t('disclaimer.sharing', 'Sharing of your information with our trusted partners')}</li>
            </ul>

            <p className="text-gray-600 mb-4">
              {t('disclaimer.rights', 'You can exercise your rights by clicking "Decline". However, this may limit some site functionality.')}
            </p>

            <div className="text-sm text-gray-500">
              <a href="/privacy" className="text-primary-600 hover:text-primary-700">
                {t('disclaimer.privacyPolicy', 'Privacy Policy')}
              </a>
              {' • '}
              <a href="/terms" className="text-primary-600 hover:text-primary-700">
                {t('disclaimer.terms', 'Terms of Use')}
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              onClick={handleAccept}
              className="flex-1 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              {t('disclaimer.acceptAll', 'Accept All')}
            </button>
            <button
              onClick={handleDecline}
              className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {t('disclaimer.decline', 'Decline')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;