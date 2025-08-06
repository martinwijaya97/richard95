'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  threshold?: number;
  className?: string;
  preset?:
    | 'slideIn'
    | 'fadeIn'
    | 'slideUp'
    | 'slideDown'
    | 'scaleIn'
    | 'rotateIn';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 50,
  once = true,
  threshold = 0.1,
  className = '',
  preset,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: '0px 0px -100px 0px',
    amount: threshold,
  });

  // Preset animations
  const presetVariants = {
    slideIn: {
      hidden: {
        opacity: 0,
        x:
          direction === 'left'
            ? -distance
            : direction === 'right'
            ? distance
            : 0,
        y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: 'easeOut',
        },
      },
    },
    slideUp: {
      hidden: { opacity: 0, y: distance },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    },
    slideDown: {
      hidden: { opacity: 0, y: -distance },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    },
    rotateIn: {
      hidden: { opacity: 0, rotate: -10, scale: 0.9 },
      visible: {
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    },
  };

  // Default variants based on direction
  const defaultVariants = {
    hidden: {
      opacity: 0,
      x:
        direction === 'left' ? -distance : direction === 'right' ? distance : 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const variants = preset ? presetVariants[preset] : defaultVariants;

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      //   className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
