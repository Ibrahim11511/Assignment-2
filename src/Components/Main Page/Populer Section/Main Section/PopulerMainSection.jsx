import Styles from "./PopulerMainSection.module.css";
import SearchBar from "../Search Bar/SearchBar";
import PoulersSectionInfo from "../Populer Section Info/PopulerSectionInfo";
import PopulersCars from "../Populer Cars/PopulersCars";
export default function PopulerMainSection() {
  return (
    <section className={Styles.populerSection}>
      <SearchBar />
      <PoulersSectionInfo />
      <PopulersCars />
    </section>
  );
}
