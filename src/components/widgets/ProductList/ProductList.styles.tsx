import { desktopSize, mobileSize, textGray } from "@/components/sharedStyles";
import styled from "styled-components";

export const List = styled.div`
    position: relative;
    display: block;
    margin: -5px;
`

export const ListItem = styled.div`
    display: inline-block;
    height: 384px;
    padding: 5px;
    vertical-align: top;

    @media (max-width: ${mobileSize}px) {
        width: 100%;
    }

    @media (min-width: ${mobileSize + 1}px) and (max-width: ${desktopSize}px) {
        width: 50%;
    }

    @media (min-width: ${desktopSize + 1}px) {
        width: 33.3333%;
    }
`

export const NoResult = styled.div`
  background: #fff;
  border-radius: 3px;
  margin: 5px;
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${textGray};
`