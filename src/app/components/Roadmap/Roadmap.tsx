'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import ScrollReveal from '../ScrollReveal';
import ScrollRevealContainer from '../ScrollRevealContainer';

const Roadmap: React.FC = () => {
  const renderHeader = () => {
    return (
      <ScrollReveal preset='slideDown' delay={0.2} duration={2} distance={200}>
        <div className='max-w-[45rem] flex flex-col items-center text-center  gap-3 mb-12 '>
          <h2 className='  font-bold text-5xl'>Roadmap 2025-2026</h2>
          <p className='text-base tracking-wide text-gray-400 font-semibold leading-tight '>
            Step by step, our roadmap guides you through discovery, planning,
            design, development, deployment, and ongoing maintenance, ensuring
            transparency and progress every step of the way.
          </p>
        </div>
      </ScrollReveal>
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

  const renderTextCustom = (title: string, text: any) => {
    const textCustom = text.map((text1: string, index: number) => {
      return (
        <div className='flex gap-2' key={index}>
          <p className='font-bold'>✧</p>
          <p>{text1}</p>
        </div>
      );
    });

    return (
      <div className='h-fit flex flex-col gap-5 rounded-xl roadmap-shadow tracking-wider p-6 border'>
        <p className='leading-6 font-bold text-xl'>{title}</p>
        {textCustom}
      </div>
    );
  };

  const renderLeftItem = (number: string, value: any) => {
    return (
      <div className='h-fit relative flex flex-col md:flex-row max-w-[35rem] my-10 tablet:my-5 col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto tracking-normal '>
        {renderNumberLeft(number)}
        {renderTextCustom(value.title, value.text)}
      </div>
    );
  };

  const renderRightItem = (number: string, value: any) => {
    return (
      <div className='h-fit relative flex flex-col-reverse md:flex-row max-w-[35rem] my-10 tablet:my-5 col-start-6 col-end-10 mr-auto md:mr-0 md:ml-auto tracking-normal '>
        {renderTextCustom(value.title, value.text)}
        {renderNumberRight(number)}
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

  return (
    <section
      id='#roadmap'
      className='lg:py-6 mt-28 relative mx-auto  px-4 xl:px-16 text-white flex flex-col items-center'
    >
      {renderHeader()}
      <div className='flex flex-col grid-cols-9 p-2 mx-auto md:grid'>
        <div className='flex md:contents flex-row-reverse'>
          <ScrollReveal
            className="col-start-1 col-end-5
              justify-self-end
              flex flex-col md:flex-row
              max-w-[35rem]
              my-6 tablet:my-4"
            direction='left'
            duration={3}
            distance={200}
            delay={0.1}
          >
            {renderLeftItem('01', {
              title: 'Project Inception and Token Creation',
              text: [
                'Finalize project vision and branding: “By office workers, for office workers.”',
                'Launch of $RICHARD token on the Abstract blockchain.',
              ],
            })}
          </ScrollReveal>

          {renderMiddleItem()}
          {renderBlankRightItem()}
        </div>
        <div className='flex md:contents '>
          {renderBlankLeftItem()}
          {renderMiddleItemReverse()}
          <ScrollReveal
            className="
                col-start-6 col-end-10
                justify-self-start
                flex flex-col-reverse md:flex-row
                max-w-[35rem]
                my-6 tablet:my-4"
            direction='right'
            duration={3}
            distance={200}
            delay={0.1}
          >
            {renderRightItem('02', {
              title: 'Community Growth & Awareness',
              text: [
                'Community building on Telegram & X.',
                'Initial marketing push to attract early supporters.',
              ],
            })}
          </ScrollReveal>
        </div>
        <div className='flex md:contents flex-row-reverse'>
          <ScrollReveal
            className="col-start-1 col-end-5
              justify-self-end
              flex flex-col md:flex-row
              max-w-[35rem]
              my-6 tablet:my-4"
            direction='left'
            duration={3}
            distance={200}
            delay={0.1}
          >
            {renderLeftItem('03', {
              title: 'Mini Game Development',
              text: [
                'Design mini game concepts.',
                'Prototype release for community feedback.',
                'Game testing by early $RICHARD holders.',
              ],
            })}
          </ScrollReveal>
          {renderMiddleItem()}
          {renderBlankRightItem()}
        </div>
        <div className='flex md:contents '>
          {renderBlankLeftItem()}
          {renderMiddleItemReverse()}

          <ScrollReveal
            className="
                col-start-6 col-end-10
                justify-self-start
                flex flex-col-reverse md:flex-row
                max-w-[35rem]
                my-6 tablet:my-4"
            direction='right'
            duration={3}
            distance={200}
            delay={0.1}
          >
            {renderRightItem('04', {
              title: 'Launch & Scale',
              text: [
                'Launch official Mini Games with Smart Contract',
                'Expand game collection and user engagement features.',
              ],
            })}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
