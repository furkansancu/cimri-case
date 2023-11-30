import { MdOutlineTune } from "react-icons/md";

import Button from "@/components/ui/Button/Button";

import { SidebarContainer, MobileButtons } from "./Sidebar.styles";

function Sidebar() {
  const filters = [
    {name: "Marka Filtresi"},
    {name: "Satıcı Filtresi"},
    {name: "Fiyat Aralığı"},
  ];
  return (
    <SidebarContainer>
      <MobileButtons
        className={"hideDesktop"}
        >
        {
          filters.map(filter => 
            <Button
              variant="secondary"
              width="100%"
              height="40px"
              fontSize="0.75em"
              icon={ <MdOutlineTune size={14} /> }
              >
              {filter.name}
            </Button>
          )
        }
      </MobileButtons>
    </SidebarContainer>
  )
}

export default Sidebar;