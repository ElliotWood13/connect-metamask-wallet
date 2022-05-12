import { useState, useEffect } from 'react'
import { onConnectWallet } from '../../../utils/onConnectWallet'
import { onCheckNetwork } from '../../../utils/onCheckNetwork'
import { onChangeNetwork } from '../../../utils/onChangeNetwork'
import { Alert } from '../../molecules/alert'
import { networks } from '../../../networks'
import { useEthereumListeners } from '../../../hooks/useEthereumListeners'

export const SetupWallet = () => {
    const [status, setStatus] = useState({ state: '', message: '' })
    const [loading, setLoading] = useState(false)
    const { chainId, setChainId, accounts } = useEthereumListeners()
    const bscChainId = networks.bsc.chainId
    console.log('accounts', accounts);
    console.log('chainId', chainId);

    useEffect(() => {
        if (window.ethereum) {
            onCheckNetwork().then(response => setChainId(response))
        }
    }, [setChainId])
    
    const handleConnectWallet = async () => {
        setStatus({ state: '', message: '' })

        if (window.ethereum) {
            setLoading(true)

            await onConnectWallet().then((response) => {
                return response  
            }).catch(() => {
                setLoading(false)
                setStatus({ state: 'error', message: 'You need to login to MetaMask.' })
                return
            })
            
            if (chainId === bscChainId) return
    
            await onChangeNetwork(networks.bsc)

            const checkedId = await onCheckNetwork()

            if (checkedId === bscChainId) { 
                setStatus({ state: 'success', message: 'You have successfully connected your wallet!' }) 
            } else {
                setStatus({ state: 'error', message: 'MetaMask was unable to switch network. Please try again..' })
                setLoading(false)
            }
    
            setLoading(false)
        } else {
            setStatus({ state: 'error', message: 'You need to install the MetaMask Chrome Extension to use this website.' })
        }

    }


    return (
        <>
        {bscChainId === chainId ? (
            <h2>Welcome to Impact</h2>
            ) : (
            <>
                <button onClick={handleConnectWallet} disabled={loading}>Connect Wallet</button>
                {status.state ? <Alert {...status} /> : null}
            </>
            )}
        </>
    )
}