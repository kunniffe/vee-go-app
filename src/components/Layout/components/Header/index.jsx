import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./index.css";

function Header() {
  const [header, setHeader] = useState("header");

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeader("header");
    } else if (window.scrollY > 70) {
      return setHeader("header2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <header className={header}>
      <div className="logo">
        <b>Veego</b>
      </div>
      <ul className="links">
        <li className="link-item">
          <Link to="/">Home</Link>
        </li>
        <li className="link-item">
          <Link to="/recipes">Recipes</Link>
        </li>
        <li className="link-item">
          <Link to="/account">Account</Link>
        </li>
        <li className="link-item">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
