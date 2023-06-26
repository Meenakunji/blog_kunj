import React, { useState } from "react";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";

const WalletComponent = () => {
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);

  const INFURA_ID = "aec8651d16b0461a844ba5a6cc70e08c";
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: INFURA_ID,
      },
    },
  };

  const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true,
    providerOptions: providerOptions,
  });

  const connectWallet = async (wallet) => {
    setSelectedWallet(wallet);

    try {
      const selectedProvider = await web3Modal.connectTo(wallet);
      setProvider(selectedProvider);

      if (wallet === "walletconnect") {
        const web3Provider = new ethers.providers.Web3Provider(
          selectedProvider
        );
        setSigner(web3Provider.getSigner());
      } else {
        // Handle other wallet options
      }
    } catch (error) {
      console.error("Error connecting to wallet:", error);
    }
  };

  const disconnectWallet = async () => {
    if (provider && provider.close) {
      await provider.close();
    }

    web3Modal.clearCachedProvider();
    setSelectedWallet(null);
    setProvider(null);
    setSigner(null);
  };

  return (
    <div>
      {!selectedWallet && (
        <div>
          <button onClick={() => connectWallet("walletconnect")}>
            Connect Wallet
          </button>
          {/* Render other wallet options */}
        </div>
      )}

      {selectedWallet && (
        <div>
          <p>Connected Wallet: {selectedWallet}</p>
          {/* Render connected wallet information and actions */}
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
        </div>
      )}
    </div>
  );
};

export default WalletComponent;
