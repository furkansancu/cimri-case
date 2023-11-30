import { desktopSize, mobileSize } from "@/components/sharedStyles";
import styled from "styled-components";

export const SidebarContainer = styled.div`
    background-color: #fff;
    border-radius: 5px;
    padding: 5px;
`

export const MobileButtons = styled.nav`
    display: flex;
    gap: 5px;

    // @media (max-width: ${mobileSize}px) {
    //     flex-direction: column;
    // }
`