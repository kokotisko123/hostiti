import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin, Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };

  return (
    <footer className="bg-dark-bg relative">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-orange-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Kontaktujte nás</h3>
            <div className="space-y-4">
              <a href="tel:+4219085981989" className="flex items-center space-x-3 text-gray-300 hover:text-orange-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span>+421 908 598 198</span>
              </a>
              <a href="mailto:automano111@gmail.com" className="flex items-center space-x-3 text-gray-300 hover:text-orange-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span>automano111@gmail.com</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>Kalnica, 935 32 Kalná nad Hronom, Slovensko</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Otváracie hodiny</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-gray-300">
                <Clock className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <p>Pondelok - Piatok: 8:00 - 18:00 </p>
                  <p>Sobota: Zatvorené</p>
                  <p>Nedeľa: Zatvorené</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Zostaňte v kontakte</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Váš email"
                  className="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-primary transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-orange-primary hover:text-orange-hover transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Social Links */}
            <div className="flex space-x-4">
             <a 
    href="https://www.facebook.com/share/1AEf3QLRfd/?mibextid=wwXIfr" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-400 hover:text-orange-primary transition-colors"
  >
    <Facebook className="w-6 h-6" />
  </a>
              <a href="#" className="text-gray-400 hover:text-orange-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} AutoMaňo. Všetky práva vyhradené.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="" className="text-gray-400 hover:text-orange-primary text-sm transition-colors">
                Ochrana súkromia
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-primary text-sm transition-colors">
                Obchodné podmienky
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;