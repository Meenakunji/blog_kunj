import { ethers } from "ethers";
import detectProvider from "@metamask/detect-provider";
import Web3Modal from "web3modal";

let provider;
let signer;

export const initWeb3 = async () => {
  try {
    provider = await detectProvider();
    if (!provider) {
      console.log("MetaMask not available");
      return false;
    }

    const web3Modal = new Web3Modal({
      cacheProvider: true,
      providerOptions: {},
    });

    const ethProvider = await web3Modal.connect();

    provider = new ethers.providers.Web3Provider(ethProvider);
    signer = provider.getSigner();

    return true;
  } catch (error) {
    console.log("Error connecting to MetaMask:", error);
    return false;
  }
};

export const getSigner = () => {
  return signer;
};
