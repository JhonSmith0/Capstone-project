import { Link, Outlet } from "react-router-dom";
import { crown } from "../../assets/icons";

import "./index.scss";

export default function Navigation() {
  return (
    <>
      <div className="navigation">
        <Link to={"/"} className="logo-container">
          {crown}
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
