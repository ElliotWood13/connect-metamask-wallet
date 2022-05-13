import { useState, useEffect } from 'react';

export const useEthereumListeners = () => {
    const [chainId, setChainId] = useState('')
    const [accounts, setAccounts] = useState([])

    const onChainChanged = (id) => {
        setChainId(id)
    }

    const onAccountChanged = (acc) => {
        setAccounts(acc)
    }

    useEffect(() => {        
        if (window.ethereum) {
            window.ethereum.on("chainChanged", onChainChanged);
            window.ethereum.on('accountsChanged', onAccountChanged);
            setTimeout(() => {
                onChainChanged(window.ethereum.chainId)
                onAccountChanged([window.ethereum.selectedAddress])
            }, 1000);
        }
    
        return () => {
            if (window.ethereum) {
                window.ethereum.removeListener("chainChanged", onChainChanged);
                window.ethereum.removeListener('accountsChanged', onAccountChanged);
            }
        };
      }, []);
      
      return { chainId, accounts}
}