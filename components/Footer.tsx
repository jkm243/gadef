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
              <div className="w-10 h-10 bg-lambda-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="font-inter-tight font-semibold text-xl">
                GADEF Monde
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Guinée Assistance pour le Développement et l'Education des Femmes œuvre pour un développement communautaire durable en Guinée.
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
                <a href="mailto:contact@gadefmonde.com" className="text-gray-300 hover:text-lambda-accent transition-colors">
                  contact@gadefmonde.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-lambda-accent" />
                <a href="tel:+224123456789" className="text-gray-300 hover:text-lambda-accent transition-colors">
                  +224 123 456 789
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-lambda-accent mt-1" />
                <span className="text-gray-300">Conakry, Guinée</span>
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
            <span className="text-gray-400 text-sm">pour la Guinée</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;