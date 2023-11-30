import styled from "styled-components";

import { mobileSize, placeholderColor, themeColor } from "@/components/sharedStyles";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    padding: 8px 16px;
    border: 1px solid ${themeColor};
    border-radius: 3px;
    
    @media screen and (min-width: ${mobileSize + 1}px) {
        border-width: 2px;
    }
`

export const Input = styled.input`
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    background: none;
    font-weight: 500;
    margin: 0;
    padding: 0;

    &:placeholder {
        color: ${placeholderColor};
    }
`