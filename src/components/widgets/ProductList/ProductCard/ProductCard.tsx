import { Card, CardImage, NoOffer, OfferButton, OfferForward, OfferInfo, OfferOwner, OfferPrice, Offers, Title } from "./ProductCard.styles";

interface ProductCardProps {
  title: string;
  image: string;
  offers: { price: number; }[]
}

function ProductCard(props: ProductCardProps) {
  return (
    <Card>
      <CardImage
          src={props.image}
          alt={props.title}
          priority={true}
          width="0"
          height="0"
          style={{width: "auto", height: "200px"}}
          sizes="100vw"
        />
        <Title>
          {props.title}
        </Title>
        <Offers>
          {
            props.offers.length > 0 ?
              props.offers.slice(0, 2).map((topoffer: any, key: number) =>
                <OfferButton key={key} href={topoffer.merchant.url} target="_blank">
                  <OfferInfo>
                    <OfferOwner>{topoffer.merchant.name}</OfferOwner>
                    <OfferPrice>{topoffer.price} TL</OfferPrice>
                  </OfferInfo>
                  <OfferForward>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12"><g fill="none" transform="translate(-17 -14)"><rect width="40" height="40" rx="4"></rect><path fill="#4A90E2" d="M24 20c0 .225-.091.44-.252.597l-5.355 5.172a.823.823 0 0 1-1.164-.023.832.832 0 0 1 .023-1.17L21.988 20l-4.736-4.576a.832.832 0 0 1-.023-1.17.82.82 0 0 1 1.164-.023l5.355 5.173c.16.156.252.371.252.596z"></path></g></svg>
                  </OfferForward>
                </OfferButton>
              )
              : <NoOffer>Teklif bulunamadı.</NoOffer>
          }
        </Offers>
    </Card>
  )
}

export default ProductCard