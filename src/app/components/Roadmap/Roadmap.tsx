'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const Roadmap: React.FC = () => {
  const renderHeader = () => {
    return (
      <div className='max-w-[45rem] flex flex-col items-center text-center  gap-3 mb-12 '>
        <h2 className='  font-bold text-5xl'>Roadmap 2026</h2>
        <p className='text-base tracking-wide text-gray-400 font-semibold leading-tight '>
          Step by step, our roadmap guides you through discovery, planning,
          design, development, deployment, and ongoing maintenance, ensuring
          transparency and progress every step of the way.
        </p>
      </div>
    );
  };
  const renderBlankLeftItem = () => {
    return (
      <div className='h-fit relative flex tablet:flex-col max-w-[35rem] my-10 tablet:my-5 col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto tracking-normal' />
    );
  };
  const renderBlankRightItem = () => {
    return (
      <div className='h-fit relative flex tablet:flex-col max-w-[35rem] my-10 tablet:my-5 col-start-6 col-end-10 mr-auto md:mr-0 md:ml-auto tracking-normal' />
    );
  };
  const renderNumberLeft = (number: string) => {
    return (
      <div
        className={`h-fit w-fit text-4xl px-4 py-5 rounded-t-full rounded-br-full lg:rounded-tr-none lg:rounded-br-none lg:rounded-s-full  bg-gradient-primary my-3`}
      >
        {number}
      </div>
    );
  };
  const renderNumberRight = (number: string) => {
    return (
      <div
        className={`h-fit w-fit text-4xl px-4 py-5 rounded-t-full rounded-br-full  lg:rounded-br-full lg:rounded-e-full lg:rounded-tl-none bg-gradient-primary my-3`}
      >
        {number}
      </div>
    );
  };
  const renderText = () => {
    return (
      <div className='h-fit flex flex-col gap-5 rounded-xl roadmap-shadow tracking-wider p-6 border'>
        <p className='leading-6 font-bold text-xl'>
          Project Inception and Token Creation
        </p>
        <div className='flex gap-2'>
          <p className='font-bold'>✧</p>
          <p>Establish the core team and finalize the project vision.</p>
        </div>
        <div className='flex gap-2'>
          <p className='font-bold'>✧</p>
          <p>
            Develop and deploy Bitbullx Token on the Bep 20 network with 18
            decimal precision.
          </p>
        </div>
      </div>
    );
  };
  const renderLeftItem = (number: string) => {
    return (
      <div className='h-fit relative flex flex-col md:flex-row max-w-[35rem] my-10 tablet:my-5 col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto tracking-normal '>
        {renderNumberLeft(number)}
        {renderText()}
      </div>
    );
  };

  const renderMiddleItem = () => {
    return (
      <div className='relative col-start-5 col-end-6 mr-3 md:mx-auto '>
        <div className='flex items-center justify-center w-6 h-full'>
          <div
            className={`w-[0.4rem] h-full  rounded-t-full bg-gradient-primary `}
          />
        </div>
      </div>
    );
  };

  const renderMiddleItemReverse = () => {
    return (
      <div className='relative col-start-5 col-end-6 mr-3 md:mx-auto '>
        <div className='flex items-center justify-center w-6 h-full'>
          <div
            className={`w-[0.4rem] h-full  rounded-b-full bg-gradient-primary-reverse `}
          />
        </div>
      </div>
    );
  };

  const renderRightItem = (number: string) => {
    return (
      <div className='h-fit relative flex flex-col-reverse md:flex-row max-w-[35rem] my-10 tablet:my-5 col-start-6 col-end-10 mr-auto md:mr-0 md:ml-auto tracking-normal '>
        {renderText()}
        {renderNumberRight(number)}
      </div>
    );
  };

  return (
    <section
      id='#roadmap'
      className='lg:py-6 mt-28 relative mx-auto  px-4 xl:px-16 text-white flex flex-col items-center'
    >
      {renderHeader()}
      <div className='flex flex-col grid-cols-9 p-2 mx-auto md:grid'>
        <div className='flex md:contents flex-row-reverse'>
          {renderLeftItem('01')}
          {renderMiddleItem()}
          {renderBlankRightItem()}
        </div>
        <div className='flex md:contents '>
          {renderBlankLeftItem()}
          {renderMiddleItemReverse()}
          {renderRightItem('02')}
        </div>
        <div className='flex md:contents flex-row-reverse'>
          {renderLeftItem('03')}
          {renderMiddleItem()}
          {renderBlankRightItem()}
        </div>
        <div className='flex md:contents '>
          {renderBlankLeftItem()}
          {renderMiddleItemReverse()}
          {renderRightItem('04')}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
