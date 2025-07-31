'use client';
import React, { FC, useState } from 'react';
import dynamic from 'next/dynamic';

interface TokenomicItemProps {
  prefix?: string;
  value: number;
  postfix?: string;
  text: string;
}

const AnimatedNumbers = dynamic(
  () => {
    return import('react-animated-numbers');
  },
  { ssr: false }
);

const TokenomicItem: React.FC<TokenomicItemProps> = ({
  prefix,
  value,
  postfix,
  text,
}) => {
  const [key, setKey] = useState(0);

  return (
    <div
      className='flex flex-col justify-center items-center mx-4 cursor-pointer'
      onClick={() => {
        setKey(key + 1);
      }}
    >
      <h2 className='text-white text-4xl font-bold flex flex-row'>
        {prefix}
        <AnimatedNumbers
          key={key} // Set the
          includeComma
          animateToNumber={value}
          locale='en-US'
          className='text-white text-4xl font-bold'
        />
        {postfix}
      </h2>
      <p className='text-[#ADB7BE] text-base'>{text}</p>
    </div>
  );
};

const TokenomicSection: React.FC = () => {
  const achievementList = [
    {
      text: 'Token Supply',
      value: 63000000000000,
      postfix: '',
    },
    {
      prefix: '',
      text: 'Burned LP',
      value: 90,
      postfix: '%',
    },
    {
      text: 'Airdrop',
      value: 10,
      postfix: '%',
    },
  ];

  return (
    <section>
      <div className='pt-8 px-4 sm:pt-16 xl:px-16 flex flex-col items-center '>
        <h1 className='text-4xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-primary'>
          Tokenomics
        </h1>
        <div className='border border-[#33353F] w-full rounded-md py-8 px-17  lg:flex flex-row items-center justify-between'>
          {achievementList.map((achievement, index) => (
            <TokenomicItem
              key={index}
              prefix={achievement.prefix}
              value={achievement.value}
              postfix={achievement.postfix}
              text={achievement.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TokenomicSection;
