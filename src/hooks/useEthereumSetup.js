import { useState, useEffect } from 'react';

export const useEthereumSetup = () => {
    const [chainId, setChainId] = useState('')
    const [accounts, setAccounts] = useState([])
    const [loading, setLoading] = useState(false)

    const onChainChanged = () => {
        setChainId(window.ethereum.chainId)
    }

    const onAccountChanged = () => {
        setAccounts([window.ethereum.selectedAddress])
    }

    useEffect(() => {        
        if (window.ethereum) {
            setLoading(true)
            window.ethereum.on('chainChanged', onChainChanged);
            window.ethereum.on('accountsChanged', onAccountChanged);
            window.ethereum.on('connect', onAccountChanged);
            window.ethereum.on('disconnect', onAccountChanged);
            
            setTimeout(() => {
                onChainChanged()
                onAccountChanged()
                setLoading(false)
            }, 1000);
        }
    
        return () => {
            if (window.ethereum) {
                window.ethereum.removeListener('chainChanged', onChainChanged);
                window.ethereum.removeListener('accountsChanged', onAccountChanged);
                window.ethereum.removeListener('connect', onAccountChanged);
                window.ethereum.removeListener('disconnect', onAccountChanged);
            }
        };
      }, []);

      return { chainId, accounts, loading, setLoading }
}