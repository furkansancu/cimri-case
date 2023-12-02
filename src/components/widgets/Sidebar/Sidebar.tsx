import { useState } from "react";
import { useSelector } from "react-redux";
import { MdOutlineTune } from "react-icons/md";

import { GlobalStatesType } from "@/components/commonTypes";

import SidebarFilter from "./SidebarFilters/SidebarFilter";
import Button from "@/components/ui/Button/Button";

import { SidebarContainer, FiltersDropdown } from "./Sidebar.styles";


function Sidebar() {
  const [dropdown, setDropdown] = useState(false);

  const products = useSelector((state: GlobalStatesType) => state.products.all);

  const brands =  [...products.map((p) => p.brand.name)].filter((i, k, s) => s.indexOf(i) == k);
  const merchants = [...products.map((p) => p.topOffers.map((o) => o.merchant.name)).flat(1)].filter((i, k, s) => s.indexOf(i) == k);

  const filters = [
    {
      title: "Marka Filtresi",
      name: "brand",
      method: "checkbox",
      values: brands
    },
    {
      title: "Satıcı Filtresi",
      name: "merchant",
      method: "checkbox",
      values: merchants
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