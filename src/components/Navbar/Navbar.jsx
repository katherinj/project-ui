import { Link } from "react-router-dom";

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
  //  const logoUrl = "../../media/balance-scale.png";

  return (
    <div className="logo">
      <Link to="/"></Link>
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
