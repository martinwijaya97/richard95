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
      className='flex flex-col justify-center items-center cursor-pointer text-center px-4'
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
        <h1 className='inline-block text-4xl lg:text-8xl font-bold pb-12 bg-white bg-clip-text text-transparent'>
          Tokenomicssssssssss
        </h1>
        <div className="w-full flex justify-center my-8">
          <div className="grid grid-cols-3 border border-gray-700 rounded-lg bg-gradient-to-r from-purple-800/80 via-indigo-900/50 to-purple-700/70 backdrop-blur-sm shadow-xl overflow-hidden shadow-md px-12 py-8 divide-x divide-gray-700 w-full max-w-10xl ">
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
      </div>
    </section>
  );
};

export default TokenomicSection;
