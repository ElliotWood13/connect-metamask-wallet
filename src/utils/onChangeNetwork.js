export const onChangeNetwork = async (network) => {
    const response = await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [network]
    })
    
    return response
};