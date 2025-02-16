import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { SidebarData } from "../components/Helpers/sidebardata";

function Sidebar() {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li key={key} className="row" id={window.location.pathname === val.link ? "active" : ""}>
              <Link to={val.link} className="nav-link" activeClassName="active">
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;