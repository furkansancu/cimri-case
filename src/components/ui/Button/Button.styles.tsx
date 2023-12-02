import styled from "styled-components";
import { borderGray, lightThemeColor, themeColor } from "@/components/sharedStyles";

const commonButtonStyle = `
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    padding: 3px 5px;
    gap: 5px;
    &:disabled {
        opacity: 0.6;
    }
`;

export const PrimaryButton = styled.button`
    ${commonButtonStyle}
    background-color: ${lightThemeColor};
    color: ${themeColor};
    border: none;
`

export const SecondaryButton = styled.button`
    ${commonButtonStyle}
    background-color: #fff;
    color: #000;
    border: 1px solid ${borderGray};
`

export const ButtonElement = styled.span`
    display: flex;
    align-items: center;
    height: 100%;
`