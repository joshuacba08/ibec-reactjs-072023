import { NavLink } from "react-router-dom";
import { MdArrowDropDown, MdMenu } from "react-icons/md";
import CartWidget from "../../components/CartWidget/CartWidget";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const brand =
    "https://f.hubspotusercontent10.net/hub/20044066/hubfs/raw_assets/public/kong/images/logo.png?width=190&name=logo.png";
  const [showCategories, setShowCategories] = useState(false);

  const handleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <header className="navbar-container">
      <nav className="navbar-container__nav">
        <NavLink to="/">Inicio</NavLink>

        <div className="links-group">
          <NavLink to="/products">Productos</NavLink>
          <MdArrowDropDown size={24} onClick={handleCategories} />

          {showCategories && (
            <div className="links-group__menu">
              <NavLink to="/products/porter" onClick={handleCategories}>Porter</NavLink>
              <NavLink to="/products/stout" onClick={handleCategories}>Stout</NavLink>
            </div>
          )}

        </div>

        <span>Contacto</span>
      </nav>

      <div className="menu-icon">
        <MdMenu size={24} />
        <span>Menu</span>
      </div>

      <img className="logo" src={brand} alt="" />

      <div className="cart-widget-container">
        <CartWidget />
      </div>
    </header>
  );
};

export default Navbar;
