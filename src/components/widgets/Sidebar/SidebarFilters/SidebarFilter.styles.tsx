import styled from "styled-components";
import { tabletSize, textGray } from "@/components/sharedStyles";

export const FilterWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
  @media (max-width: ${tabletSize}px) {
    padding: 0 6px;
  }
`;

export const FilterContainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  gap: 5px;

  @media (min-width: ${tabletSize + 1}px) {
    padding: 16px;
  }
`;

export const FilterHeader = styled.span`
  margin-bottom: 10px;
  font-size: 0.75em;
  font-weight: 500;
  color: ${textGray};
`;