import axios from "axios";
import Styles from "./PopulersCars.module.css";
import StaticCarImage from "../../../../Images/47dc235860cd4ee03eebddc424b8ca74.png";
import PopulerCarBox from "../Populer Car/PopulerCar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PopulersCars() {
  const [populerData, setPopulerData] = useState([]);

  useEffect(() => {
    axios
      .get("https://freetestapi.com/api/v1/cars?limit=5")
      .then(function (response) {
        setPopulerData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className={Styles.populerCarsContainer}>
        {populerData.map((data) => (
          <PopulerCarBox
            carID={data.id}
            key={data.id}
            carName={data.make}
            carModel={data.model}
            price={data.price}
            carImage={(data.image = StaticCarImage)}
          />
        ))}
      </div>
      <Link className={Styles.link} to={"cars"}>
        Show all vehicles
      </Link>
    </>
  );
}
