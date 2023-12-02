import styled from "styled-components";

import { textGray, themeColor } from "@/components/sharedStyles";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    padding: 8px 16px;
    border: 2px solid ${themeColor};
    border-radius: 3px;
`

export const Input = styled.input`
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    background: none;
    font-size: 0.85em;
    font-weight: 500;
    margin: 0;
    padding: 0;

    &:placeholder {
        color: ${textGray};
    }
`