import HeaderSearch from "./HeaderSearch";
import { useRouter } from "next/router";

import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";

import { IconHome } from '@tabler/icons-react';

import { HeaderContainer, HeaderWrapper } from "./Header.styles";

function Header() {
  const router = useRouter();
  const goTo = async (to: string = "/") => {await router.push(to)};
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
          icon={<IconHome size={24} />}
          className="hideDesktop"
          style={{
            width: "40px",
            height: "40px",
            flexShrink: "0"
          }}
          onClick={goTo}
          />
        <HeaderSearch
          name="search"
          />
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header;