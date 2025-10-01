'use client';

import { motion } from 'framer-motion';
import { Divide as LucideIcon } from 'lucide-react';

interface ActionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ActionCard = ({ icon: Icon, title, description, delay = 0 }: ActionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="lambda-card p-8 group cursor-pointer"
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <motion.div 
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="w-14 h-14 bg-lambda-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-lambda-accent/20 transition-colors duration-300"
          >
            <Icon className="w-7 h-7 text-lambda-accent group-hover:scale-110 transition-transform duration-300" />
          </motion.div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-lambda-text mb-3 group-hover:text-lambda-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-lambda-muted leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ActionCard;