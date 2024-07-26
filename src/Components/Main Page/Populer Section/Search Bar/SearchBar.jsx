import Styles from "./SearchBar.module.css";
export default function SearchBar() {
  return (
    <div className={Styles.searchContainer}>
      <input
        className={Styles.searchInput}
        type="text"
        placeholder="Search By Name"
      />
      <button className={Styles.searchbutton}>Search</button>
    </div>
  );
}
