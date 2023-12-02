import styled from "styled-components";
import Image from "next/image";
import { borderGray, textGray, themeColor } from "@/components/sharedStyles";

export const Card = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #fff;
    border: 1px solid ${borderGray};
    border-radius: 3px;
    padding: 15px;
    width: 100%;
    height: 100%;
`

export const CardImage = styled(Image)`
  object-fit: contain;
  background: #fff;
`

export const Title = styled.h3`
  display: block;
  font-size: 0.75em;
  height: 30px;
  overflow: hidden;
`

export const Offers = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 90px;
`

export const OfferButton = styled.a`
  display: flex;
  justify-content: space-between;
  height: 42px;
  padding: 7px 0;
  border-radius: 3px;
  cursor: pointer;
  font-weight: bold;
  transition: padding ease-in-out 0.2s;

  &:hover {
    background-color: #f3f3f3;
    padding-left: 7px;
  }
`

export const OfferInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const OfferForward = styled.div`
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
`

export const OfferOwner = styled.span`
  font-size: 0.65em;
  color: ${themeColor}BF;
`

export const OfferPrice = styled.span`
  font-size: 0.95em;
`

export const NoOffer = styled.div`
  display: flex;
  width: 100%;
  height: 38px;
  justify-content: center;
  align-items: center;
  color: ${textGray};
`