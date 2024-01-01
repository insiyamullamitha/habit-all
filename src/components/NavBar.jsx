
import { useState } from 'react';
import SideBar from './SideBar'

import { faHome, faList, faMessage, faUser } from '@fortawesome/free-solid-svg-icons'

export default function NavBar(){
  const [showSideBar, setShowSideBar] = useState(false)
  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome
    },
    {
      name: "My Habits",
      path: "/myhabits",
      icon: faList
    },
    {
      name: "Contact",
      path: "/contact",
      icon: faMessage
    },
    {
      name: "Log In",
      path: "/login",
      icon: faUser
    }
  ]

  function closeSideBar(){
    setShowSideBar(false)
  }

  return (
    <>
      <div className="navbar container">
        <a className="logo" href="#!">Hab-It All</a>
        <div className="nav-links">
          { links.map(link => (
            <a href="#!" key={link.name}>{link.name}</a>
          ))}
        </div>
        <div onClick={() => setShowSideBar(true)} className={showSideBar ? "sidebar-btn active" : "sidebar-btn"}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      { showSideBar && <SideBar close={closeSideBar} links={links}/> }
    </>
  )
}
