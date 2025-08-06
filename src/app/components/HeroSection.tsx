'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

import { Link as ScrollLink } from 'react-scroll';

// Function for download CV
const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/CV-MARTIN.pdf'; // Path to your CV file in the public directory
  link.download = 'Martin_Wijaya_CV.pdf'; // The name the file will have when downloaded
  link.click();
};

// Fungsi untuk merender title
const renderTitle = () => (
  <h1 className='text-white mb-4 text-4xl lg:text-8xl lg:leading-normal font-extrabold'>
    <div className='text-transparent bg-clip-text bg-gradient-primary'>
      Hello, I&apos;m
    </div>
    <TypeAnimation
      sequence={[
        'Richard the Penguin',
        1000,
        '$RICHARD95',
        1000,
        'AI Token',
        1000,
      ]}
      repeat={Infinity}
    />
  </h1>
);

// Fungsi untuk merender deskripsi
const renderDescription = () => (
  <div className='mb-8'>
    <p className='text-white mb-4 text-lg lg:text-xl'>
      We&apos;re here to brighten up office workers downtime with fun mini games and even make you rich if you hold our token!
    </p>

    <ul className='list-disc pl-6 text-white text-lg lg:text-xl'>
      <li>Buy $RICHARD95</li>
      <li>HODL</li>
      <li>To the Moon !!!</li>
    </ul>
  </div>
);

// Fungsi untuk merender tombol 'Hire Me'
const renderButtonBuyToken = () => (
  // <ScrollLink to='#dex' smooth={true} duration={500}>
  //   <button className='px-6 py-3 bg-white w-full sm:w-fit rounded-full hover:cursor-pointer hover:bg-slate-200 mr-4 text-white bg-gradient-primary'>
  //     Buy Token
  //   </button>
  // </ScrollLink>
  
    <button className='px-6 py-3 bg-white w-full sm:w-fit rounded-full hover:cursor-pointer hover:bg-slate-200 mr-4 text-white bg-gradient-primary'>
      <a href="https://dexscreener.com/abstract/0xf374ed71e8922077cf8300d4a1fedadaace11093:moon" target="_blank">
        Buy Token
      </a>
    </button>
);

// Fungsi untuk merender tombol 'Download CV'
const renderButtonDownload = () => (
  <button
    onClick={handleDownload}
    className='px-1 py-1 bg-transparent w-full sm:w-fit rounded-full text-white mt-4 lg:mt-0 bg-gradient-primary'
  >
    <span className='px-5 py-2 block bg-black rounded-full hover:bg-slate-800'>
      Download CV
    </span>
  </button>
);

// Fungsi untuk merender gambar avatar
const renderImage = () => (
  <div className='rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative mt-4 lg:mt-0 p-0'>
    <Image
      src='/images/token.png'
      alt='portfolio-avatar'
      layout='fill'
      objectFit=''
      // className='rounded-full'
    />
  </div>
);

// Fungsi untuk merender tombol-tombol
const renderButtons = () => (
  <div>
    {renderButtonBuyToken()}
  </div>
);

// Fungsi utama komponen HeroSection
const HeroSection: React.FC = () => {
  return (
    <section id='#home' className='lg:py-6 mt-28 relative mx-auto px-12 h-full'>
      <div className='grid grid-cols-1 sm:grid-cols-12 mb-36 '>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-7 text-center sm:text-left justify-self-start z-[2]'
        >
          {renderTitle()}
          {renderDescription()}
          {renderButtons()}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-5 flex justify-center items-center z-[2]'
        >
          {renderImage()}
        </motion.div>
        <div className='absolute left-0 bottom-0 bg-gradient-to-t from-black via-[rgba(0, 143, 129, 0.0061)] to-[rgba(0, 0, 0, 1)] w-[100%] h-[150px]  z-[3]' />
      </div>
      <video
        id='background-video'
        loop
        autoPlay
        muted
        className='w-screen absolute left-0 top-0 h-full  object-cover flex   z-[1] max-[900px]:h-[210%] max-[500px]:h-[110%] opacity-[0.5]'
      >
        <source src='/videos/background.mp4' type='video/mp4' />
      </video>
    </section>
  );
};

export default HeroSection;
