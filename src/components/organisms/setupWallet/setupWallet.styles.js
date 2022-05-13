import styled from "styled-components";

const SetupContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 20px;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
        padding: 60px;
    }
`

const SetupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 300px;
    border: 1px solid #76848f;
    border-radius: 4px;
    padding: 24px 16px;
    box-shadow: 6px 3px 96px 0px rgb(95 94 92 / 66%);

    @media screen and (min-width: 768px) {
        max-width: 500px;
    }
`

const ButtonWrapper = styled.div`
    text-align: center;
    margin-top: 16px;
`

export { SetupContainer, SetupWrapper, ButtonWrapper }