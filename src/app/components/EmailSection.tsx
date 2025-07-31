'use client';
import React, { useState } from 'react';
import SocialLinks from './SocialLinks';
import InputField from './InputField';
import TextAreaField from './TextAreaField';
import GradientButton from './GradientButton';

const EmailSection: React.FC = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const dataJSON = JSON.stringify(data);
    const endPoint = '/api/send';

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: dataJSON,
    };

    const response = await fetch(endPoint, options);

    if (response.status === 200) {
      console.log('message sent');
      setEmailSubmitted(true);
    }
  };

  const renderEmailSubmitted = () => {
    if (emailSubmitted) {
      return (
        <p className='text-green-500 text-sm mt-2'>Email sent successfully</p>
      );
    }
  };

  return (
    <section
      id='#contact'
      className='text-white grid px-4 xl:px-16 md:grid-cols-2 my-12 py-24 gap-4'
    >
      <div>
        <h5 className='text-xl font-bold text-white my-2'>
          Let&apos;s Connect
        </h5>
        <p className='text-gray-400 mb-4 max-w-md'>
          I&apos;m currently looking for opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my
          best to get back to you.
        </p>
        <SocialLinks />
      </div>
      <div>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <InputField
            id='email'
            label='Your Email'
            type='email'
            placeholder='martinwijaya97@gmail.com'
          />
          <InputField
            id='subject'
            label='Subject'
            type='text'
            placeholder='Just saying hello'
          />
          <TextAreaField
            id='message'
            label='Message'
            placeholder='Your message here'
          />
          <GradientButton type='submit' text='Send Message' />
          {renderEmailSubmitted()}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
