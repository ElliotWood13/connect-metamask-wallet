import { useState, useEffect } from 'react';

export const useEthereumSetup = () => {
    const [chainId, setChainId] = useState('')
    const [accounts, setAccounts] = useState([])
    const [loading, setLoading] = useState(false)

    const onChainChanged = (id) => {
        setChainId(id)
    }

    const onAccountChanged = (acc) => {
        setAccounts(acc)
    }

    useEffect(() => {        
        if (window.ethereum) {
            setLoading(true)
            window.ethereum.on("chainChanged", onChainChanged);
            window.ethereum.on('accountsChanged', onAccountChanged);
            
            setTimeout(() => {
                onChainChanged(window.ethereum.chainId)
                onAccountChanged([window.ethereum.selectedAddress])
                setLoading(false)
            }, 1000);
        }
    
        return () => {
            if (window.ethereum) {
                window.ethereum.removeListener("chainChanged", onChainChanged);
                window.ethereum.removeListener('accountsChanged', onAccountChanged);
            }
        };
      }, []);
      
      return { chainId, accounts, loading, setLoading }
}