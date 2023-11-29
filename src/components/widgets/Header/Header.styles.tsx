import { maxMobileSize } from "@/components/sharedStyles";
import styled from "styled-components"

export const HeaderBlock = styled.header`
    position: sticky;
    top: 0;
    width: 100%;
    height: 72px;
    background: #fff;
    z-index: 100;
    padding: 16px;
`;

export const HeaderWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 1024px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    flex-shrink: 0;
    flex-wrap: no-warp;
`;