import React from "react";
import "./sidebar.css";
import DashboardIcon from "../../assets/dashboard_icon.svg";
import AddIcon from "../../assets/add_icon.svg";
import { NavLink } from "react-router-dom";
import Avatar from "../avatar/Avatar";
import { useAuthContext } from "../../hooks/useAuthContext";

const Sidebar = () => {

  const {user} = useAuthContext();
  console.log(user)
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          <p>👋 Heyyy, {user.displayName}</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink exact to="/" activeclassname="active">
                <img src={DashboardIcon} alt="" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create" activeclassname="active">
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

