import { useState } from 'react';
import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.scss";
import { ImMenu } from "react-icons/im";
import { ReactComponent as Logo } from "../../assets/logoBlack.svg";

const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    }

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar_logo">
                    <Logo />
                </div>
                <div className="menu_icon" onClick={handleShowNavbar}>
                    <ImMenu />
                </div>
                <div className={`navbar_links ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <NavLink to="/">Main</NavLink>
                        </li>
                        <li>
                            <NavLink to="/ReactPage">React</NavLink>
                        </li>
                        <li>
                            <NavLink to="/MernPage">Mern</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar