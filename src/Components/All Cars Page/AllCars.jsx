import axios from "axios";
import Styles from "./AllCars.module.css";
import PoulersSectionInfo from "../Main Page/Populer Section/Populer Section Info/PopulerSectionInfo";
import PopulerCar from "../Main Page/Populer Section/Populer Car/PopulerCar";
import { useEffect, useState } from "react";
import StaticImage from "../../Images/47dc235860cd4ee03eebddc424b8ca74.png";
export default function AllCars() {
  const [allCarsData, setAllCarsData] = useState([]);

  useEffect(() => {
    axios
      .get("https://freetestapi.com/api/v1/cars")
      .then(function (response) {
        setAllCarsData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className={Styles.allCarsPage}>
      <PoulersSectionInfo />
      <div className={Styles.allCarsContainer}>
        {allCarsData.map((data) => (
          <PopulerCar
            carID={data.id}
            key={data.id}
            carName={data.make}
            carModel={data.model}
            price={data.price}
            carImage={(data.image = StaticImage)}
          />
        ))}
      </div>
    </div>
  );
}
