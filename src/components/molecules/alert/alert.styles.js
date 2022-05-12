import styled from "styled-components";

const AlertMessageWrapper = styled.div`
  padding: 16px 24px;
  width: fit-content;
  border-radius: 4px;
  margin: 24px auto;
  background-color: ${props => props.state === 'error' ? '#fdeded' : '#edf7ed'};
  border: 1px solid ${props => props.state === 'error' ? '#5f2120' : '#4c6e4e'};
`;

const AlertMessageText = styled.p`
  color: ${props => props.state === 'error' ? '#5f2120' : '#4c6e4e'};
`;

export { AlertMessageWrapper, AlertMessageText };
