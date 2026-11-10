import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";




const Header = () => {

  const[btnName, setBtnName] = useState("Login");

 return( <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src={LOGO_URL}
        alt="logo"
      />
    </div>
    <div className="nav-items">
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to = '/grocery'><li>Grocery</li></Link>
        <Link to = '/contact'><li>Contact Us</li></Link>
        <li>Cart</li>
        <button onClick={()=>{
          btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          console.log("doesn't run");
          
        }}>{btnName}</button>
      </ul>
    </div>
  </div>
 )
};
export default Header;