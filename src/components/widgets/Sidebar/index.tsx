import { useState } from "react";
import { useSelector } from "react-redux";
import { IconAdjustments } from '@tabler/icons-react';

import { GlobalStatesType } from "@/components/commonTypes";

import SidebarFilter from "@/components/widgets/Sidebar/SidebarFilter";
import Button from "@/components/ui/Button";

import { SidebarContainer, FiltersDropdown } from "./Sidebar.styles";

function Sidebar() {
  const [dropdown, setDropdown] = useState(false);

  const products = useSelector((state: GlobalStatesType) => state.products.all);

  const brands = [...products.map((p) => p.brand.name)].filter((i, k, s) => s.indexOf(i) == k);
  const merchants = [...products.map((p) => p.topOffers.map((o) => o.merchant.name)).flat(1)].filter((i, k, s) => s.indexOf(i) == k);

  return (
    <SidebarContainer>
      <Button
        variant="secondary"
        style={{
          width: "100%",
          height: "40px"
        }}
        icon={<IconAdjustments size={18} />}
        className="hideDesktop"
        onClick={() => setDropdown(!dropdown)}
      >
        Filtreler
      </Button>
      <FiltersDropdown $active={dropdown}>
        <SidebarFilter
          title={"Marka Filtresi"}
          name={"brand"}
          method={"checkbox"}
          values={brands}
          style={{ marginTop: 0 }}
        />
        <SidebarFilter
          title={"Satıcı Filtresi"}
          name={"merchant"}
          method={"checkbox"}
          values={merchants}
        />
        <SidebarFilter
          title={"Marka Filtresi"}
          name={"price"}
          method={"range"}
          values={["EN DŞK. FİYAT", "EN YKS. FİYAT"]}
        />
      </FiltersDropdown>
    </SidebarContainer>
  )
}

export default Sidebar;