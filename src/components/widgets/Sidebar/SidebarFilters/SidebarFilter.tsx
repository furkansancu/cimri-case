interface SidebarFilterProps {
    name: string;
}

function SidebarFilter (props: SidebarFilterProps) {
  return (
    <div>
        {props.name}
    </div>
  )
}

export default SidebarFilter