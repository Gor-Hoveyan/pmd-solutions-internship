import styles from "./Navbar.module.scss";
import creditCard from "./../../assets/navbar/credit-card.png";
import DesktopList from "./lists/desktopList/DesktopList";
//import TabList from "./lists/tabList/TabList";
import { useLocation } from "react-router";

export default function Navbar() {
  const params = useLocation();

  return (
    <nav className={styles.navbar}>
      <section className={styles.logo}>
        <img
          src={creditCard}
          className={styles.logoImg}
          alt="Credit card logo"
        />
        <h3 className={styles.logoContent}>BankDash.</h3>
      </section>
      <section className={styles.desktopBar}>
        <DesktopList path={params.pathname} />
      </section>
      {/* <section className={styles.tabBar}>
        <TabList path={params.pathname} />
      </section> */}
    </nav>
  );
}
