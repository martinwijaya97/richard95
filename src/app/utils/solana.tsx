import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';

// Function to connect to Solana wallet and get the balance
export const getSolanaBalance = async (
  publicKeyString: string
): Promise<string> => {
  try {
    // Create a connection to the Solana devnet (or mainnet)
    const connection = new Connection(
      clusterApiUrl('mainnet-beta'),
      'confirmed'
    );

    // Convert the public key string to a PublicKey object
    const publicKey = new PublicKey(publicKeyString);

    // Get the balance in lamports
    const balanceLamports = await connection.getBalance(publicKey);

    // Convert balance from lamports to SOL
    const balanceSol = balanceLamports / 1e9; // 1 SOL = 1e9 lamports

    return `Public Key: ${publicKey.toBase58()}\nBalance: ${balanceSol} SOL`;
  } catch (error) {
    console.error('Error fetching Solana balance:', error);
    throw error;
  }
};
