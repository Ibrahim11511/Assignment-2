import AudiCar from "../../../Images/Audi 1.png";
import Styles from "./ChooseUs.module.css";
export default function ChooseUs() {
  return (
    <section className={Styles.chooseUsSection}>
      <div className={Styles.rightSide}>
        <img src={AudiCar} alt="" />
      </div>
      <div className={Styles.leftSide}>
        <span>WHY CHOOSE US</span>
        <h2>We offer the best experience with our rental deals</h2>
        <div className={Styles.offersContaner}>
          <div className={Styles.offerBox}>
            <i className="fa-solid fa-wallet"></i>
            <div className={Styles.offerDetails}>
              <h3>Best price guaranteed</h3>
              <p>
                Find a lower price? We’ll refund you 100% of the difference.
              </p>
            </div>
          </div>
          <div className={Styles.offerBox}>
            <i className="fa-solid fa-user"></i>
            <div className={Styles.offerDetails}>
              <h3>Experience driver</h3>
              <p>
                Don’t have driver? Don’t worry, we have many experienced driver
                for you.
              </p>
            </div>
          </div>
          <div className={Styles.offerBox}>
            <i className="fa-solid fa-wallet"></i>
            <div className={Styles.offerDetails}>
              <h3>24 hour car delivery</h3>
              <p>
                Book your car anytime and we will deliver it directly to you.
              </p>
            </div>
          </div>
          <div className={Styles.offerBox}>
            <i className="fa-solid fa-wallet"></i>
            <div className={Styles.offerDetails}>
              <h3>24/7 technical support</h3>
              <p>
                Have a question? Contact Rentcars support any time when you have
                problem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
