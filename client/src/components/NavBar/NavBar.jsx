import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={style.container}>
      <div className={style.navLinksContainer}>
        <Link to="/" className={style.navLink}>
          Landing
        </Link>
        <Link to="/home" className={style.navLink}>
          Home
        </Link>
        <Link to="/form" className={style.navLink}>
          Create Activity
        </Link>
      </div>
    </div>
  );
}