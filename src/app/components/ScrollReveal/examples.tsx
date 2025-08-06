// Contoh penggunaan ScrollReveal dan ScrollRevealContainer

import React from 'react';
import { ScrollReveal, ScrollRevealContainer } from './index';

// CONTOH 1: Animasi sederhana dengan preset
const ExampleBasic = () => {
  return (
    <div>
      {/* Slide in dari kiri */}
      <ScrollReveal direction='left' delay={0.2}>
        <h2>Judul dari kiri</h2>
      </ScrollReveal>

      {/* Fade in */}
      <ScrollReveal preset='fadeIn' delay={0.4}>
        <p>Paragraf dengan fade in</p>
      </ScrollReveal>

      {/* Scale in */}
      <ScrollReveal preset='scaleIn' delay={0.6}>
        <div>Konten dengan scale in</div>
      </ScrollReveal>
    </div>
  );
};

// CONTOH 2: Animasi berurutan dengan container
const ExampleStaggered = () => {
  return (
    <ScrollRevealContainer stagger={0.2} delayChildren={0.3}>
      <ScrollReveal preset='slideUp'>
        <div>Item 1 - muncul pertama</div>
      </ScrollReveal>

      <ScrollReveal preset='slideUp'>
        <div>Item 2 - muncul kedua (delay +0.2s)</div>
      </ScrollReveal>

      <ScrollReveal preset='slideUp'>
        <div>Item 3 - muncul ketiga (delay +0.4s)</div>
      </ScrollReveal>
    </ScrollRevealContainer>
  );
};

// CONTOH 3: Card dengan animasi custom
const ExampleCard = () => {
  return (
    <ScrollReveal direction='up' duration={0.8} distance={100} delay={0.1}>
      <div className='bg-white p-6 rounded-lg shadow-lg'>
        <h3>Card Title</h3>
        <p>Card content yang muncul dengan slide up</p>
      </div>
    </ScrollReveal>
  );
};

// CONTOH 4: Untuk komponen roadmap atau timeline
const ExampleTimeline = () => {
  return (
    <div>
      {/* Header timeline */}
      <ScrollReveal preset='slideDown'>
        <h1>Timeline Title</h1>
      </ScrollReveal>

      {/* Timeline items dengan animasi bergantian */}
      <ScrollReveal direction='left' delay={0.2}>
        <div>Timeline item dari kiri</div>
      </ScrollReveal>

      <ScrollReveal direction='right' delay={0.4}>
        <div>Timeline item dari kanan</div>
      </ScrollReveal>

      <ScrollReveal direction='left' delay={0.6}>
        <div>Timeline item dari kiri lagi</div>
      </ScrollReveal>
    </div>
  );
};

// CONTOH 5: Animasi yang dapat diulang (tidak once)
const ExampleRepeatable = () => {
  return (
    <ScrollReveal
      preset='rotateIn'
      once={false} // Animasi berjalan setiap kali scroll
      threshold={0.3}
    >
      <div>Konten yang beranimasi setiap kali di-scroll</div>
    </ScrollReveal>
  );
};

export {
  ExampleBasic,
  ExampleStaggered,
  ExampleCard,
  ExampleTimeline,
  ExampleRepeatable,
};
