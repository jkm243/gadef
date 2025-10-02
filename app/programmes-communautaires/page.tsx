'use client';

import { motion } from 'framer-motion';
import { Users, Lightbulb, TrendingUp, Target } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Footer from '@/components/Footer';

export default function ProgrammesCommunautaires() {
  const programmes = [
    {
      icon: Users,
      title: "Développement local",
      description: "Renforcement des capacités des communautés à identifier et mettre en œuvre leurs propres solutions.",
      color: "lambda-accent"
    },
    {
      icon: Lightbulb,
      title: "Innovation sociale",
      description: "Accompagnement de projets innovants portés par les membres des communautés.",
      color: "lambda-secondary"
    },
    {
      icon: TrendingUp,
      title: "Autonomie économique",
      description: "Soutien aux initiatives génératrices de revenus et à l'entrepreneuriat local.",
      color: "lambda-accent"
    },
    {
      icon: Target,
      title: "Impact durable",
      description: "Mise en place de programmes qui créent un changement systémique à long terme.",
      color: "lambda-secondary"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-lambda-bg via-white to-lambda-bg overflow-hidden">
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
              <Users className="w-10 h-10 text-lambda-accent" />
            </motion.div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 120 }}
            className="text-4xl md:text-5xl lg:text-6xl font-inter-tight font-semibold text-lambda-text mb-6"
          >
            Programmes <span className="gradient-text">Communautaires</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 140 }}
            className="text-lg text-lambda-muted max-w-2xl mx-auto"
          >
            Nos programmes communautaires visent à responsabiliser les populations locales et à créer un développement durable et inclusif.
          </motion.p>
        </div>
      </section>

      <AnimatedSection className="py-lambda bg-white">
        <div className="max-w-lambda mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-inter-tight font-semibold text-lambda-text text-center mb-12">
            Nos approches
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {programmes.map((programme, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="lambda-card p-8"
              >
                <div className={`w-16 h-16 bg-${programme.color}/10 rounded-2xl flex items-center justify-center mb-6`}>
                  <programme.icon className={`w-8 h-8 text-${programme.color}`} />
                </div>
                <h3 className="text-2xl font-inter-tight font-semibold text-lambda-text mb-4">
                  {programme.title}
                </h3>
                <p className="text-lambda-muted leading-relaxed">
                  {programme.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-lambda bg-lambda-bg">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-inter-tight font-semibold text-lambda-text text-center mb-12">
            Méthodologie participative
          </h2>
          <div className="space-y-8">
            <div className="lambda-card p-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-lambda-accent rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-inter-tight font-semibold text-lambda-text mb-2">
                    Écoute et diagnostic
                  </h3>
                  <p className="text-lambda-muted">
                    Nous commençons par écouter les besoins exprimés par les communautés et réaliser un diagnostic participatif.
                  </p>
                </div>
              </div>
            </div>

            <div className="lambda-card p-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-lambda-secondary rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-inter-tight font-semibold text-lambda-text mb-2">
                    Co-construction
                  </h3>
                  <p className="text-lambda-muted">
                    Les solutions sont élaborées conjointement avec les membres de la communauté, en valorisant les savoirs locaux.
                  </p>
                </div>
              </div>
            </div>

            <div className="lambda-card p-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-lambda-accent rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-inter-tight font-semibold text-lambda-text mb-2">
                    Mise en œuvre
                  </h3>
                  <p className="text-lambda-muted">
                    Les projets sont mis en œuvre avec un accompagnement technique et un renforcement des capacités locales.
                  </p>
                </div>
              </div>
            </div>

            <div className="lambda-card p-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-lambda-secondary rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-inter-tight font-semibold text-lambda-text mb-2">
                    Évaluation et pérennisation
                  </h3>
                  <p className="text-lambda-muted">
                    Nous évaluons les résultats de manière participative et assurons la pérennisation des acquis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
}
