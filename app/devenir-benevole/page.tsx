'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { UserPlus, Mail, Phone, User, MessageCircle, Send } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Footer from '@/components/Footer';

export default function DevenirBenevole() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    motivation: '',
    domaine: 'sante'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Traitement du formulaire
    console.log('Données du formulaire:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-lambda-bg via-white to-lambda-bg overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-10 w-48 h-48 opacity-10 floating-animation">
            <img 
              src="https://images.pexels.com/photos/6647112/pexels-photo-6647112.jpeg?auto=compress&cs=tinysrgb&w=400" 
              alt="Bénévoles en action" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="absolute bottom-20 left-10 w-32 h-32 opacity-10 floating-animation" style={{ animationDelay: '2s' }}>
            <img 
              src="https://images.pexels.com/photos/6647020/pexels-photo-6647020.jpeg?auto=compress&cs=tinysrgb&w=300" 
              alt="Engagement communautaire" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        
        <div className="max-w-lambda mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="flex items-center justify-center mb-8"
          >
            <motion.div 
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.8 }}
              className="w-20 h-20 bg-lambda-accent/10 rounded-2xl flex items-center justify-center"
            >
              <UserPlus className="w-10 h-10 text-lambda-accent" />
            </motion.div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 120 }}
            className="text-4xl md:text-5xl lg:text-6xl font-inter-tight font-semibold text-lambda-text mb-6"
          >
            Devenir <span className="gradient-text">Bénévole</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 140 }}
            className="text-lg text-lambda-muted max-w-2xl mx-auto"
          >
            Rejoignez notre équipe de bénévoles passionnés et contribuez concrètement au développement des communautés guinéennes.
          </motion.p>
        </div>
      </section>

      {/* Pourquoi devenir bénévole */}
      <AnimatedSection className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-inter-tight font-semibold text-lambda-text text-center mb-12">
            Pourquoi devenir bénévole ?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-lambda-accent rounded-full mt-2"></div>
                <p className="text-lambda-text">
                  <strong>Impact direct :</strong> Contribuez concrètement à l'amélioration des conditions de vie des communautés guinéennes.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-lambda-secondary rounded-full mt-2"></div>
                <p className="text-lambda-text">
                  <strong>Expérience enrichissante :</strong> Développez vos compétences tout en découvrant une culture riche et diversifiée.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-lambda-accent rounded-full mt-2"></div>
                <p className="text-lambda-text">
                  <strong>Solidarité internationale :</strong> Participez à un mouvement de solidarité et d'entraide internationale.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-lambda-secondary rounded-full mt-2"></div>
                <p className="text-lambda-text">
                  <strong>Réseau engagé :</strong> Intégrez une communauté de personnes partageant les mêmes valeurs humanitaires.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-lambda-accent rounded-full mt-2"></div>
                <p className="text-lambda-text">
                  <strong>Formation continue :</strong> Bénéficiez de formations sur le développement communautaire et la coopération.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-lambda-secondary rounded-full mt-2"></div>
                <p className="text-lambda-text">
                  <strong>Flexibilité :</strong> Choisissez votre niveau d'engagement selon vos disponibilités et compétences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Formulaire */}
      <AnimatedSection className="py-lambda bg-lambda-bg">
        <div className="max-w-2xl mx-auto px-6">
          <div className="lambda-card p-8 md:p-12">
            <h2 className="text-3xl font-inter-tight font-semibold text-lambda-text text-center mb-8">
              Rejoignez notre équipe
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-lambda-text mb-2">
                  Nom complet
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-lambda-muted" />
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lambda-accent focus:border-transparent transition-all"
                    placeholder="Votre nom complet"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-lambda-text mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-lambda-muted" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lambda-accent focus:border-transparent transition-all"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-lambda-text mb-2">
                  Téléphone
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-lambda-muted" />
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lambda-accent focus:border-transparent transition-all"
                    placeholder="+224 123 456 789"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="domaine" className="block text-sm font-medium text-lambda-text mb-2">
                  Domaine d'intérêt
                </label>
                <select
                  id="domaine"
                  name="domaine"
                  value={formData.domaine}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lambda-accent focus:border-transparent transition-all"
                  required
                >
                  <option value="sante">Santé</option>
                  <option value="education">Education</option>
                  <option value="nutrition">Nutrition</option>
                  <option value="autonomisation">Autonomisation</option>
                  <option value="administration">Administration</option>
                  <option value="communication">Communication</option>
                </select>
              </div>

              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-lambda-text mb-2">
                  Motivation
                </label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-4 w-5 h-5 text-lambda-muted" />
                  <textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lambda-accent focus:border-transparent transition-all resize-none"
                    placeholder="Parlez-nous de votre motivation à rejoindre GADEF Monde..."
                    required
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-lambda-accent text-white py-4 px-6 rounded-xl font-medium flex items-center justify-center space-x-2 hover:bg-lambda-accent/90 transition-colors"
              >
                <Send className="w-5 h-5" />
                <span>Envoyer ma candidature</span>
              </motion.button>
            </form>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
}
