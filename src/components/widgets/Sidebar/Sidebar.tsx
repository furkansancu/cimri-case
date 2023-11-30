import { MdOutlineTune } from "react-icons/md";

import Button from "@/components/ui/Button/Button";

import { SidebarContainer, MobileButtons } from "./Sidebar.styles";
import SidebarFilter from "./SidebarFilters/SidebarFilter";

function Sidebar() {
  const filters = [
    {
      title: "Marka Filtresi",
      name: "brand",
      method: "checkbox",
      values: ["Apple", "Samsung", "Xiaomi"]
    },
    {
      title: "Satıcı Filtresi",
      name: "merchant",
      method: "checkbox",
      values: ["Amazon", "Hepsiburada", "Trendyol"]
    },
    {
      title: "Fiyat Aralığı",
      name: "price",
      method: "range",
      values: ["EN DŞK. FİYAT", "EN YKS. FİYAT"]
    },
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
            title={filter.title}
            name={filter.name}
            method={filter.method}
            values={filter.values}
            />
        )
      }
    </SidebarContainer>
  )
}

export default Sidebar;