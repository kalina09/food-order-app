import styles from "./Header.module.css";
import coverImage from "../../assets/cover.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>The Meal Dash</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={coverImage} alt="Easy online order delicious food" />
      </div>
    </>
  );
};

export default Header;
