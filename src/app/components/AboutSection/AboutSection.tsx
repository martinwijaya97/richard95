'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import TabBar from './components/TabBar';

// Fungsi untuk merender gambar
const renderImage = () => (
  <Image src='/images/workspace.png' alt='workspace' width={500} height={500} />
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
      <div className='md:grid grid-cols-2 gap-12  pt-28 px-4 xl:gap-16 sm:pt-28 xl:px-16 text-white'>
        <div>{renderImage()}</div>
        <div>
          <h2 className='text-4xl font-bold text-white mb-4 mt-4 lg:mt-0'>
            Richard the penguin
          </h2>
          <p className='text-white text-base lg:text-lg'>
            Richard the penguin community where we&apos;re not just talking
            about the future – we&apos;re driving it, full throttle! we&apos;re
            a bunch of meme-loving, Lamborghini-dreaming individuals who believe
            that the digital world should be as exciting as it is innovative.
          </p>
          <div className='flex flex-row mt-2'>
            <TabBar
              tabs={tabData}
              selected={(value) => {
                setSelectedTab(value);
              }}
            />
          </div>
          <div className=''>
            {tabData.find((tab) => tab.id === selectedTab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
