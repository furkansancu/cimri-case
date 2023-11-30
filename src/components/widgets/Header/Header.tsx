import HeaderSearch from "./HeaderSearch/HeaderSearch";

import Logo from "@/components/ui/Logo/Logo";
import Button from "@/components/ui/Button/Button";

import { MdHouse } from "react-icons/md";

import { HeaderBlock, HeaderWrapper } from "./Header.styles";

function Header() {
  return (
    <HeaderBlock>
      <HeaderWrapper>
        {/* Hide logo in mobile */}
        <Logo
          to="/"
          classNames={["hideMobile", "hideTablet"]}
          />
        {/* Show button in mobile */}
        <Button
          icon={<MdHouse size={24} />}
          width={40}
          height={40}
          classNames={["hideDesktop"]}
          flexShrink="0"
          />
        <HeaderSearch />
      </HeaderWrapper>
    </HeaderBlock>
  )
}

export default Header;