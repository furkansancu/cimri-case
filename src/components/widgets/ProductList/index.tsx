import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getFiltersAndProducts } from "@/redux/productsReducer";

import { GlobalStatesType } from "@/components/commonTypes";

import FilterBar from "@/components/widgets/ProductList/FilterBar";
import ProductCard from "@/components/widgets/ProductList/ProductCard"
import Pagination from "@/components/ui/Pagination";

import { List, ListItem, NoResult } from "./ProductList.styles";

const LIST_CONTENT_COUNT = 9;

function ProductList() {
  const [page, setPage] = useState(1);
  const {filters, products} = useSelector((state: GlobalStatesType) => getFiltersAndProducts(state));
  const maxPage = Math.ceil(products.length / LIST_CONTENT_COUNT);

  // Filtreler her değiştiğinde ilk sayfaya dön.
  useEffect(() => {setPage(1)}, [filters]);
  
  return (
    <>
      <FilterBar />
      <List>
        {
          products.slice((page - 1) * LIST_CONTENT_COUNT, page * LIST_CONTENT_COUNT).map((product, key) =>
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
        { products.length == 0 ? <NoResult> Sonuç bulunamadı. </NoResult> : null }
      </List>
      { products.length > 0 ? <Pagination
        page={page}
        maxPage={maxPage}
        setPage={(newPage: number)=>setPage(newPage)}
        /> : null }
    </>
  )
}

export default ProductList