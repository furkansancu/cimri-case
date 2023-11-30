import styled from "styled-components";
import { textGray } from "@/components/sharedStyles";

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
`;

export const FilterContainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  gap: 5px;
  padding: 16px;
`;

export const FilterHeader = styled.span`
  margin-top: 15px;
  margin-bottom: 10px;
  font-size: 0.75em;
  font-weight: 500;
  color: ${textGray};
`;