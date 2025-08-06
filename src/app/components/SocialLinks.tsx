import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import TwitterIcon from '../../../public/icons-twitter.png';
import TelegramIcon from '../../../public/icons-telegram.png';

const SocialLinks: React.FC = () => {
  return (
    <div className='socials flex flex-row gap-2'>
      <Link
        href='https://x.com/Richard9to5'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image src={TwitterIcon} alt='Github Icon' width={60} height={60} />
      </Link>
      <Link
        href='https://t.me/+oxc4mKqEGA8xNTk9'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image src={TelegramIcon} alt='LinkedIn Icon' width={60} height={60} />
      </Link>
    </div>
  );
};

export default SocialLinks;
