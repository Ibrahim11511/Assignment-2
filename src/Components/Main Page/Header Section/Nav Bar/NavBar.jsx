import Styles from "./NavBar.module.css";
import LogoImage from "../../../../Images/Frame 993.png";
import { useState } from "react";
import { Link } from "react-router-dom";
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
          <Link to={"rented"}>Become a renter</Link>
          <li>Rental deals</li>
          <Link to={"work"}>How it work</Link>
          <Link to={"us"}>Why choose us</Link>
        </ul>
        <div className={Styles.navBarButtons}>
          <button className="signIn">Sign In</button>
          <button className="signUp">Sign Up</button>
        </div>
      </nav>
    </>
  );
}
