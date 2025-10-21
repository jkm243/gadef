'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, Calendar, MapPin, Users, Heart } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  participants: number;
  image: string;
  category: string;
  achievements: string[];
}

interface EventGalleryProps {
  events: Event[];
}

export default function EventGallery({ events }: EventGalleryProps) {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <div className="py-16 bg-lambda-bg">
      <div className="max-w-lambda mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter-tight font-semibold text-lambda-text mb-6">
            Nos <span className="gradient-text">Réalisations</span>
          </h2>
          <p className="text-lg text-lambda-muted max-w-2xl mx-auto">
            Découvrez nos événements et réalisations qui témoignent de notre engagement communautaire et de notre impact positif.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="lambda-card overflow-hidden cursor-pointer group"
              onClick={() => setSelectedEvent(event)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-lambda-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                    {event.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-lambda-text mb-3 group-hover:text-lambda-accent transition-colors">
                  {event.title}
                </h3>
                <p className="text-lambda-muted mb-4 line-clamp-2">
                  {event.description}
                </p>
                
                <div className="space-y-2 text-sm text-lambda-muted">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    {event.participants} participants
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal pour afficher les détails de l'événement */}
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="lambda-card max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute top-4 left-4">
                  <span className="bg-lambda-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                    {selectedEvent.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h2 className="text-2xl font-semibold text-lambda-text mb-4">
                  {selectedEvent.title}
                </h2>
                <p className="text-lambda-muted mb-6">
                  {selectedEvent.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center text-lambda-muted">
                    <Calendar className="w-4 h-4 mr-2" />
                    {selectedEvent.date}
                  </div>
                  <div className="flex items-center text-lambda-muted">
                    <MapPin className="w-4 h-4 mr-2" />
                    {selectedEvent.location}
                  </div>
                  <div className="flex items-center text-lambda-muted">
                    <Users className="w-4 h-4 mr-2" />
                    {selectedEvent.participants} participants
                  </div>
                </div>

                {selectedEvent.achievements.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-lambda-text mb-3">
                      Réalisations et impacts
                    </h3>
                    <ul className="space-y-2">
                      {selectedEvent.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-lambda-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-lambda-text">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
