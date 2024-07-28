import carImage from "../../../../Images/car 2 1.png";
import googleStore from "../../../../Images/image 2.png";
import appStore from "../../../../Images/image 3.png";
import Styles from "./MainInfo.module.css";
export default function MainInfo() {
  return (
    <div className={Styles.info}>
      <div className={Styles.rightSide}>
        <img src={carImage} alt="" />
      </div>
      <div className={Styles.leftSide}>
        <h2>
          Find, book and rent a car <span>Easily</span>
        </h2>
        <p>
          Get a car wherever and whenever you need it with your IOS and Android
          device.
        </p>
        <div className={Styles.buttons}>
          <img src={googleStore} alt="" />
          <img src={appStore} alt="" />
        </div>
      </div>
    </div>
  );
}
