import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Aké veľké preliačiny dokážete opraviť?',
    answer: 'Dokážeme opraviť preliačiny rôznych veľkostí, od malých poškodení po väčšie deformácie. Ideálne sú preliačiny do veľkosti 20-30 cm, kde nie je poškodený lak vozidla. Pre presné posúdenie vám odporúčame poslať fotografiu poškodenia alebo prísť na osobnú konzultáciu.'
  },
  {
    question: 'Koľko trvá oprava?',
    answer: 'Väčšina opráv je dokončená v ten istý deň. Menšie preliačiny zvládneme čo najrýchlejšie, väčšie poškodenia môžu trvať aj viac hodín. Presný čas vám povieme po obhliadke vozidla.'
  },
  {
    question: 'Bude oprava viditeľná?',
    answer: 'Nie, naša metóda PDR (Paintless Dent Repair) zachováva originálny lak vozidla. Po oprave nie je možné rozpoznať, že tam bola preliačina. Práve v tom spočíva výhoda našej metódy oproti klasickému lakovaniu.'
  },
  {
    question: 'Koľko stojí oprava preliačiny?',
    answer: 'Cena závisí od veľkosti, hĺbky a lokality preliačiny. Pre presnú cenovú ponuku potrebujeme vidieť poškodenie - môžete poslať foto alebo prísť na obhliadku.'
  },
  {
    question: 'Je možné opraviť preliačinu aj keď je poškodený lak?',
    answer: 'PDR metóda je najvhodnejšia pre preliačiny bez poškodenia laku. Ak je lak poškodený, môžeme vám odporučiť alternatívne riešenie alebo spolupracujúci autoservis pre komplexnú opravu.'
  },
  {
    question: 'Poskytujete záruku na opravu?',
    answer: 'Áno, na všetky naše opravy poskytujeme záruku. Sme si istí kvalitou našej práce a v prípade akýchkoľvek problémov ich vyriešime.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-dark-bg py-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Často kladené otázky
        </motion.h1>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-card border border-dark-border rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-opacity-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-orange-primary" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-orange-primary" />
                )}
              </button>
              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? 'auto' : 0 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-4 text-gray-400">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;