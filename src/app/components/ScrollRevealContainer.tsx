'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollRevealContainerProps {
  children: React.ReactNode;
  stagger?: number;
  delayChildren?: number;
  once?: boolean;
  threshold?: number;
  className?: string;
}

const ScrollRevealContainer: React.FC<ScrollRevealContainerProps> = ({
  children,
  stagger = 0.1,
  delayChildren = 0,
  once = true,
  threshold = 0.1,
  className = '',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: '0px 0px -50px 0px',
    amount: threshold,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren,
        staggerChildren: stagger,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollRevealContainer;
