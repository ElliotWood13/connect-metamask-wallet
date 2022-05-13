import styled from "styled-components";

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: flex-end;
  padding: 32px 20px;
  border-top: 1px solid #e8e7ec;
  background-color: #000;

  @media screen and (min-width: 1024px) {
    padding: 32px;
  }
`;

const FooterText = styled.p`
  color: #cccccc;
`;

export { FooterWrapper, FooterText };
