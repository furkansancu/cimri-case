import { createSlice, createSelector } from "@reduxjs/toolkit";
import { ProductType, FilterType, GlobalStatesType } from "@/components/commonTypes";

const initialState = {
  all: [] as ProductType[],
  filtered: [] as ProductType[],
  filters: [] as FilterType[],
};

const productReducerSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setProducts: (state, actions) => {
      state.all = actions.payload;
      state.filtered = actions.payload;
    },

    setFilter: (state, actions) => {
      const newFilters = [...state.filters];
      const { name, type, value } = actions.payload;

      // Check if filter exists in state
      const filterIndex = newFilters.findIndex(
        (filter) => filter.type === type && filter.name === name
      );

      // Check activity.
      const checkbox = (type == "brand" || type == "merchant") && value;
      const search = type == "search" && typeof value == "string" && value.length > 2;
      const range = type == "range" && Array.isArray(value) && value.some(v => v > 0);

      const active = checkbox || search || range;
      const filterSelf = { name, type, value, active }

      // Set filter.
      if (filterIndex === -1) newFilters.push(filterSelf)
      else newFilters[filterIndex] = filterSelf

      state.filters = newFilters;

      // Filter products.
      const brandFilters: string[] = newFilters.filter(
        filter => filter.type === "brand" && filter.active
      ).map(filter => filter.name);
      const merchantFilters: string[] = newFilters.filter(
        filter => filter.type === "merchant" && filter.active
      ).map(filter => filter.name);
      const priceFilters = newFilters.find(
        filter => filter.name === "price" && filter.active
      );
      const searchFilter = newFilters.find(
        filter => filter.name === "search" && filter.active
      );

      state.filtered = state.all.filter((product: ProductType) => {
        if (
          brandFilters.length > 0 &&
          !brandFilters.includes(product.brand.name)
        ) return false;

        if (
          merchantFilters.length > 0 &&
          !product.topOffers.some(
            offer => merchantFilters.includes(offer.merchant.name)
          )
        ) return false;

        if (priceFilters !== undefined && Array.isArray(priceFilters.value)) {
          const minPrice = priceFilters.value[0];
          const maxPrice = priceFilters.value[1];

          if (!product.topOffers.some(offer => {
            return (!(minPrice !== undefined && minPrice > 0) || offer.price >= minPrice) &&
              (!(maxPrice !== undefined && maxPrice > 0) || offer.price <= maxPrice)
          })) return false;
        }

        if (
          searchFilter !== undefined &&
          typeof searchFilter.value == "string" &&
          !product.title.toLowerCase().includes(searchFilter.value.toLowerCase()) &&
          !product.brand.name.toLowerCase().includes(searchFilter.value.toLowerCase())
        ) return false;

        // Don't remove if not filtered.
        return true;
      });
    }
  }
});

export const { setProducts, setFilter } = productReducerSlice.actions;
export default productReducerSlice.reducer;

// Useful selectors.
const getActiveFilters = createSelector(
  (state: GlobalStatesType) => state.products.filters,
  (state: GlobalStatesType) => state.products.filters.filter(f => f.active),
  (filters, filtered) => filters.filter(f => filtered.includes(f))
);

const findFilter = createSelector(
  (state: GlobalStatesType) =>
    state.products.filters,
  (state: GlobalStatesType, type: string, name: string) =>
    state.products.filters.find(f => f.type == type && f.name === name),
  (filters, found) =>
    filters.find(f => f === found)
);

const getFilterProducts = createSelector(
  (state: GlobalStatesType) => state.products.filtered,
  (state: GlobalStatesType, type: string, name: string) => state.products.filtered.filter(p => {
    if (type == "brand") return p.brand.name == name;
    else if (type == "merchant") return p.topOffers.filter(offer => offer.merchant.name == name).length > 0;
    else return false;
  }),
  (products, filtered) => products.filter(p => filtered.includes(p))
);

const getFiltersAndProducts = createSelector(
  (state: GlobalStatesType) => state.products,
  (state: GlobalStatesType) => { return { filters: state.products.filters, products: state.products.filtered } },
  (oldState, newState) => {
    return {
      filters: oldState.filters.filter(f => newState.filters.includes(f)),
      products: oldState.filtered.filter(f => newState.products.includes(f))
    }
  }
);

export { getActiveFilters, findFilter, getFilterProducts, getFiltersAndProducts };