import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import {
  ConnectionProvider,
  WalletProvider,
  useWallet,
} from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
import solanaWeb3, {
  clusterApiUrl,
  PublicKey,
  Connection,
  LAMPORTS_PER_SOL,
} from '@solana/web3.js';

// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');

function formatNumber(num: number) {
  return Math.floor(num * 10000) / 10000;
}

const WalletAddressDisplay: FC = () => {
  const { publicKey, connected } = useWallet();
  const [balance, setBalance] = useState<number | null>(null);

  const connection = useMemo(
    () =>
      new Connection(
        'https://divine-empty-paper.solana-mainnet.quiknode.pro/5abc503c90a4b3871ba90209296e83d5208523f5',
        {
          commitment: 'confirmed',
          confirmTransactionInitialTimeout: 60000,
        }
      ),
    []
  );

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const balanceLamports = await connection.getBalance(publicKey);
        const balanceSol = balanceLamports / LAMPORTS_PER_SOL; // Convert from lamports to SOL

        console.log('MARTIN', balanceSol);
        setBalance(formatNumber(balanceSol));
      } catch (error) {
        console.error('Failed to fetch balance', error);
      }
    };

    if (publicKey) {
      fetchBalance();
    }
  }, [publicKey, connection]);

  const renderTextBalance = () => {
    if (balance !== null) {
      return <p className='text-white'>Balance: {balance} SOL</p>;
    }
  };

  const renderTextAddress = () => {
    return <p>Connected Wallet Address: {publicKey.toBase58()}</p>;
  };
  const renderInfo = () => {
    if (connected && publicKey) {
      return (
        <div className='text-white'>
          {renderTextAddress()}
          {renderTextBalance()}
        </div>
      );
    }
  };

  return renderInfo();
};

const Wallet: FC = () => {
  const wallet = useWallet();

  const connectWallet = useCallback(async () => {
    if (!wallet.connected && wallet.connect) {
      await wallet.connect();
      console.log('Connected:', wallet.publicKey?.toBase58());
    }
  }, [wallet]);

  return (
    <div>
      {/* <button
        disabled={wallet.connected}
        onClick={connectWallet}
        style={{
          padding: '10px 20px',
          background: 'orange',
          borderRadius: '5px',
          color: 'white',
        }}
      >
        {wallet.connected
          ? `Wallet Address ${wallet.publicKey.toBase58()}`
          : ' Connect to Solflare'}
      </button> */}
      {/* <WalletMultiButton /> */}
      {/* <WalletDisconnectButton /> */}
      <WalletAddressDisplay />
    </div>
  );
};

export default Wallet;
