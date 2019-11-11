import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <Link to="/">Overview</Link>
        </li>
        <li>
          <Link to="/repositories">Repositories</Link>
        </li>
      </ul>
    </nav>
  );
}
