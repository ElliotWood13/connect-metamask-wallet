import { Alert } from '../../molecules/alert'
import { PrimaryButton } from '../../atoms/button'
import { WalletData } from '../../atoms/walletData'
import { SetupContainer, SetupWrapper, ButtonWrapper } from './setupWallet.styles'

export const SetupWallet = ({ setupComplete, accounts, chainId, status, handleConnectWallet, loading }) => {
    return (
        <SetupContainer>
            <SetupWrapper>
                {setupComplete ? (
                    <WalletData account={accounts[0]} chainId={chainId} />
                ) : (
                    <>  
                        <ButtonWrapper setupComplete={setupComplete}><PrimaryButton text="Connect Wallet" onClick={handleConnectWallet} disabled={loading} /></ButtonWrapper>
                        {status.state && <Alert {...status} />}
                    </>
                )}
            </SetupWrapper>
        </SetupContainer>
    )
}