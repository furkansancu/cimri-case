import styled from "styled-components";

import { borderGray, themeColor } from "@/components/sharedStyles";

export const StyledCheckbox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    border: 2px solid ${borderGray};
    border-radius: 3px;
    flex-shrink: 0;

    &.active {
        border: none;
        background-color: ${themeColor};
    }
`