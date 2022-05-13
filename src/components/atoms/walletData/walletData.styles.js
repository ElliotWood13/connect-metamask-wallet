import styled from "styled-components";

const SetupText = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-bottom: 8px;
    word-break: break-all;

    :last-child {
        margin-bottom: 0;
    }
`

const SetupTextKey = styled.span`
    color: #ffc30d;
    margin-bottom: 8px;
    font-weight: 700;
`

export { SetupText, SetupTextKey }