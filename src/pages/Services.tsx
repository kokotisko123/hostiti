import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Hammer, Shield, Clock, Car, CheckCircle2, ArrowRight } from 'lucide-react';
import 'ldrs/ring';
import { pinwheel } from 'ldrs';

pinwheel.register();

const Services = () => {
  const [isLoading, setIsLoading] = useState(false);

  const services = [
    {
      icon: Hammer,
      title: 'PDR - Paintless Dent Repair',
      description: 'Profesionálna oprava preliačin bez potreby lakovania. Zachováme originálny lak vášho vozidla.',
      features: [
        'Odstránenie preliačin bez lakovania',
        'Zachovanie originálneho laku',
        'Rýchla a efektívna oprava',
        'Cenovo výhodné riešenie'
      ]
    },
    {
      icon: Shield,
      title: 'Oprava po krupobití',
      description: 'Špecializujeme sa na opravy poškodení po krupobití s využitím PDR technológie.',
      features: [
        'Komplexná oprava všetkých preliačin',
        'Bez potreby prelakovania',
        'Zachovanie hodnoty vozidla',
        'Rýchle spracovanie poistných udalostí'
      ]
    },
    {
      icon: Car,
      title: 'Servis vozidiel',
      description: 'Opravíme vaše auto rýchlo a spoľahlivo v našej dielni.',
      features: [
        'Oprava u nás v dielni',
        'Flexibilný časový harmonogram',
        'Profesionálne vybavenie',
        'Úspora vášho času'
      ]
    }
  ];

  const handleServiceClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-dark-bg py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden mb-20">
          <div className="absolute inset-0">
            <img
              src="https://i.ibb.co/Xf8ndj0H/Green-and-White-Geometric-Graphic-Designer-Business-Card.png"
              alt="PDR Service"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
          </div>
          <div className="relative py-20 px-6 md:px-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl"
            >
              Profesionálna oprava preliačin bez lakovania
            </motion.h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-8">
              Využívame najmodernejšie PDR technológie pre dokonalú opravu preliačin bez poškodenia originálneho laku.
            </p>
            <div className="flex items-center gap-4">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="btn-primary flex items-center space-x-2"
                onClick={handleServiceClick}
              >
                {isLoading ? (
                  <l-ring size="24" color="white"></l-ring>
                ) : (
                  <>
                    <span>Objednať opravu</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>
              {isLoading && (
                <div className="ml-4">
                  <l-pinwheel
                    size="35"
                    stroke="3.5"
                    speed="0.9"
                    color="white"
                  ></l-pinwheel>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-card border border-dark-border rounded-xl overflow-hidden backdrop-blur-sm"
            >
              <div className="p-6">
                <service.icon className="w-12 h-12 text-orange-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-primary flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;