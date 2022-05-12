import styled from "styled-components";

const SetupContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 60px auto;
`

const SetupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 300px;
    border: 1px solid #76848f;
    border-radius: 4px;
    padding: 24px 16px;

    @media screen and (min-width: 768px) {
        max-width: 500px;
    }
`

const SetupText = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-bottom: 8px;
    color: #1f1f1f;
    word-break: break-all;
`

const SetupTextKey = styled.span`
    margin-right: 8px;
    font-weight: 700;
`

const ButtonWrapper = styled.div`
    text-align: center;
    margin-top: 16px;
`

export { SetupContainer, SetupWrapper, SetupText, SetupTextKey, ButtonWrapper }