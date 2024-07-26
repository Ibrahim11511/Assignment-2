import NavBar from "../Nav Bar/NavBar";
import MainInfo from "../Main Info/MainInfo";
import Styles from "./MainSection.module.css";
export default function HeaderMainSection() {
  return (
    <section className={Styles.landing}>
      <NavBar />
      <MainInfo />
    </section>
  );
}
