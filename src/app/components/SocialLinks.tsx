import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import GithubIcon from '../../../public/icons-github.svg';
import LinkedInIcon from '../../../public/icons-linkedin.svg';

const SocialLinks: React.FC = () => {
  return (
    <div className='socials flex flex-row gap-2'>
      <Link
        href='https://github.com/martinwijaya97'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image src={GithubIcon} alt='Github Icon' width={50} height={50} />
      </Link>
      <Link
        href='https://www.linkedin.com/in/martin-wijaya-4316241b9/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image src={LinkedInIcon} alt='LinkedIn Icon' width={50} height={50} />
      </Link>
    </div>
  );
};

export default SocialLinks;
