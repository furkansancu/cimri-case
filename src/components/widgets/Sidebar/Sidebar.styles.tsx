import { tabletSize } from "@/components/sharedStyles";
import styled from "styled-components";

export const SidebarContainer = styled.div`
    position: sticky;
    top: 107px;
    height: fit-content;
    margin-bottom: 5px;

    @media (max-width: ${tabletSize}px) {
        position: inherit;
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
        padding-top: 0 !important;
    }
`