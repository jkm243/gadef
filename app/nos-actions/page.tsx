'use client';

import { motion } from 'framer-motion';
import { Heart, Users, GraduationCap, Apple, Package, Home, Target, Eye, Handshake } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import EventGallery from '@/components/EventGallery';
import Footer from '@/components/Footer';

export default function NosActions() {
  const actions = [
    {
      icon: Heart,
      title: "Sécurité Alimentaire",
      description: "Mise en place de serres agricoles, distribution de paniers alimentaires et soutien aux familles en situation de précarité.",
      details: [
        "Mise en place de serres agricoles pour la production locale",
        "Distribution de paniers alimentaires aux familles défavorisées",
        "Soutien aux familles en situation de précarité",
        "Lutte contre l'insécurité alimentaire",
        "Promotion de l'autonomie alimentaire locale"
      ],
      color: "lambda-accent"
    },
    {
      icon: Users,
      title: "Développement Communautaire",
      description: "Organisation d'activités sociales, de formations et de programmes d'intégration pour les nouveaux arrivants.",
      details: [
        "Organisation d'activités sociales et communautaires",
        "Formations adaptées aux besoins de la communauté",
        "Programmes d'intégration pour les nouveaux arrivants",
        "Favoriser l'intégration sociale",
        "Créer des espaces de fraternité et de partage"
      ],
      color: "lambda-secondary"
    },
    {
      icon: GraduationCap,
      title: "Éducation et Environnement",
      description: "Sensibilisation à l'agriculture durable et à la protection de l'environnement.",
      details: [
        "Sensibilisation à l'agriculture durable",
        "Protection de l'environnement",
        "Formation et sensibilisation aux enjeux environnementaux",
        "Éducation aux enjeux alimentaires et sociaux",
        "Promotion des pratiques écologiques et responsables"
      ],
      color: "green-500"
    },
    {
      icon: Apple,
      title: "Nos Serres Agricoles",
      description: "Les serres du Saint-Laurent, exploitées par le GADEF, sont un espace de production, d'apprentissage et de partage.",
      details: [
        "Production locale de légumes et fruits",
        "Espace d'apprentissage pour la communauté",
        "Opportunités de formation et d'emploi",
        "Soutien à la sécurité alimentaire",
        "Création d'opportunités de formation et d'emploi"
      ],
      color: "purple-500"
    }
  ];

  const objectives = [
    {
      icon: Target,
      title: "Nos Objectifs",
      description: "Nos objectifs principaux pour promouvoir le développement durable et la fraternité",
      details: [
        "Renforcer la sécurité alimentaire des familles à faible revenu grâce à la production locale et à la distribution solidaire",
        "Favoriser l'intégration des nouveaux arrivants à travers des activités collectives et formatives",
        "Soutenir le développement durable par des pratiques agricoles écologiques et responsables",
        "Créer des espaces de fraternité et de partage, où les citoyens peuvent s'impliquer et s'entraider",
        "Former et sensibiliser la population aux enjeux environnementaux, alimentaires et sociaux",
        "Développer des partenariats communautaires pour bâtir un réseau solide au service de la collectivité"
      ],
      color: "blue-500"
    }
  ];

  const vision = [
    {
      icon: Eye,
      title: "Notre Vision",
      description: "Un monde où chaque personne a accès à une alimentation saine, durable et culturellement adaptée, tout en participant activement à la vie communautaire et au développement local.",
      details: [],
      color: "indigo-500"
    }
  ];

  const mission = [
    {
      icon: Handshake,
      title: "Notre Mission",
      description: "Le Groupe d'Action pour le Développement et la Fraternité (GADEF) a pour mission de promouvoir la solidarité, le développement durable et la fraternité au sein de la communauté.",
      details: [
        "Améliorer les conditions de vie des familles",
        "Favoriser l'inclusion sociale par des initiatives concrètes",
        "Développer des projets dans les domaines de la sécurité alimentaire",
        "Promouvoir l'agriculture urbaine et le développement communautaire",
        "Créer des liens solides au sein de la communauté"
      ],
      color: "teal-500"
    }
  ];

  // Données d'exemple pour la galerie d'événements
  const events = [
    {
      id: 1,
      title: "Inauguration des Serres du Saint-Laurent",
      description: "Lancement officiel de nos serres agricoles avec la participation de la communauté locale et des partenaires.",
      date: "15 mars 2023",
      location: "Saint-Laurent, Montréal",
      participants: 45,
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Agriculture",
      achievements: [
        "Installation de 3 serres de 200m² chacune",
        "Formation de 15 bénévoles aux techniques agricoles",
        "Première récolte de légumes bio pour 50 familles",
        "Création de 5 emplois saisonniers"
      ]
    },
    {
      id: 2,
      title: "Distribution de Paniers Alimentaires",
      description: "Distribution mensuelle de paniers alimentaires aux familles en situation de précarité.",
      date: "10 avril 2023",
      location: "Centre communautaire GADEF",
      participants: 120,
      image: "https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Sécurité Alimentaire",
      achievements: [
        "Distribution de 120 paniers alimentaires",
        "Soutien à 60 familles vulnérables",
        "Partenariat avec Moisson Montréal",
        "Formation de 8 bénévoles distributeurs"
      ]
    },
    {
      id: 3,
      title: "Atelier d'Intégration pour Nouveaux Arrivants",
      description: "Programme d'accueil et d'intégration pour les nouveaux arrivants avec ateliers pratiques et rencontres communautaires.",
      date: "22 mai 2023",
      location: "Bibliothèque de Saint-Laurent",
      participants: 35,
      image: "https://images.pexels.com/photos/8061688/pexels-photo-8061688.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Intégration",
      achievements: [
        "Accueil de 35 nouveaux arrivants",
        "Formation sur les services publics québécois",
        "Création d'un réseau d'entraide",
        "Orientation vers les ressources locales"
      ]
    },
    {
      id: 4,
      title: "Formation en Agriculture Urbaine",
      description: "Atelier pratique sur les techniques d'agriculture urbaine et de jardinage écologique.",
      date: "5 juin 2023",
      location: "Serres du Saint-Laurent",
      participants: 25,
      image: "https://images.pexels.com/photos/6647112/pexels-photo-6647112.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Formation",
      achievements: [
        "Formation de 25 participants aux techniques agricoles",
        "Mise en place de 10 jardins communautaires",
        "Sensibilisation aux pratiques écologiques",
        "Création d'un réseau de jardiniers urbains"
      ]
    },
    {
      id: 5,
      title: "Fête de la Fraternité",
      description: "Événement communautaire annuel pour célébrer la diversité et renforcer les liens sociaux.",
      date: "15 juillet 2023",
      location: "Parc de Saint-Laurent",
      participants: 200,
      image: "https://images.pexels.com/photos/6646943/pexels-photo-6646943.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Communautaire",
      achievements: [
        "Participation de 200 personnes",
        "Présentation de 15 cultures différentes",
        "Collecte de fonds de 5000$",
        "Renforcement des liens communautaires"
      ]
    },
    {
      id: 6,
      title: "Sensibilisation Environnementale",
      description: "Campagne de sensibilisation sur les enjeux environnementaux et les pratiques durables.",
      date: "20 août 2023",
      location: "Écoles de Saint-Laurent",
      participants: 150,
      image: "https://images.pexels.com/photos/6647020/pexels-photo-6647020.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Environnement",
      achievements: [
        "Sensibilisation de 150 élèves",
        "Mise en place de 5 projets écologiques",
        "Formation de 20 éco-ambassadeurs",
        "Réduction de 30% des déchets dans les écoles"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-lambda-bg via-white to-lambda-bg overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 right-20 w-32 h-32 opacity-5 floating-animation">
            <img
              src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="Actions GADEF"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="absolute bottom-10 left-20 w-40 h-40 opacity-5 floating-animation" style={{ animationDelay: '3s' }}>
            <img
              src="https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="Développement communautaire"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        <div className="max-w-lambda mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="text-4xl md:text-5xl lg:text-6xl font-inter-tight font-semibold text-lambda-text mb-6"
          >
            Nos <span className="gradient-text">Actions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 120 }}
            className="text-lg text-lambda-muted max-w-2xl mx-auto"
          >
            Découvrez nos domaines d'intervention pour promouvoir la solidarité, l'inclusion sociale et le développement durable à Saint-Laurent.
          </motion.p>
        </div>
      </section>

      {/* Section Mission */}
      <section className="py-lambda bg-white">
        <div className="max-w-lambda mx-auto px-6">
          <div className="space-y-16">
            {mission.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.01, y: -5 }}
                  className="lambda-card p-8 md:p-12 relative overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-5">
                    <img
                      src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Mission GADEF"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center mr-4"
                      >
                        <item.icon className="w-8 h-8 text-teal-500" />
                      </motion.div>
                      <h2 className="text-3xl md:text-4xl font-inter-tight font-semibold text-lambda-text">
                        {item.title}
                      </h2>
                    </div>
                    <p className="text-lg text-lambda-muted mb-8 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="space-y-4">
                      {item.details.map((detail, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-lambda-text">{detail}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Section Vision */}
      <section className="py-lambda bg-lambda-bg">
        <div className="max-w-lambda mx-auto px-6">
          <div className="space-y-16">
            {vision.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.01, y: -5 }}
                  className="lambda-card p-8 md:p-12 relative overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-5">
                    <img
                      src="https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Vision GADEF"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mr-4"
                      >
                        <item.icon className="w-8 h-8 text-indigo-500" />
                      </motion.div>
                      <h2 className="text-3xl md:text-4xl font-inter-tight font-semibold text-lambda-text">
                        {item.title}
                      </h2>
                    </div>
                    <p className="text-lg text-lambda-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Section Objectifs */}
      <section className="py-lambda bg-white">
        <div className="max-w-lambda mx-auto px-6">
          <div className="space-y-16">
            {objectives.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.01, y: -5 }}
                  className="lambda-card p-8 md:p-12 relative overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-5">
                    <img
                      src="https://images.pexels.com/photos/8061688/pexels-photo-8061688.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Objectifs GADEF"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mr-4"
                      >
                        <item.icon className="w-8 h-8 text-blue-500" />
                      </motion.div>
                      <h2 className="text-3xl md:text-4xl font-inter-tight font-semibold text-lambda-text">
                        {item.title}
                      </h2>
                    </div>
                    <p className="text-lg text-lambda-muted mb-8 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="space-y-4">
                      {item.details.map((detail, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-lambda-text">{detail}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Section Actions */}
      <section className="py-lambda bg-lambda-bg">
        <div className="max-w-lambda mx-auto px-6">
          <div className="space-y-16">
            {actions.map((action, index) => (
              <AnimatedSection key={action.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.01, y: -5 }}
                  className={`lambda-card p-8 md:p-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} md:flex items-center gap-12 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-5">
                    <img
                      src={`https://images.pexels.com/photos/${index % 2 === 0 ? '6646918' : '6647019'}/pexels-photo-${index % 2 === 0 ? '6646918' : '6647019'}.jpeg?auto=compress&cs=tinysrgb&w=800`}
                      alt={`${action.title} background`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center mb-6">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 bg-${action.color}/10 rounded-2xl flex items-center justify-center mr-4`}
                      >
                        <action.icon className={`w-8 h-8 text-${action.color}`} />
                      </motion.div>
                      <h2 className="text-3xl md:text-4xl font-inter-tight font-semibold text-lambda-text">
                        {action.title}
                      </h2>
                    </div>
                    <p className="text-lg text-lambda-muted mb-8 leading-relaxed">
                      {action.description}
                    </p>
                    <div className="space-y-4">
                      {action.details.map((detail, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3"
                        >
                          <div className={`w-2 h-2 bg-${action.color} rounded-full mt-2 flex-shrink-0`}></div>
                          <p className="text-lambda-text">{detail}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie d'événements */}
      <EventGallery events={events} />

      <Footer />
    </div>
  );
}
