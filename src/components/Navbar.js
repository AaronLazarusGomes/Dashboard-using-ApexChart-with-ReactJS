import React, { useState } from "react";
import "./Navbar.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";
import * as MdIcons from "react-icons/md";
import * as CgIcons from "react-icons/cg";
import { Link } from "react-router-dom";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showBar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showBar} />
        </Link>
        <span className="options"> Pages </span>
        <span className="options"> Reports </span>
        <span className="options"> Apps </span>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showBar}>
          <li className="navbar-toggle">
            <CgIcons.CgProfile style={{ color: "white", fontSize: 20 }} />
            <span style={{ color: "white" }}>Keen</span>
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>

          <li className="nav-text">
            <span style={{ marginRight: 10 }}>
              <FaIcons.FaHome />
            </span>
            Home
          </li>
          <li className="nav-text">
            <span style={{ marginRight: 10 }}>
              <FiIcons.FiSettings />
            </span>
            Settings
          </li>
          <li className="nav-text">
            <span style={{ marginRight: 10 }}>
              <FaIcons.FaHome />
            </span>
            Something
          </li>
          <li className="nav-text">
            <span style={{ marginRight: 10 }}>
              <FaIcons.FaRocket />
            </span>
            Custom
          </li>

          <li className="nav-text">
            <span style={{ marginRight: 10 }}>
              <FaIcons.FaWpforms />
            </span>
            Forms
          </li>
          <li className="nav-text">
            <span style={{ marginRight: 10 }}>
              <AiIcons.AiOutlineGift />
            </span>
            Icons
          </li>
          <li className="nav-text">
            <span style={{ marginRight: 10 }}>
              <AiIcons.AiOutlineCalendar />
            </span>
            Calendar
          </li>
          <li className="nav-text">
            <span style={{ marginRight: 10 }}>
              <MdIcons.MdWidgets />
            </span>
            Widgets
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
