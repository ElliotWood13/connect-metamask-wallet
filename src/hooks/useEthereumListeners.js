import { useState, useEffect } from 'react'

export const useEthereumListeners = () => {
    const [chainId, setChainId] = useState('')
    const [accounts, setAccount] = useState([])

    const onChainChanged = (id) => {
        setChainId(id)
    }

    const onAccountChanged = (acc) => {
        setAccount(acc)
    }

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on("chainChanged", onChainChanged);
            window.ethereum.on('accountsChanged', onAccountChanged);
        }
    
        return () => {
            if (window.ethereum) {
                window.ethereum.removeListener("chainChanged", onChainChanged);
                window.ethereum.removeListener('accountsChanged', onAccountChanged);
            }
        };
      }, []);
    
      return { chainId, setChainId, accounts}
}