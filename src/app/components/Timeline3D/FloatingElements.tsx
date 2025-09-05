'use client';
import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  const generateFloatingElement = (index: number) => {
    const size = Math.random() * 60 + 20; // 20-80px
    const delay = Math.random() * 10;
    const duration = Math.random() * 20 + 15; // 15-35s
    const startX = Math.random() * 100; // 0-100%
    const startY = Math.random() * 100; // 0-100%

    return (
      <motion.div
        key={index}
        className={`absolute rounded-full blur-sm opacity-20`}
        style={{
          width: size,
          height: size,
          left: `${startX}%`,
          top: `${startY}%`,
          background: `linear-gradient(${Math.random() * 360}deg, 
            hsl(${Math.random() * 60 + 240}, 70%, 60%), 
            hsl(${Math.random() * 60 + 300}, 70%, 70%))`,
        }}
        animate={{
          x: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
          y: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
          scale: [1, Math.random() * 0.5 + 0.8, Math.random() * 0.5 + 0.8, 1],
          rotate: [0, 180, 360],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    );
  };

  const generateGeometricShape = (index: number) => {
    const shapes = ['triangle', 'square', 'diamond', 'hexagon'];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    const size = Math.random() * 40 + 15;
    const delay = Math.random() * 15;
    const duration = Math.random() * 25 + 20;
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;

    const shapeStyles = {
      triangle: {
        width: 0,
        height: 0,
        borderLeft: `${size / 2}px solid transparent`,
        borderRight: `${size / 2}px solid transparent`,
        borderBottom: `${size}px solid currentColor`,
        borderRadius: 0,
      },
      square: {
        width: size,
        height: size,
        backgroundColor: 'currentColor',
        borderRadius: '4px',
      },
      diamond: {
        width: size,
        height: size,
        backgroundColor: 'currentColor',
        borderRadius: 0,
        transform: 'rotate(45deg)',
      },
      hexagon: {
        width: size,
        height: size,
        backgroundColor: 'currentColor',
        clipPath:
          'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      },
    };

    return (
      <motion.div
        key={`shape-${index}`}
        className='absolute opacity-10'
        style={{
          left: `${startX}%`,
          top: `${startY}%`,
          color: `hsl(${Math.random() * 60 + 260}, 60%, 70%)`,
        }}
        animate={{
          x: [0, Math.random() * 300 - 150, Math.random() * 300 - 150, 0],
          y: [0, Math.random() * 300 - 150, Math.random() * 300 - 150, 0],
          rotate: [0, 360],
          scale: [0.5, 1.2, 0.5],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div style={shapeStyles[shape as keyof typeof shapeStyles]} />
      </motion.div>
    );
  };

  const generateParticleTrail = (index: number) => {
    const trailLength = 8;
    const baseDelay = Math.random() * 10;
    const path = {
      x: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
      ],
      y: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
      ],
    };

    return (
      <div key={`trail-${index}`} className='absolute inset-0'>
        {Array.from({ length: trailLength }, (_, i) => (
          <motion.div
            key={i}
            className='absolute w-2 h-2 rounded-full bg-purple-400'
            style={{
              left: `${path.x[0]}%`,
              top: `${path.y[0]}%`,
            }}
            animate={{
              x: path.x.map((x) => `${x}vw`),
              y: path.y.map((y) => `${y}vh`),
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 8,
              delay: baseDelay + i * 0.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className='fixed inset-0 pointer-events-none overflow-hidden'>
      {/* Floating Orbs */}
      {Array.from({ length: 15 }, (_, i) => generateFloatingElement(i))}

      {/* Geometric Shapes */}
      {Array.from({ length: 8 }, (_, i) => generateGeometricShape(i))}

      {/* Particle Trails */}
      {Array.from({ length: 3 }, (_, i) => generateParticleTrail(i))}

      {/* Animated Grid Background */}
      <motion.div
        className='absolute inset-0 opacity-5'
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Radial Glow Effects */}
      <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl' />
      <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full opacity-10 blur-3xl' />
      <div className='absolute top-3/4 left-1/2 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl' />

      {/* Dynamic Light Rays */}
      <motion.div
        className='absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-20'
        animate={{
          scaleY: [0.5, 1, 0.5],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-20'
        animate={{
          scaleX: [0.5, 1, 0.5],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
    </div>
  );
};

export default FloatingElements;
