import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import AboutUs from "./AboutUs";
import { Link } from "react-router-dom"
const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    useEffect(() => {
       
    }, [])
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    src={LOGO_URL}
                    alt="logo"
                    className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/about" >About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact" >Contact Us</Link>
                    </li>
                    <li className="item">Cart</li>
                    <button
                        className="login"
                        onClick={() => {
                            btnName === "Login"
                                ? setBtnName("LogOut")
                                : setBtnName("Login")
                        }}
                    >{btnName}</button>
                </ul>
            </div>

        </div>
    )
}

export default Header;