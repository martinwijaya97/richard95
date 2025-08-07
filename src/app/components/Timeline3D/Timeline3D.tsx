'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../ScrollReveal';
import ScrollRevealContainer from '../ScrollRevealContainer';
import TimelineCard3D from './TimelineCard3D';
import FloatingElements from './FloatingElements';

const Timeline3D: React.FC = () => {
  const timelineData = [
    {
      id: 1,
      year: '2024',
      title: 'Project Genesis',
      description:
        'The beginning of our revolutionary journey into 3D web animations.',
      details: [
        'Initial concept development',
        'Technology stack selection',
        'Team formation and planning',
      ],
      color: 'from-blue-500 to-cyan-500',
      icon: '🚀',
    },
    {
      id: 2,
      year: '2024 Q2',
      title: 'Design & Prototyping',
      description:
        'Creating stunning 3D interfaces and user experience designs.',
      details: [
        '3D modeling and animations',
        'User interface prototyping',
        'Performance optimization',
      ],
      color: 'from-purple-500 to-pink-500',
      icon: '🎨',
    },
    {
      id: 3,
      year: '2024 Q3',
      title: 'Development Phase',
      description:
        'Building the core functionality with cutting-edge technologies.',
      details: [
        'React & Next.js implementation',
        'Framer Motion integration',
        'CSS 3D transforms mastery',
      ],
      color: 'from-green-500 to-emerald-500',
      icon: '⚡',
    },
    {
      id: 4,
      year: '2024 Q4',
      title: 'Launch & Scale',
      description: 'Deploying to production and scaling for global reach.',
      details: [
        'Production deployment',
        'Performance monitoring',
        'Global CDN integration',
      ],
      color: 'from-orange-500 to-red-500',
      icon: '🌍',
    },
    {
      id: 5,
      year: '2025',
      title: 'Future Innovations',
      description:
        'Exploring new frontiers in web animation and 3D experiences.',
      details: [
        'WebGL integration',
        'AR/VR capabilities',
        'AI-powered animations',
      ],
      color: 'from-violet-500 to-purple-500',
      icon: '🔮',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const centerLineVariants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className='relative min-h-screen py-20 px-4 overflow-hidden'>
      {/* Floating Background Elements */}
      <FloatingElements />

      {/* Main Timeline Container */}
      <div className='max-w-6xl mx-auto relative'>
        {/* Header */}
        <ScrollReveal preset='slideDown' delay={0.2} duration={1}>
          <div className='text-center mb-20'>
            <h2 className='text-4xl md:text-6xl font-bold text-white mb-6'>
              Interactive 3D Timeline
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Experience our journey through time with immersive 3D animations
              and smooth scroll effects.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline Container */}
        <ScrollRevealContainer stagger={0.4} delayChildren={0.5}>
          <motion.div
            className='relative'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Center Line */}
            <motion.div
              className='absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-400 via-pink-400 to-blue-400 origin-top'
              style={{ height: '100%' }}
              variants={centerLineVariants}
            />

            {/* Timeline Items */}
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                className={`relative flex items-center justify-between mb-20 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                {/* Timeline Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <TimelineCard3D
                    item={item}
                    index={index}
                    isLeft={index % 2 === 0}
                  />
                </div>

                {/* Center Dot */}
                <ScrollReveal
                  preset='scaleIn'
                  delay={0.2}
                  className='absolute left-1/2 transform -translate-x-1/2 z-10'
                >
                  <motion.div
                    className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.color} border-4 border-white shadow-lg`}
                    whileHover={{ scale: 1.5, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  />
                </ScrollReveal>

                {/* Year Badge */}
                <ScrollReveal
                  preset='rotateIn'
                  delay={0.4}
                  className={`absolute left-1/2 transform -translate-x-1/2 ${
                    index % 2 === 0 ? '-translate-y-16' : 'translate-y-16'
                  }`}
                >
                  <motion.div
                    className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2'
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <span className='text-sm font-bold text-white'>
                      {item.year}
                    </span>
                  </motion.div>
                </ScrollReveal>

                {/* Empty space for alternating layout */}
                <div className='w-5/12' />
              </motion.div>
            ))}
          </motion.div>
        </ScrollRevealContainer>

        {/* Bottom Showcase */}
        <ScrollReveal preset='slideUp' delay={0.5} duration={1.2}>
          <div className='mt-32 text-center'>
            <h3 className='text-3xl font-bold text-white mb-6'>
              Animation Techniques Showcase
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
              <motion.div
                className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6'
                whileHover={{
                  scale: 1.05,
                  rotateY: 10,
                  rotateX: 5,
                  z: 50,
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className='text-4xl mb-4'>🎭</div>
                <h4 className='text-xl font-bold text-white mb-2'>
                  3D Transforms
                </h4>
                <p className='text-gray-300'>
                  CSS 3D transforms with perspective and rotation effects.
                </p>
              </motion.div>

              <motion.div
                className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6'
                whileHover={{
                  scale: 1.05,
                  rotateY: -10,
                  rotateX: -5,
                  z: 50,
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className='text-4xl mb-4'>⚡</div>
                <h4 className='text-xl font-bold text-white mb-2'>
                  Scroll Animations
                </h4>
                <p className='text-gray-300'>
                  Intersection Observer with smooth reveal animations.
                </p>
              </motion.div>

              <motion.div
                className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6'
                whileHover={{
                  scale: 1.05,
                  rotateY: 10,
                  rotateX: 5,
                  z: 50,
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className='text-4xl mb-4'>🌊</div>
                <h4 className='text-xl font-bold text-white mb-2'>
                  Framer Motion
                </h4>
                <p className='text-gray-300'>
                  Advanced physics-based animations and gestures.
                </p>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Timeline3D;
