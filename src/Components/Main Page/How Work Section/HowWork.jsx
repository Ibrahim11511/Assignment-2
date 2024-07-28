import jaguerLogo from "../../../Images/jaguer.png";
import Styles from "./HowWork.module.css";
export default function HowWorkSection() {
  return (
    <section className={Styles.howWorkSection}>
      <span>HOW IT WORK</span>
      <h2>Rent with following 3 working steps</h2>
      <div className={Styles.services}>
        <div className={Styles.serviceBox}>
          <i className="fa-solid fa-location-dot"></i>
          <h3>Choose location</h3>
          <p className={Styles.service}>Choose your and find your best car</p>
        </div>
        <div className={Styles.serviceBox}>
          <i className="fa-regular fa-calendar-days"></i>
          <h3>Pick-up date</h3>
          <p className={Styles.service}>
            Select your pick up date and time to book your car
          </p>
        </div>
        <div className={Styles.serviceBox}>
          <i className="fa-solid fa-car"></i>
          <h3>Book your car</h3>
          <p className={Styles.service}>
            Book your car and we will deliver it directly to you
          </p>
        </div>
      </div>
      <div className={Styles.logosContainer}>
        <img src={jaguerLogo} alt="" />
        <img src={jaguerLogo} alt="" />
        <img src={jaguerLogo} alt="" />
        <img src={jaguerLogo} alt="" />
        <img src={jaguerLogo} alt="" />
      </div>
    </section>
  );
}
