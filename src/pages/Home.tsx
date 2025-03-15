import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Phone, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import 'ldrs/ring';
import { pinwheel } from 'ldrs';

pinwheel.register();

const CONTACT_PHONE = '+421908598198';

const stats = [
  { value: '98%', label: 'Spokojných zákazníkov', description: 'Profesionálna oprava preliačin bez lakovania' },
  { value: '2.5K+', label: 'Opravených preliačin', description: 'Rýchla a efektívna oprava' },
  { value: '15+', label: 'Rokov skúseností', description: 'Špecialisti na PDR technológiu' },
];

const PageTransition = () => (
  <div className="page-transition">
    <motion.div
      className="transition-panel panel-left"
      initial={{ translateX: 0 }}
      animate={{ translateX: '-100%' }}
      transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
    />
    <motion.div
      className="transition-panel panel-right"
      initial={{ translateX: 0 }}
      animate={{ translateX: '100%' }}
      transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
    />
  </div>
);

const Home = () => {
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleServicesClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/services');
    }, 1500);
  };

  return (
    <>
      {isPageLoading && <PageTransition />}
      <div className="relative min-h-screen bg-dark-bg overflow-hidden">
        {/* Ambient Background */}
        <div className="ambient-background">
          <div className="ambient-gradient" />
          <div className="ambient-ray" />
          <div className="ambient-ray" />
          <div className="ambient-ray" />
        </div>

        {/* Hero Section */}
        <section className="relative min-h-screen">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000"
              alt="Luxury car"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 hero-gradient" />
            <div className="absolute inset-0 hero-overlay" />
          </div>

          <div className="relative min-h-screen flex items-center">
            <div className="content-container">
              <div className="text-container">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-center"
                >
                  <br/>
                  <h1 className="hero-title mb-6">
                    PROFESIONÁLNA OPRAVA
                    <br className="hidden sm:block" />
                    PRELIAČIN BEZ LAKOVANIA
                  </h1>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto px-4">
                    Rýchlo, precízne a bez poškodenia laku
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.button
                      onClick={() => setShowPhoneModal(true)}
                      className="btn-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Objednať opravu</span>
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                    
                    <motion.button
                      onClick={handleServicesClick}
                      className="btn-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-3">
                          <l-ring size="24" color="white"></l-ring>
                          <l-pinwheel size="24" stroke="3" speed="0.9" color="white"></l-pinwheel>
                        </div>
                      ) : (
                        <span>SLUŽBY</span>
                      )}
                    </motion.button>
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mt-16 sm:mt-20 px-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="stat-card"
                    >
                      <div className="text-3xl sm:text-4xl font-bold text-orange-primary/90 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-base sm:text-lg font-semibold mb-2">
                        {stat.label}
                      </div>
                      <div className="text-sm text-gray-400">
                        {stat.description}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Phone Modal */}
        <AnimatePresence>
          {showPhoneModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setShowPhoneModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-dark-card p-6 rounded-lg shadow-xl max-w-md w-full relative"
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowPhoneModal(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
                <h2 className="text-2xl font-bold mb-4">Kontaktujte nás</h2>
                <p className="text-gray-400 mb-6">
                  Zavolajte nám pre rýchlu konzultáciu a objednávku
                </p>
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="btn-primary w-full text-lg py-4"
                >
                  <Phone className="h-6 w-6" />
                  <span>{CONTACT_PHONE}</span>
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Home;