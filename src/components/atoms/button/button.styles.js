import styled from "styled-components";

const Primary = styled.button`
  border: 1px solid white;
  border-radius: 4px;
  background-color: black;
  color: white;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 700;
  padding: 8px 16px;
  box-shadow: 0px 8px 15px rgb(0 0 0 / 35%);

  :disabled {
    opacity: 0.8;
  }

  :hover {
    background-color: #313131;
    transform: scale(1.03);
  }

  :active {
    transform: scale(1.01);
  }
`;

export { Primary };
