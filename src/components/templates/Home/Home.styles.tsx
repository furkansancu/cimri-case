import { desktopSize, layoutGap, layoutGridColumns, tabletSize } from "@/components/sharedStyles";
import styled from "styled-components";

export const HomeWrapper = styled.div`
    width: 100%;
    margin-top: 16px;

    @media (max-width: ${tabletSize}px) {
        padding: 0 16px;
    }
`

export const HomeContainer = styled.div`
    width: 100%;
    max-width: ${desktopSize}px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 5px;

    @media (min-width: ${tabletSize + 1}px) {
        display: grid;
        grid-template-columns: ${layoutGridColumns};
        gap: ${layoutGap};
    }
`

export const HomeMain = styled.main``