import ProductCard from "./ProductCard/ProductCard"

import { List, ListItem } from "./ProductList.styles";

import RawData from "../../../../public/data.json";

function ProductList () {
  return (
    <List>
      {
        RawData.map((product, key) =>
          <ListItem
            key={key}
            >
            <ProductCard
              title={product.title}
              image={product.imageUrl}
              offers={product.topOffers}
              />
          </ListItem>
        )
      }
    </List>
  )
}

export default ProductList