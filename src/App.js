import { SetupWallet } from './components/organisms/setupWallet'

// if wallet is not connected, the button will connect to the BNB Smart Chain Mainnet 
// if wallet's current network isn't BNB Smart Chain Mainnet, it will need to ask metamask to change the network to BSC 
// ONCE CONNECTED, please show the connected network ID & wallet address wherever on the page

// when I change the network or address on metamask, wallet address & network ID needs to be changed on the page accordingly
// const bscNetwork = {
//   chainId: `0x38`,
//   chainName: "Binance Smart Chain Mainnet",
//   nativeCurrency: {
//     name: "Binance Chain Native Token",
//     symbol: "BNB",
//     decimals: 18
//   },
//   rpcUrls: [
//     "https://bsc-dataseed1.binance.org",
//     "https://bsc-dataseed2.binance.org",
//     "https://bsc-dataseed3.binance.org",
//     "https://bsc-dataseed4.binance.org",
//     "https://bsc-dataseed1.defibit.io",
//     "https://bsc-dataseed2.defibit.io",
//     "https://bsc-dataseed3.defibit.io",
//     "https://bsc-dataseed4.defibit.io",
//     "https://bsc-dataseed1.ninicoin.io",
//     "https://bsc-dataseed2.ninicoin.io",
//     "https://bsc-dataseed3.ninicoin.io",
//     "https://bsc-dataseed4.ninicoin.io",
//     "wss://bsc-ws-node.nariox.org"
//   ],
//   blockExplorerUrls: ["https://bscscan.com"]
// }

// const onConnectWallet = async () => {
//   if (window.ethereum) {
//     await window.ethereum
//       .request({ method: "eth_requestAccounts" })
//       .then(() => {
//         onCheckNetwork()
//       })
//       .catch(() => console.log('You need to login to MetaMask'))
//   } else {
//     console.log('You need to install the MetaMask Chrome Extension')
//   }
// }

// const onCheckNetwork = async () => {
//   // do we need to check window.eth again?
//   if (window.ethereum) {
//     const currentChainId = await window.ethereum.request({
//       method: 'eth_chainId',
//     });
    
//     if (currentChainId === bscNetwork.chainId) return;

//     onChangeNetwork();
//   }
// };

// const onChangeNetwork = async () => {
//     // do we need to check window.eth?
//     await window.ethereum.request({
//       method: "wallet_addEthereumChain",
//       params: [bscNetwork]
//     }).then(response => console.log('onChangeNetwork Response', response)).catch(() => console.log('Error onChangeNetwork'));
// };

function App() {
  return (
    <div>
      <header></header>
      <main><SetupWallet /></main>
      <footer></footer>
    </div>
  );
}

export default App;