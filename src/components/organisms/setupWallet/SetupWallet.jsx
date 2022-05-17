import { Alert } from '../../molecules/alert'
import { PrimaryButton } from '../../atoms/button'
import { WalletData } from '../../atoms/walletData'
import { SetupContainer, SetupWrapper, ButtonWrapper } from './setupWallet.styles'

export const SetupWallet = ({ setupComplete, accounts, chainId, status, handleConnectWallet, loading }) => {
    const buttonText = !!accounts[0] ? 'Change Network' : 'Connect Wallet'
    const buttonLabel = !!accounts[0] ? 'Change wallet network' : 'Connect your MetaMask wallet'
    
    return (
        <SetupContainer>
            <SetupWrapper>
                    <WalletData account={accounts[0]} chainId={chainId} />
                    {!setupComplete && (
                        <>
                            <ButtonWrapper>
                                <PrimaryButton text={buttonText} onClick={handleConnectWallet} disabled={loading} aria-label={buttonLabel} />
                            </ButtonWrapper>
                            {status.state && <Alert {...status} />}
                        </>
                    )}
            </SetupWrapper>
        </SetupContainer>
    )
}