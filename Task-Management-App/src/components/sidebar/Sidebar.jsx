import React from "react";
import "./sidebar.css";
import DashboardIcon from "../../assets/dashboard_icon.svg";
import AddIcon from "../../assets/add_icon.svg";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          {/* Add user information here */}
          <p>Hey user</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active">
                <img src={DashboardIcon} alt="" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create" activeClassName="active">
                <img src={AddIcon} alt="" />
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

