import React from "react";
import "./SidebarOptions.css";

function SidebarOptions({ title, Icon }) {
  return (
    <div className="sidebarOptions">
        {Icon && <Icon className="sidebarOptions__Icons" />}
        {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SidebarOptions;
