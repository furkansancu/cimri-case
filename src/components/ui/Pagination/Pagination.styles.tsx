import { tabletSize } from "@/components/sharedStyles";
import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    gap: 5px;
    margin-top: 10px;
    overflow: hidden;

    @media (max-width: ${tabletSize}px) {
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
    }
`