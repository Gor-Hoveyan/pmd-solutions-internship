import styles from "./Navbar.module.scss";
import creditCard from "./../../assets/navbar/credit-card.png";
import DesktopList from "./lists/desktopList/DesktopList";
import TabList from "./lists/tabList/TabList";

export default function Navbar() {
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
        <DesktopList />
      </section>
      <section className={styles.tabBar}>
        <TabList />
      </section>
    </nav>
  );
}
