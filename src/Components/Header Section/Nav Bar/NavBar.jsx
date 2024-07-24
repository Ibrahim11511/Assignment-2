import Styles from "./NavBar.module.css";
import LogoImage from "../../../Images/Frame 993.png";
import { useState } from "react";
export default function NavBar() {
  const [navBarActivation, setNavBarActivation] = useState(true);
  function navBarToggle() {
    setNavBarActivation(!navBarActivation);
  }
  return (
    <>
      <button className={Styles.toggleMedia} onClick={navBarToggle}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav
        className={`${Styles.nav} ${navBarActivation ? `${Styles.hide}` : ""}`}
      >
        <div className={Styles}>
          <img src={LogoImage} alt="" />
        </div>
        <ul className={Styles.navBarList}>
          <li>Become a renter</li>
          <li>Rental deals</li>
          <li>How it work</li>
          <li>Why choose us</li>
        </ul>
        <div className={Styles.navBarButtons}>
          <button className="signIn">Sign In</button>
          <button className="signUp">Sign Up</button>
        </div>
      </nav>
    </>
  );
}
