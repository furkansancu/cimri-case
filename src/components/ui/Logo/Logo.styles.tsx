import Link from "next/link";
import styled from "styled-components";

import { themeColor } from "@/components/sharedStyles";

export const LogoLink = styled(Link)`
    color: ${themeColor};
    font-size: 1.5em;
    flex-shrink: 0;
    user-select: none;
`