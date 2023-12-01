// import { useDispatch, useSelector } from "react-redux";
// import { FilterType, ReduxStateType } from "../commonTypes";
// import { getActiveFilters, setFilter } from "@/app/reducers/productReducer";

import { Container, DeleteButton, Filter } from "./FilterBar.styles";

function FilterBar() {
    //   const dispatch = useDispatch();
    //   const activeFilters = useSelector((state: ReduxStateType) => getActiveFilters(state));

    //   const filterNamer = (filter: FilterType) => {
    //     if (filter.type == "brand" )
    //       return `Marka: ${filter.name}`;
    //     else if (filter.type == "merchant")
    //       return `Satıcı: ${filter.name}`;
    //     else if (filter.name == "search")
    //       return `Arama: ${filter.value}`;

    //     else if (filter.name == "price" && Array.isArray(filter.value))
    //       return isNaN(filter.value[0]) || filter.value[0] < 0 ? `En Yüksek Fiyat: ${filter.value[1]} TL`
    //       : isNaN(filter.value[1]) || filter.value[0] < 0 ? `En Düşük Fiyat: ${filter.value[0]} TL`
    //       : `Fiyat Aralığı: ${filter.value[0]} - ${filter.value[1]} TL`;

    //     else return "";
    //   }

    const removeFilter = (type: string, name: string) => {
        // dispatch(setFilter({ type, name, value: null }));
    };

    return (
        <Container>
            {
                // activeFilters.map((filter: FilterType, key: number) => (
                //   <Filter key={key}>
                //     <DeleteButton onClick={() => {removeFilter(filter.type, filter.name)}}>
                //       X
                //     </DeleteButton>
                //     <span> {filterNamer(filter)} </span>
                //   </Filter>
                // ))
            }
            <Filter>
                <DeleteButton>
                    X
                </DeleteButton>
                <span> Marka: Apple </span>
            </Filter>
        </Container>
    );
}

export default FilterBar