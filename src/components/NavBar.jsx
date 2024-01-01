import { useState } from "react";
import SideBar from "./SideBar";
import { Link, useLocation } from "react-router-dom";

import {
  faHome,
  faList,
  faMessage,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const [showSideBar, setShowSideBar] = useState(false);
  const location = useLocation();
  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome,
    },
    {
      name: "My Habits",
      path: "/myhabits",
      icon: faList,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: faMessage,
    },
    {
      name: "Log In",
      path: "/login",
      icon: faUser,
    },
  ];

  function closeSideBar() {
    setShowSideBar(false);
  }

  return (
    <>
      <div className="navbar container">
        <a className="logo" href="#!">
          Hab-It All
        </a>
        <div className="nav-links">
          {links.map((link) => (
            <Link
              to={link.path}
              key={link.name}
              className={location.pathname == link.path ? "active" : ""}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div
          onClick={() => setShowSideBar(true)}
          className={showSideBar ? "sidebar-btn active" : "sidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSideBar && <SideBar close={closeSideBar} links={links} />}
    </>
  );
}
