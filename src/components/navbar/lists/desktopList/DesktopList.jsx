import styles from "./../List.module.scss";
import dashboard from "./../../../../assets/navbar/dashboard.svg";
import orders from "./../../../../assets/navbar/orders.svg";
import products from "./../../../../assets/navbar/products.svg";
import reviews from "./../../../../assets/navbar/desktop/reviews.svg";
import statistics from "./../../../../assets/navbar/statistics.svg";
import currencies from "./../../../../assets/navbar/currencies.svg";
import setting from "./../../../../assets/navbar/setting.svg";
import { NavLink } from "react-router";

export default function DesktopList({ path }) {
  return (
    <ul className={styles.list}>
      <li>
        <NavLink
          to={"/"}
          className={`${path === "/" ? styles.active : ""} ${styles.navLink}`}
        >
          <img className={styles.img} src={dashboard} alt="Dashboard vector" />
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/orders"}
          className={`${path === "/orders" ? styles.active : ""} ${
            styles.navLink
          }`}
        >
          <img className={styles.img} src={orders} alt="Orders vector" />
          Orders
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/products"}
          className={`${path === "/products" ? styles.active : ""} ${
            styles.navLink
          }`}
        >
          <img className={styles.img} src={products} alt="Products vector" />
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/reviews"}
          className={`${path === "/reviews" ? styles.active : ""} ${
            styles.navLink
          }`}
        >
          <img className={styles.img} src={reviews} alt="Reviews vector" />
          Reviews
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/statistics"}
          className={`${path === "/statistics" ? styles.active : ""} ${
            styles.navLink
          }`}
        >
          <img
            className={styles.img}
            src={statistics}
            alt="Statistics vector"
          />
          Statistics
        </NavLink>
      </li>
      <li className={path === "/currencies" ? styles.active : ""}>
        <NavLink
          to={"/currencies"}
          className={`${path === "/currencies" ? styles.active : ""} ${
            styles.navLink
          }`}
        >
          <img
            className={styles.img}
            src={currencies}
            alt="Currencies vector"
          />
          Currencies
        </NavLink>
      </li>
      <li className={path === "/setting" ? styles.active : ""}>
        <NavLink
          to={"/setting"}
          className={`${path === "/setting" ? styles.active : ""} ${
            styles.navLink
          }`}
        >
          <img className={styles.img} src={setting} alt="Setting vector" />
          Setting
        </NavLink>
      </li>
    </ul>
  );
}
