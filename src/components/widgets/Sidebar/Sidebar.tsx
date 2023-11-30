import { MdOutlineTune } from "react-icons/md";

import Button from "@/components/ui/Button/Button";

import { SidebarContainer, MobileButtons } from "./Sidebar.styles";
import SidebarFilter from "./SidebarFilters/SidebarFilter";

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
          filters.map((filter, key) => 
            <Button
              key={key}
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
      {
        filters.map((filter, key) => 
          <SidebarFilter
            key={key}
            name={filter.name}
            />
        )
      }
    </SidebarContainer>
  )
}

export default Sidebar;