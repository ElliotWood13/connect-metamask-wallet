import styled from "styled-components";

const HeaderWrapper = styled.header`
  width: 100%;
  z-index: 10;
  background-color: #000;
  border-bottom: 1px solid #cccccc;
`;

const HeaderContentWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 32px 20px;

  @media screen and (min-width: 1440px) {
    padding: 32px 0;
    width: 1200px;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
  filter: drop-shadow(2px 4px 8px rgba(255,195,13,1));
  margin-right: 8px;
`

const LogoText = styled.p`
  font-weight: 700;
  text-transform: uppercase;
`

export { HeaderWrapper, HeaderContentWrapper, LogoText, Image };
