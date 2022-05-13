import { Alert } from '../../molecules/alert'
import { PrimaryButton } from '../../atoms/button'
import { WalletData } from '../../atoms/walletData'
import { SetupContainer, SetupWrapper, ButtonWrapper } from './setupWallet.styles'

export const SetupWallet = ({ setupComplete, accounts, chainId, status, handleConnectWallet, loading }) => {
    return (
        <SetupContainer>
            <SetupWrapper>
                    <WalletData account={accounts[0]} chainId={chainId} />
                    {!setupComplete && (
                        <>
                            <ButtonWrapper>
                                <PrimaryButton text="Connect Wallet" onClick={handleConnectWallet} disabled={loading} aria-label="Connect your MetaMask wallet" />
                            </ButtonWrapper>
                            {status.state && <Alert {...status} />}
                        </>
                    )}
            </SetupWrapper>
        </SetupContainer>
    )
}