'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../ScrollReveal';

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  details: string[];
  color: string;
  icon: string;
}

interface TimelineCard3DProps {
  item: TimelineItem;
  index: number;
  isLeft: boolean;
}

const TimelineCard3D: React.FC<TimelineCard3DProps> = ({
  item,
  index,
  isLeft,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: isLeft ? -100 : 100,
      rotateY: isLeft ? -45 : 45,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const hoverVariants = {
    rest: {
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      z: 0,
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    },
    hover: {
      scale: 1.05,
      rotateY: isLeft ? 5 : -5,
      rotateX: -2,
      z: 50,
      boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const iconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.6, ease: 'easeInOut' },
    },
  };

  const detailsVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      y: -20,
    },
    visible: {
      height: 'auto',
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <ScrollReveal
      direction={isLeft ? 'left' : 'right'}
      delay={index * 0.2}
      duration={0.8}
      distance={100}
    >
      <motion.div
        className='relative group cursor-pointer'
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d',
        }}
        initial='rest'
        whileHover='hover'
        animate='rest'
        variants={hoverVariants}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Main Card */}
        <motion.div
          className={`
            relative bg-white/10 backdrop-blur-md border border-white/20 
            rounded-2xl p-6 overflow-hidden
            ${isLeft ? 'ml-auto' : 'mr-auto'}
          `}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Background Gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 rounded-2xl`}
          />

          {/* Animated Background Particles */}
          <div className='absolute inset-0 overflow-hidden'>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className='absolute w-2 h-2 bg-white/20 rounded-full'
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Header */}
          <div className='relative z-10 flex items-start justify-between mb-4'>
            <motion.div className='text-5xl mb-2' variants={iconVariants}>
              {item.icon}
            </motion.div>

            <motion.div
              className={`px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-xs font-bold`}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              Step {item.id}
            </motion.div>
          </div>

          {/* Content */}
          <div className='relative z-10'>
            <motion.h3
              className='text-2xl font-bold text-white mb-3'
              style={{ transform: 'translateZ(20px)' }}
            >
              {item.title}
            </motion.h3>

            <motion.p
              className='text-gray-300 mb-4 leading-relaxed'
              style={{ transform: 'translateZ(10px)' }}
            >
              {item.description}
            </motion.p>

            {/* Expandable Details */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  variants={detailsVariants}
                  initial='hidden'
                  animate='visible'
                  exit='hidden'
                  className='border-t border-white/20 pt-4 mt-4'
                >
                  <h4 className='text-sm font-semibold text-white mb-3 opacity-80'>
                    Key Features:
                  </h4>
                  <ul className='space-y-2'>
                    {item.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        className='flex items-center text-sm text-gray-300'
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <motion.span
                          className='w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3'
                          whileHover={{ scale: 1.5 }}
                        />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Expand Button */}
            <motion.button
              className='mt-4 text-sm text-purple-300 hover:text-purple-100 transition-colors flex items-center gap-2'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isExpanded ? 'Show Less' : 'Learn More'}
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▼
              </motion.span>
            </motion.button>
          </div>

          {/* Hover Glow Effect */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl opacity-0`}
            animate={{ opacity: isHovered ? 0.1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* 3D Edge Highlight */}
          <motion.div
            className='absolute inset-0 border border-white/10 rounded-2xl'
            animate={{
              borderColor: isHovered
                ? 'rgba(255,255,255,0.3)'
                : 'rgba(255,255,255,0.1)',
            }}
          />
        </motion.div>

        {/* Shadow */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl blur-xl opacity-20`}
          animate={{
            scale: isHovered ? 1.1 : 1,
            opacity: isHovered ? 0.3 : 0.2,
          }}
          style={{ transform: 'translateZ(-10px)' }}
        />
      </motion.div>
    </ScrollReveal>
  );
};

export default TimelineCard3D;
