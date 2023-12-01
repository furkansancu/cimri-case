import ProductCard from "./ProductCard/ProductCard"

import { List, ListItem } from "./ProductList.styles";

import RawData from "../../../../public/data.json";
import FilterBar from "./FilterBar/FilterBar";
import Pagination from "@/components/ui/Pagination/Pagination";

function ProductList() {
  return (
    <>
      <FilterBar
      
      />
      <List>
        {
          RawData.slice(0, 9).map((product, key) =>
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
        <Pagination
          page={1}
          maxPage={9}
          setPage={()=>{}}
          />
    </>
  )
}

export default ProductList