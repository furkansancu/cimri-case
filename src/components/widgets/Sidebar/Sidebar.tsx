import { useState } from "react";

import { MdOutlineTune } from "react-icons/md";

import SidebarFilter from "./SidebarFilters/SidebarFilter";
import Button from "@/components/ui/Button/Button";

import { SidebarContainer, FiltersDropdown } from "./Sidebar.styles";

function Sidebar() {
  const [dropdown, setDropdown] = useState(false);
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
      <Button
        variant="secondary"
        style={{
          width: "100%",
          height: "40px",
          fontSize: "0.75em",
        }}
        icon={<MdOutlineTune size={14} />}
        className="hideDesktop"
        onClick={() => setDropdown(!dropdown)}
      >
        Filtreler
      </Button>
      <FiltersDropdown $active={dropdown}>
        {
          filters.map((filter, key) =>
            <SidebarFilter
              key={key}
              title={filter.title}
              name={filter.name}
              method={filter.method}
              values={filter.values}
              style={key == 0 ? { marginTop: 0 } : {}}
            />
          )
        }
      </FiltersDropdown>
    </SidebarContainer>
  )
}

export default Sidebar;