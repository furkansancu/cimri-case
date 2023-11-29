import { Container, Input } from "./HeaderSearch.styles";

function HeaderSearch () {
  return (
    <Container>
        <Input
            type="text"
            name="search"
            placeholder="Marka veya ürün ara..."
            />
    </Container>
  )
}

export default HeaderSearch;