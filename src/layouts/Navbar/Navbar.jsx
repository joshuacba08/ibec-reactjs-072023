import { MdMenu } from "react-icons/md";
import CartWidget from "../../components/CartWidget/CartWidget";
import './Navbar.css';

const Navbar = () => {

    const brand = 'https://f.hubspotusercontent10.net/hub/20044066/hubfs/raw_assets/public/kong/images/logo.png?width=190&name=logo.png';


    return(
        <header className="navbar-container">

            <div className="menu-icon">
                <MdMenu size={24} />
                <span>Menu</span>
            </div>

            <img src={brand} alt="" />

            <CartWidget />

        </header>
    )

}

export default Navbar