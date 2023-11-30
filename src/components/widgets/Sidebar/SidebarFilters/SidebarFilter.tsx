import FilterCheckbox from "./FilterCheckbox";
import FilterRange from "./FilterRange";

import { FilterWrapper, FilterHeader, FilterContainer } from "./SidebarFilter.styles";

interface SidebarFilterProps {
  title: string;
  method: string;
  name: string;
  values: string[];
}

function SidebarFilter (props: SidebarFilterProps) {
  return (
    <FilterWrapper>
        <FilterHeader> {props.title} </FilterHeader>
        <FilterContainer>
          {
            props.method == "checkbox" ? 
              props.values.map((filter, key) => (
                  <FilterCheckbox
                    key={key}
                    type={props.name}
                    name={filter}
                    />
              ))
            :
            props.method == "range" ?
              <FilterRange
                name={props.name}
                values={props.values}
                />
            : null
          }
        </FilterContainer>
    </FilterWrapper>
  )
}

export default SidebarFilter