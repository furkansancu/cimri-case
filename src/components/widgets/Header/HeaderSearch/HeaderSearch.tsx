import { useDispatch, useSelector } from "react-redux"

import { findFilter, setFilter } from "@/redux/productsReducer";
import { GlobalStatesType } from "@/components/commonTypes";

import { Container, Input } from "./HeaderSearch.styles"

interface HeaderSearchProps {
  name: string
}

function HeaderSearch (props: HeaderSearchProps) {
  const dispatch = useDispatch();
  const filter = useSelector((state: GlobalStatesType) => findFilter(state, "search", props.name));

  const SearchHandler = (e: { target: { value: string } }) => {
    dispatch(
      setFilter({
        type: "search",
        name: props.name,
        value: e.target.value,
      })
    );
  };

  return (
    <Container>
        <Input
          type="text"
          name="search"
          placeholder="Marka veya ürün ara..."
          value={typeof filter?.value == "string" ? filter?.value : ""}
          onChange={SearchHandler}
          />
    </Container>
  )
}

HeaderSearch.defaultProps = {
  name: "search"
}

export default HeaderSearch;