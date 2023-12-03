import { borderGray, textGray } from "@/components/sharedStyles";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  overflow-y: auto;
  max-height: 52px;
  margin-bottom: 5px;
  padding-bottom: 5px;
`;

export const Filter = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  flex-shrink: 0;
  height: 32px;
  background-color: #fff;
  color: #555;
  font-weight: 500;
  padding: 4px 6px;
  border-radius: 3px;
  cursor: default;
  user-select: none;
  border: 1px solid ${borderGray};
`;

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  background: ${textGray}30;
  border-radius: 3px;
  font-size: 0.75em;
  font-weight: bold;
  overflow: hidden;
  color: #555;
  margin-right: 4px;
`;