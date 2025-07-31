'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import NavLink from './components/NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './components/MenuOverlay';
import Image from 'next/image';
import WalletProvider from '../Wallet';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
// import WalletProvider from './components/WalletButton';

const Navbar: React.FC = () => {
  const { connection } = useConnection();
  const [isNavbar, setIsNavbar] = useState(false);
  const [balance, setBalance] = useState<number | null>(null);

  const navLinks = [
    { title: 'Home', path: '#home' },
    { title: 'About', path: '#about' },
    { title: 'Roadmap', path: '#roadmap' },
    { title: 'DEX', path: '#dex' },
  ];

  return (
    <nav className='fixed mx-auto border  border-[#33353F] top-0 left-0 right-0 z-10 bg-black bg-opacity-90'>
      <div className='flex flex-wrap container items-center justify-between mx-auto p-8'>
        <Link href={'/'} className='flex flex-row space-x-0'>
          <Image
            src='/images/icons-m.png'
            alt='Martin'
            width={50}
            height={50}
            className='p-0 m-0'
          />
        </Link>
        {/* <WalletProvider /> */}
        <WalletProvider />
        <div className='mobile-menu block md:hidden'>
          {isNavbar ? (
            <button
              className='flex items-center px-3 py-2 border  hover:text-slate-300 hover:border-slate-300 border-white text-white rounded-lg'
              onClick={() => setIsNavbar(false)}
            >
              <XMarkIcon className='h-5 w-5' />
            </button>
          ) : (
            <button
              className='flex items-center px-3 py-2 border border-white hover:border-slate-300  rounded-lg'
              onClick={() => setIsNavbar(true)}
            >
              <Bars3Icon className='h-5 w-5' color='white' />
            </button>
          )}
        </div>
        <div className='menu hidden md:block' id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isNavbar ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
