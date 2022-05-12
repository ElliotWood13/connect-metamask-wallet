export const onConnectWallet = async () => {
    const response = await window.ethereum.request({ method: "eth_requestAccounts" })
    
    return response
  }