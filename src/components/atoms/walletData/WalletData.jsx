import { WalletDataWrapper, SetupText, SetupTextKey } from './walletData.styles'

export const WalletData = ({ account, chainId }) => {
    return (
        <WalletDataWrapper>
            <SetupText><SetupTextKey>Connected account:</SetupTextKey>{account}</SetupText>
            <SetupText><SetupTextKey>Connected network:</SetupTextKey>{chainId}</SetupText>
        </WalletDataWrapper>
    )
}