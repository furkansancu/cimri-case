import { desktopSize, tabletSize } from "@/components/sharedStyles";
import styled from "styled-components";

export const SidebarContainer = styled.div`
    margin-bottom: 5px;

    @media (max-width: ${tabletSize}px) {
        background-color: #fff;
        border-radius: 5px;
        padding: 5px;
    }
`

interface FiltersDropdownProps {
    $active: boolean
}

export const FiltersDropdown = styled.div<FiltersDropdownProps>`
    display: block;
    padding-top: 10px;
    padding-bottom: 5px;
    box-sizing: content-box;

    ${(props: FiltersDropdownProps) => !props.$active && ({
        display: "none"
    })}

    @media (min-width: ${tabletSize + 1}px) {
        display: block !important;
    }
`