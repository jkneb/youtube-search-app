import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => (
  <div className="menu">
    <ul>
      <li>
        <NavLink to="/videos">Videos</NavLink>
      </li>
      <li>
        <NavLink to="/styleguide">Styleguide</NavLink>
      </li>
    </ul>
  </div>
);

export default Menu;
