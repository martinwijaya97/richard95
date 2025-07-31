import { useState } from 'react';
import { getSolanaBalance } from '../../../utils/solana';

const WalletConnect: React.FC = () => {
  const [publicKey, setPublicKey] = useState<string>('');
  const [balance, setBalance] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleCheckBalance = async () => {
    try {
      const balance = await getSolanaBalance(publicKey);
      setBalance(balance);
    } catch (err) {
      setError('Failed to fetch balance');
    }
  };

  return (
    <div>
      <input
        className='flex items-center px-3 py-2 border  hover:text-slate-300 hover:border-slate-300 border-white text-white rounded-lg'
        type='text'
        value={publicKey}
        onChange={(e) => setPublicKey(e.target.value)}
        placeholder='Enter Solana Public Key'
      />
      <button
        className='flex items-center px-3 py-2 border  hover:text-slate-300 hover:border-slate-300 border-white text-white rounded-lg'
        onClick={handleCheckBalance}
      >
        Check Balance
      </button>
      {balance && <p className='text-white'>{balance}</p>}
      {error && <p className='text-white'>{error}</p>}
    </div>
  );
};

export default WalletConnect;
