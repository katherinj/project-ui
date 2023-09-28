import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        <Logo />
        <NavLinks />
      </div>
    </nav>
  );
}

export function Logo() {
  const logoUrl = "https://www.flixster.com/logo/logo_Mobile.svg";

  return (
    <div className="logo">
      <Link to="/">
        <img src={logoUrl} className="icon" />
      </Link>
    </div>
  );
}

export function NavLinks() {
  return (
    <div className="nav-links">
      <Link to="/movies">
        <label className="link-label">Movies</label>
      </Link>
      <Link to="/customers">
        <label className="link-label">Customers</label>
      </Link>
      <Link to="/reports">
        <label className="link-label">Reports</label>
      </Link>
    </div>
  );
}
