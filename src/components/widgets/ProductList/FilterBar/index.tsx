import { useDispatch, useSelector } from "react-redux";
import { getActiveFilters, setFilter } from "@/redux/productsReducer";

import { FilterType, GlobalStatesType } from "../../../commonTypes";

import { Container, DeleteButton, Filter } from "./FilterBar.styles";

function FilterBar() {
  const dispatch = useDispatch();
  const activeFilters = useSelector((state: GlobalStatesType) => getActiveFilters(state));

  const filterNamer = (filter: FilterType) => {
    if (filter.type == "brand")
      return `Marka: ${filter.name}`;
    else if (filter.type == "merchant")
      return `Satıcı: ${filter.name}`;
    else if (filter.name == "search")
      return `Arama: ${filter.value}`;

    else if (filter.name == "price" && Array.isArray(filter.value))
      return isNaN(filter.value[0]) || filter.value[0] < 0 ? `En Yüksek Fiyat: ${filter.value[1]} TL`
        : isNaN(filter.value[1]) || filter.value[0] < 0 ? `En Düşük Fiyat: ${filter.value[0]} TL`
          : `Fiyat Aralığı: ${filter.value[0]} - ${filter.value[1]} TL`;

    else return "";
  }

  const removeFilter = (type: string, name: string) => {
    dispatch(setFilter({ type, name, value: null }));
  };

  return (
    <>
      {
        activeFilters.length > 0 ?
        <Container>
          {
            activeFilters.map((filter: FilterType, key: number) => (
              <Filter key={key}>
                <DeleteButton onClick={() => { removeFilter(filter.type, filter.name) }}>
                  X
                </DeleteButton>
                <span> {filterNamer(filter)} </span>
              </Filter>
            ))
          }
        </Container> : null
      }
    </>
  );
}

export default FilterBar