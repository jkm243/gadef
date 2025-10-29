'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-lambda-text text-white" role="contentinfo">
      <div className="max-w-lambda mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Logo et Mission */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
             <img src="https://i.ibb.co/DD259tPM/Logo-Gadef.png" alt="GADEF Logo" className="w-25 h-25 rounded-lg" />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Groupe d'action pour le développement et la fraternité. Organisme sans but lucratif qui travaille pour répondre aux besoins essentiels des personnes vulnérables à Montréal.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h3 className="font-inter-tight font-semibold text-lg">Navigation</h3>
            <nav className="flex flex-col space-y-3" role="navigation" aria-label="Navigation du pied de page">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/nos-actions', label: 'Nos Actions' },
                { href: '/programmes-communautaires', label: 'Programmes' },
                { href: '/devenir-benevole', label: 'Devenir Bénévole' },
                { href: '/faire-un-don', label: 'Faire un Don' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-lambda-accent transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="font-inter-tight font-semibold text-lg">Contact</h3>
            <address className="space-y-4 not-italic">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-lambda-accent" />
                <a href="mailto:info@gadefmonde.com" className="text-gray-300 hover:text-lambda-accent transition-colors">
                  info@gadefmonde.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-lambda-accent" />
                <a href="tel:+14386222010" className="text-gray-300 hover:text-lambda-accent transition-colors">
                  +1 (438) 622-2010
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-lambda-accent mt-1" />
                <span className="text-gray-300">560 Av. Sainte-Croix<br/>Saint-Laurent, QC H4L 3X5</span>
              </div>
            </address>
          </div>
        </motion.div>

        {/* Bas de page */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-gray-400 text-sm">
            © 2024 GADEF Monde. Tous droits réservés.
          </p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Fait avec</span>
            <Heart className="w-4 h-4 text-lambda-secondary" />
            <span className="text-gray-400 text-sm">par <a href="jkmconception.com">Jkmconception</a></span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;