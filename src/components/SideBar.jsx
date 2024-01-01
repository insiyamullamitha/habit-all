import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SideBar({ close, links }) {
  return (
    <>
      <div className="sidebar" onClick={close}>
        {links.map((link) => (
          <a className="sidebar-link" href="#!" key={link.name}>
            <FontAwesomeIcon icon={link.icon} />
            {link.name}
          </a>
        ))}
      </div>
    </>
  );
}
