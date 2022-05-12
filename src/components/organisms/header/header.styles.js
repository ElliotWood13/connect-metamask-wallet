import styled from "styled-components";

const HeaderWrapper = styled.header`
  width: 100%;
  z-index: 10;
  background-color: #fff;
`;

const HeaderContentWrapper = styled.div`
  padding: 32px 20px;

  @media screen and (min-width: 1440px) {
    padding: 32px 0;
    width: 1200px;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export { HeaderWrapper, HeaderContentWrapper };
