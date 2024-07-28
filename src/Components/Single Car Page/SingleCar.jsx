/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import AudiCar from "../../Images/Audi 1.png";
import Styles from "./SingleCar.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
export default function SingleCar() {
  const [signleCarData, setSignleCarData] = useState([]);
  const { IDCar } = useParams();
  useEffect(() => {
    axios
      .get(`https://freetestapi.com/api/v1/cars/${IDCar}`)
      .then(function (response) {
        setSignleCarData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className={Styles.chooseUsSection}>
      <div className={Styles.rightSide}>
        <img src={AudiCar} alt="" />
      </div>
      <div className={Styles.leftSide}>
        <span>this is car has id number.. {IDCar}</span>
        <h2>We offer the best experience with our rental deals</h2>
        <div className={Styles.offersContaner}>
          <div className={Styles.offerBox}>
            <i className="fa-regular fa-user"></i>
            <span>4 Passagers</span>
          </div>
          <div className={Styles.offerBox}>
            <i className="fa-solid fa-gear"></i>
            <span>{signleCarData.transmission}</span>
          </div>
          <div className={Styles.offerBox}>
            <i className="fa-solid fa-door-open"></i>
            <span>4 Doors</span>
          </div>
          <div className={Styles.offerBox}>
            <i className="fa-solid fa-snowflake"></i>
            <span>Air Conditioning</span>
          </div>
        </div>
      </div>
    </section>
  );
}
