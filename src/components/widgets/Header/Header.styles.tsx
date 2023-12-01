import { layoutGap, layoutGridColumns, desktopSize, tabletSize, borderGray } from "@/components/sharedStyles";
import styled from "styled-components"

export const HeaderWrapper = styled.header`
    position: sticky;
    top: 0;
    width: 100%;
    height: 72px;
    background: #fff;
    z-index: 100;
    padding: 16px;

    border-bottom: 1px solid ${borderGray};

    @media (min-width: ${tabletSize + 1}px) {
        height: 92px;
    }
`;

export const HeaderContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: ${desktopSize}px;
    height: 100%;
    margin: 0 auto;

    display: flex;
    align-items: center;
    gap: 5px;

    @media (min-width: ${tabletSize + 1}px) {
        display: grid;
        grid-template-columns: ${layoutGridColumns};
        gap: ${layoutGap};
    }
`;