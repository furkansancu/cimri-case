import styled from "styled-components";
import { lightThemeColor, themeColor } from "@/components/sharedStyles";

export const StyledButton = styled.button`
    background-color: ${lightThemeColor};
    color: ${themeColor};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 3px;
`