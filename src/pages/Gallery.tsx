import React from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
  {
    id: 1,
    title: 'Oprava zadného bočného panelu',
    before: 'https://i.ibb.co/bgw46DcD/photo-2025-03-15-19-56-11.jpg',
    after: 'https://i.ibb.co/8493yxv2/photo-2025-03-15-20-02-21.jpg',
    description: 'Odstránenie preliačiny na zadnom paneli'
  },
  {
    id: 2,
    title: 'Volkswagen - Oprava strechy',
    before: 'https://i.ibb.co/FqfS3WdL/druhe-sive-pred.jpg',
    after: 'https://i.ibb.co/NnCrZWds/druheseive-po.jpg',
    description: 'Profesionálna oprava preliačiny na streche bez potreby lakovania'
  },
  {
    id: 3,
    title: 'Porsche Cayman - Oprava bočného panelu',
    before: 'https://i.ibb.co/F4dzyKCM/porsche2.jpg',
    after: 'https://i.ibb.co/ZpDjzPB9/porsche.jpg',
    description: 'Odstránenie hlbokej preliačiny na bočnom paneli vozidla'
  },
  {
    id: 4,
    title: 'BMW X5 - Oprava preliačiny na streche auta',
    before: 'https://i.ibb.co/Y9HHtxB/sive-pred.jpg',
    after: 'https://i.ibb.co/Xkrd1pVc/sivepo.jpg',
    description: 'Oprava preliačiny na streche spôsobená krupobytím'
  },
  {
    id: 5,
    title: 'Skoda Octavia - Oprava strechy po krupobití',
    before: 'https://i.ibb.co/RTW2JZMz/pred.jpg',
    after: 'https://i.ibb.co/jZ6NJQ3v/po.jpg',
    description: 'Odstránenie viacero preliačín na streche'
  },
  {
    id: 6,
    title: 'Oprava bočnej lišty strechy',
    before: 'https://i.ibb.co/ntJ9dkt/modreauto.jpg',
    after: 'https://i.ibb.co/FLRNN0Pj/modreautopo.jpg',
    description: 'Oprava bočnej lišty strechy po páde konára'
  }
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-dark-bg py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Galéria prác
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-card border border-dark-border rounded-lg overflow-hidden"
            >
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-400 mb-2">Pred opravou</p>
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <img
                        src={item.before}
                        alt={`${item.title} - pred opravou`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-400 mb-2">Po oprave</p>
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <img
                        src={item.after}
                        alt={`${item.title} - po oprave`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;