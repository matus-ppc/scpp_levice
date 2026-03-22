import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CookieConsent.css';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

  // Check for existing consent on mount
  useEffect(() => {
    const savedConsent = localStorage.getItem('cookie-consent-preferences');
    if (savedConsent) {
      const parsed = JSON.parse(savedConsent);
      setPreferences(parsed);
      // If they already made a choice, don't show the bar
      setIsVisible(false);
      applyConsent(parsed);
    } else {
      setIsVisible(true);
    }
  }, []);

  const applyConsent = (prefs) => {
    // This is where you would activate/deactivate scripts
    console.log('Applying cookie preferences:', prefs);
    
    if (prefs.analytics) {
      // Example: Load Google Analytics
      // loadGoogleAnalytics('YOUR_GA_ID_HERE');
    }
    
    if (prefs.marketing) {
      // Example: Load Marketing Pixels
    }
  };

  const handleAcceptAll = () => {
    const allPrefs = { essential: true, analytics: true, marketing: true };
    setPreferences(allPrefs);
    localStorage.setItem('cookie-consent-preferences', JSON.stringify(allPrefs));
    applyConsent(allPrefs);
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleDeclineAll = () => {
    const minPrefs = { essential: true, analytics: false, marketing: false };
    setPreferences(minPrefs);
    localStorage.setItem('cookie-consent-preferences', JSON.stringify(minPrefs));
    applyConsent(minPrefs);
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent-preferences', JSON.stringify(preferences));
    applyConsent(preferences);
    setIsVisible(false);
    setShowSettings(false);
  };

  const togglePreference = (key) => {
    if (key === 'essential') return; // Cannot toggle essential
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && !showSettings && (
          <motion.div 
            className="cookie-consent-bar modern-light"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
          >
            <div className="cookie-content">
              <div className="cookie-text">
                <h3>Súbory cookies 🍪</h3>
                <p>
                  Tento web používa súbory cookies pre lepšiu skúsenosť, analýzu návštevnosti a personalizáciu reklám. 
                  Niektoré sú nevyhnutné pre fungovanie stránky.
                </p>
              </div>
              <div className="cookie-actions">
                <button className="btn btn-outline-dark" onClick={() => setShowSettings(true)}>
                  Nastavenia
                </button>
                <button className="btn btn-secondary" onClick={handleDeclineAll}>
                  Odmietnuť všetky
                </button>
                <button className="btn btn-primary" onClick={handleAcceptAll}>
                  Prijať všetky
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSettings && (
          <div className="cookie-modal-overlay">
            <motion.div 
              className="cookie-modal"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h2>Nastavenia súkromia</h2>
              <p>Tu si môžete prispôsobiť, ktoré kategórie cookies povoľujete.</p>
              
              <div className="cookie-options">
                <div className="cookie-option">
                  <div className="option-info">
                    <h4>Nevyhnutné cookies</h4>
                    <p>Sú potrebné pre základnú funkčnosť webu. Nedajú sa vypnúť.</p>
                  </div>
                  <label className="switch">
                    <input type="checkbox" checked={true} disabled />
                    <span className="slider round"></span>
                  </label>
                </div>

                <div className="cookie-option">
                  <div className="option-info">
                    <h4>Analytické cookies</h4>
                    <p>Pomáhajú nám pochopiť, ako návštevníci používajú web.</p>
                  </div>
                  <label className="switch">
                    <input 
                      type="checkbox" 
                      checked={preferences.analytics} 
                      onChange={() => togglePreference('analytics')}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>

                <div className="cookie-option">
                  <div className="option-info">
                    <h4>Marketingové cookies</h4>
                    <p>Umožňujú nám zobrazovať relevantnejšie reklamy na iných stránkach.</p>
                  </div>
                  <label className="switch">
                    <input 
                      type="checkbox" 
                      checked={preferences.marketing} 
                      onChange={() => togglePreference('marketing')}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>

              <div className="modal-actions">
                <button className="btn btn-outline-dark" onClick={handleDeclineAll}>
                  Odmietnuť všetko
                </button>
                <button className="btn btn-primary" onClick={handleSavePreferences}>
                  Uložiť nastavenia
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Re-open Icon */}
      {!isVisible && !showSettings && (
        <button 
          className="cookie-reopen-btn" 
          onClick={() => setShowSettings(true)}
          title="Upraviť nastavenia cookies"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        </button>
      )}
    </>
  );
};

export default CookieConsent;
