import styles from "./../List.module.scss";
import dashboard from "./../../../../assets/navbar/dashboard.svg";
import orders from "./../../../../assets/navbar/orders.svg";
import products from "./../../../../assets/navbar/products.svg";
import reviews from "./../../../../assets/navbar/desktop/reviews.svg";
import statistics from "./../../../../assets/navbar/statistics.svg";
import currencies from "./../../../../assets/navbar/currencies.svg";
import setting from "./../../../../assets/navbar/setting.svg";

export default function DesktopList() {
  return (
    <ul className={styles.list}>
      <li className={styles.active}>
        <img className={styles.img} src={dashboard} alt="Dashboard vector" />
        Dashboard
      </li>
      <li>
        {" "}
        <img className={styles.img} src={orders} alt="Orders vector" />
        Orders
      </li>
      <li>
        {" "}
        <img className={styles.img} src={products} alt="Products vector" />
        Products
      </li>
      <li>
        {" "}
        <img className={styles.img} src={reviews} alt="Reviews vector" />
        Reviews
      </li>
      <li>
        {" "}
        <img className={styles.img} src={statistics} alt="Statistics vector" />
        Statistics
      </li>
      <li>
        {" "}
        <img className={styles.img} src={currencies} alt="Currencies vector" />
        Currencies
      </li>
      <li>
        {" "}
        <img className={styles.img} src={setting} alt="Setting vector" />
        Setting
      </li>
    </ul>
  );
}
