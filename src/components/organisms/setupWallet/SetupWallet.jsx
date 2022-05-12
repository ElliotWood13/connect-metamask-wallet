import { useState, useEffect } from 'react'
import { onConnectWallet } from '../../../utils/onConnectWallet'
import { onCheckNetwork } from '../../../utils/onCheckNetwork'
import { onChangeNetwork } from '../../../utils/onChangeNetwork'
import { useEthereumListeners } from '../../../hooks/useEthereumListeners'
import { networks } from '../../../networks'
import { Alert } from '../../molecules/alert'
import { PrimaryButton } from '../../atoms/button'
import { SetupContainer, SetupWrapper, SetupText, SetupTextKey, ButtonWrapper } from './setupWallet.styles'

export const SetupWallet = () => {
    const [status, setStatus] = useState({ state: '', message: '' })
    const [loading, setLoading] = useState(false)
    const { chainId, setChainId, accounts } = useEthereumListeners()
    const bscChainId = networks.bsc.chainId
    const setupComplete = chainId === bscChainId

    // Do this inside useEthereumListeners alongside getting account on mount?
    useEffect(() => {
        if (window.ethereum) {
            onCheckNetwork().then(response => setChainId(response))
        }
    }, [setChainId])
    
    const handleConnectWallet = async () => {
        setStatus({ state: '', message: '' })

        if (window.ethereum) {
            try {
                setLoading(true)

                await onConnectWallet().then((response) => {
                    if (response.length === 0) throw Error('You need to login to MetaMask.')
                })

                if (chainId === bscChainId) return
    
                await onChangeNetwork(networks.bsc)

                const checkedId = await onCheckNetwork()

                if (checkedId === bscChainId) { 
                    setStatus({ state: 'success', message: 'You have successfully connected your wallet!' }) 
                } else {
                    throw Error('MetaMask was unable to switch network. Please try again..')
                }

                setLoading(false)

            } catch (error) {
                setLoading(false)
                setStatus({ state: 'error', message: error.message })
            }} 
        else {
            setStatus({ state: 'error', message: 'You need to install the MetaMask Chrome Extension to use this website.' })
        }
    }

    return (
        <SetupContainer>
            <SetupWrapper>
                {accounts[0] ? <SetupText><SetupTextKey>Connected account:</SetupTextKey>{accounts[0]}</SetupText> : null}
                {chainId && <SetupText><SetupTextKey>Connected network:</SetupTextKey>{chainId}</SetupText>}
                {!setupComplete && <ButtonWrapper><PrimaryButton text="Connect Wallet" onClick={handleConnectWallet} disabled={loading} /></ButtonWrapper>}
                {status.state && <Alert {...status} />}
            </SetupWrapper>
        </SetupContainer>
    )
}