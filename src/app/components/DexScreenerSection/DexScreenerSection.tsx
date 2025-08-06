import React from 'react';
import LazyIframe from '../LazyIframe';

interface DexScreenerSectionProps {
  contractAddress?: string;
  blockchain?: string;
  title?: string;
  description?: string;
}

const DexScreenerSection: React.FC<DexScreenerSectionProps> = ({
  contractAddress = '0xf374ed71e8922077cf8300d4a1fedadaace11093',
  blockchain = 'abstract',
  title = 'Token Analytics',
  description = 'Real-time token analytics and trading data',
}) => {
  return (
    <section id='#dex' className='py-16 '>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            {title}
          </h2>
          <p className='text-gray-300 text-lg max-w-2xl mx-auto'>
            {description}
          </p>
        </div>

        <div className='max-w-6xl mx-auto'>
          <div className='bg-gray-800 rounded-lg p-6 shadow-2xl'>
            <div className='bg-black rounded-lg overflow-hidden'>
              <LazyIframe
                src={`https://dexscreener.com/${blockchain}/${contractAddress}`}
                title='Dex Screener Chart'
              />
            </div>

            <div className='mt-6 text-center'>
              <p className='text-gray-400 text-sm'>
                Powered by{' '}
                <a
                  href='https://dexscreener.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-400 hover:text-blue-300 transition-colors'
                >
                  DexScreener
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DexScreenerSection;
