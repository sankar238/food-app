import {  useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext)
    const cartItems = useSelector((store)=>(store.cart.items))
    return (
        <div className="flex justify-between mx-4 my-4 bg-green-200 shadow-lg
            border border-b-black text-lg font-semibold">
            <div className="logo-container">
                <img
                    src={LOGO_URL}
                    alt="logo"
                    className="w-56" />
            </div>
            <div className="flex items-center">
                <ul className="flex  m-4 p-4">
                    <li className=" px-4">
                        onlineStatus : {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/" >Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about" >About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact" >Contact Us</Link>
                    </li>
                    <li className="px-4 text-xl">
                        <Link to="/cart" >Cart -({cartItems.length} items)</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <button
                        className="px-4"
                        onClick={() => {
                            btnName === "Login"
                                ? setBtnName("LogOut")
                                : setBtnName("Login")
                        }}
                    >{btnName}</button>
                    <li className="px-4">{loggedInUser}</li>
                </ul>
            </div>

        </div>
    )
}

export default Header;