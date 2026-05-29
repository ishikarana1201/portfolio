import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ active, setActive }: any) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ];

  return (
    <nav className="navbar">
      <div className="logo">IR.</div>

      {/* Desktop + Mobile Menu */}
      <ul className={menuOpen ? "nav-links mobile-menu" : "nav-links"}>
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className={active === item ? "active-link" : ""}
              onClick={() => {
                setActive(item);
                setMenuOpen(false);
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <a className="resume-btn" href="./Ishika_Rana.pdf" download>
        Download Resume
      </a>

      {/* Hamburger Icon */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;