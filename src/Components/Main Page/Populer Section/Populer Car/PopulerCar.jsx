/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Styles from "./PopulerCar.module.css";
export default function PopulerCarBox(props) {
  return (
    <div className={Styles.populerCarBox} data-car-id={props.carID}>
      <div className={Styles.topSide}>
        <div className={Styles.carImage}>
          <img src={props.carImage} alt="" />
        </div>

        <h3>
          {props.carName} {props.carModel}
        </h3>
        <div className={Styles.rateAndReviews}>
          <span className={Styles.rate}>
            <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
            4.5
          </span>
          <span className={Styles.reviews}> (2.436 reviews)</span>
        </div>

        <div className={Styles.carDetails}>
          <span className={Styles.passagerNumber}>
            <i className="fa-regular fa-user"></i>
            <span>4 Passagers</span>
          </span>

          <span className={Styles.transmissionType}>
            <i className="fa-solid fa-gear"></i>
            <span>Auto</span>
          </span>

          <span className={Styles.doorNumber}>
            <i className="fa-solid fa-door-open"></i>
            <span>4 Doors</span>
          </span>

          <span className={Styles.AC}>
            <i className="fa-solid fa-snowflake"></i>
            <span>Air Conditioning</span>
          </span>
        </div>
      </div>

      <div className={Styles.bottomSide}>
        <div className={Styles.priceContainer}>
          <span className={Styles.text}>Price</span>
          <span>
            <span className={Styles.price}>${props.price}</span>/day
          </span>
        </div>

        <Link className={Styles.openSinglePage} to={`${props.carID}`}>
          Rent Now <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
}
