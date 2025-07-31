import React from 'react';

interface DexScreenerSectionProps {
  contractAddress?: string;
  blockchain?: string;
  title?: string;
  description?: string;
}

const DexScreenerSection: React.FC<DexScreenerSectionProps> = ({
  contractAddress = 'YOUR_CONTRACT_ADDRESS_HERE',
  blockchain = 'solana',
  title = 'Token Analytics',
  description = 'Real-time token analytics and trading data',
}) => {
  return (
    <section
      id='#dex'
      className='py-16 bg-gradient-to-b from-black to-gray-900'
    >
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
            <div className='mb-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                {/* <div>
                  <label className='block text-white text-sm font-medium mb-2'>
                    Blockchain:
                  </label>
                  <select
                    value={blockchain}
                    onChange={(e) => {
                      // This would need to be handled by parent component
                      console.log('Blockchain changed to:', e.target.value);
                    }}
                    className='w-full bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none'
                  >
                    <option value='solana'>Solana</option>
                    <option value='ethereum'>Ethereum</option>
                    <option value='bsc'>Binance Smart Chain</option>
                    <option value='polygon'>Polygon</option>
                    <option value='arbitrum'>Arbitrum</option>
                    <option value='optimism'>Optimism</option>
                    <option value='avalanche'>Avalanche</option>
                    <option value='pumpfun'>PumpFun</option>
                  </select>
                </div> */}
                {/* <div>
                  <label className='block text-white text-sm font-medium mb-2'>
                    Contract Address:
                  </label>
                  <div className='flex items-center space-x-2'>
                    <input
                      type='text'
                      value={contractAddress}
                      readOnly
                      className='flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none'
                      placeholder='Enter contract address'
                    />
                    <button
                      onClick={() =>
                        navigator.clipboard.writeText(contractAddress)
                      }
                      className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors'
                    >
                      Copy
                    </button>
                  </div>
                </div> */}
              </div>
            </div>

            {/* <div className='bg-black rounded-lg overflow-hidden'>
              <iframe
                src={`https://dexscreener.com/${blockchain}/${contractAddress}`}
                title='DEX Screener'
                className='w-full h-[600px] border-0'
                allowFullScreen
              />
            </div> */}

            <div className='bg-black rounded-lg overflow-hidden'>
              <iframe
                src={`https://dexscreener.com/${blockchain}/${contractAddress}`}
                title='DEX Screener'
                className='w-full h-[600px] border-0'
                allowFullScreen
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
