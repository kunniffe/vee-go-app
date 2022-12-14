import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./index.css";

function Header() {
  const [navMode, setNavMode] = useState("Nav");

  function listenScrollEvent(event) {
    if (window.scrollY < 50) {
      return setNavMode("Nav");
    } else if (window.scrollY > 50) {
      return setNavMode("Nav Nav--scrolling");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  });

  return (
    <header className="Header">
      <nav className={navMode}>
        <Link to="/" className="Nav__brand">
          Veego
        </Link>
        <ul className="Nav__links">
          {[{title: "Recipes", url: "/recipes"}, {title: "Restaurants", url: "/restaurants"}, {title: "Cart", url: "/cart"}].map((item, index) => (
            <li key={index} className="Nav__links__link">
              <Link to={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
