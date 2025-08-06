'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import TabBar from './components/TabBar';
import SocialLinks from '../SocialLinks';

// Fungsi untuk merender gambar
const renderImage = () => (
  <Image src='/images/workspace.png' alt='workspace' className='w-100 rounded-2xl shadow-lg' width={500} height={500} />
);

// Fungsi utama komponen About Section
const AboutSection: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('skills');

  const tabData = [
    {
      id: 'skills',
      title: 'Skills',
      content: (
        <ul className='list-disc pl-2'>
          <li>React.js</li>
          <li>React Native</li>
          <li>Next.js</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Node.js</li>
        </ul>
      ),
    },
    {
      id: 'educations',
      title: 'Educations',
      content: (
        <ul className='list-disc pl-2'>
          <li>Tarumanegara University</li>
          <li>San Marino School</li>
          <li>Bina Kusuma School</li>
        </ul>
      ),
    },
    {
      id: 'experiences',
      title: 'Experiences',
      content: (
        <ul className='list-disc pl-2'>
          <li>Edgeworks Solutions</li>
          <li>Wahyoo</li>
          <li>Citra Buana Mentari</li>
        </ul>
      ),
    },
  ];

  return (
    <section id='#about'>
      <div className='max-w-7xl mx-auto md:grid grid-cols-2 gap-3 pt-28 px-4 xl:gap-6 sm:pt-28 xl:px-16 text-white'>
        <div>{renderImage()}</div>
        <div>
          <h2 className='text-4xl font-bold text-white mb-4 mt-4 lg:mt-0'>
            Richard the penguin
          </h2>
          <p className='text-white text-base lg:text-lg'>
            Richard the Penguins Community is a place where you can entertain yourself with mini-games to pass the time, and share stories and office-life struggles with others on Telegram.
            <br></br>
            Lets Connect to our community!
          </p>
          <div className='flex items-center space-x-4 mt-4'>
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
