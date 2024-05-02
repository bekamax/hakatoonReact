import React from "react";
import style from "./navbar.module.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.cont}>
        <div className={style.nav_top}>
          <h1>p</h1>
          <h1>EBA</h1>
          <h1>q</h1>
        </div>
        <hr className={style.hr} />
        <div className={style.nav_bottom}>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/products"}>Products</NavLink>
          <NavLink to={"/produc"}>Еще че то</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
