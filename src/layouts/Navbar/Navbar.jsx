import { NavLink  } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import CartWidget from "../../components/CartWidget/CartWidget";
import './Navbar.css';

const Navbar = () => {

    const brand = 'https://f.hubspotusercontent10.net/hub/20044066/hubfs/raw_assets/public/kong/images/logo.png?width=190&name=logo.png';


    return(
        <header className="navbar-container">

            <nav className="navbar-container__nav">
                <NavLink to="/" >Inicio</NavLink>
                <NavLink to="/products">Productos</NavLink>
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
    )

}

export default Navbar