import HeaderSearch from "./HeaderSearch/HeaderSearch";

import Logo from "@/components/ui/Logo/Logo";
import Button from "@/components/ui/Button/Button";

import { MdHouse } from "react-icons/md";

import { HeaderContainer, HeaderWrapper } from "./Header.styles";

function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        {/* Hide logo in mobile */}
        <Logo
          to="/"
          className="hideMobile hideTablet"
          />
        {/* Show button in mobile */}
        <Button
          icon={<MdHouse size={24} />}
          className="hideDesktop"
          style={{
            width: "40px",
            height: "40px",
            flexShrink: "0"
          }}
          />
        <HeaderSearch />
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header;