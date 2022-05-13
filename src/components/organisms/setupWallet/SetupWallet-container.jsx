import { useState } from 'react'
import { onConnectWallet } from '../../../utils/onConnectWallet'
import { onCheckNetwork } from '../../../utils/onCheckNetwork'
import { onChangeNetwork } from '../../../utils/onChangeNetwork'
import { useEthereumListeners } from '../../../hooks/useEthereumListeners'
import { networks } from '../../../networks'
import { SetupWallet } from './SetupWallet'

export const SetupWalletContainer = () => {
    const [status, setStatus] = useState({ state: '', message: '' })
    const [loading, setLoading] = useState(false)
    const { chainId, accounts } = useEthereumListeners()
    const bscChainId = networks.bsc.chainId
    const setupComplete = chainId === bscChainId && accounts[0]

    // correct chain variable
    // flicker when getting data at start - loading spinner and walletReady state?
    // componentise setup complete

    /*
        Questions:
        - Should I try to wallet_switchEthereumChain before wallet_addEthereumChain
        - Is it best practice to have a connect wallet button and then a switch network button?
        - Is setTimeout necessary when wanting to do anything with window.ethereum on mount so that the task goes on the callback task queue behind MetaMask injecting it's API to the window?
    */
    
    const handleConnectWallet = async () => {
        setStatus({ state: '', message: '' })
        setLoading(true)

        if (window.ethereum) {
            try {
                await onConnectWallet().then((response) => {
                    if (response.length === 0) throw Error('You need to login to MetaMask.')
                })

                if (chainId === bscChainId) {
                    setLoading(false)
                    return
                }
    
                await onChangeNetwork(networks.bsc)

                const checkedId = await onCheckNetwork()

                if (checkedId === bscChainId) {
                    setLoading(false)
                    return
                } else {
                    throw Error('MetaMask was unable to switch network. Please try again..')
                }

            } catch (error) {
                setLoading(false)
                setStatus({ state: 'error', message: error.message })
            }} 
        else {
            setLoading(false)
            setStatus({ state: 'error', message: 'You need to install the MetaMask Chrome Extension to use this website.' })
        }
    }
    return (
        <SetupWallet 
            setupComplete={setupComplete} 
            accounts={accounts} 
            chainId={chainId} 
            status={status} 
            handleConnectWallet={handleConnectWallet} 
            loading={loading}  
        />
    )
}