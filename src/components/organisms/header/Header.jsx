import { HeaderContentWrapper, HeaderWrapper, Image, LogoText } from "./header.styles";

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContentWrapper>
        <Image src={require('../../../images/impact-logo.png')} />
        <LogoText>Impact Defi</LogoText>
      </HeaderContentWrapper>
    </HeaderWrapper>
  );
};
