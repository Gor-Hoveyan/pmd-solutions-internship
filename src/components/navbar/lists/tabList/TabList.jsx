import styles from "./../List.module.scss";
import dashboard from "./../../../../assets/navbar/dashboard.svg";
import transactions from "./../../../../assets/navbar/orders.svg";
import accounts from "./../../../../assets/navbar/tab/accounts.svg";
import investments from "./../../../../assets/navbar/statistics.svg";
import creditCards from "./../../../../assets/navbar/tab/credit-cards.svg";
import loans from "./../../../../assets/navbar/currencies.svg";
import services from "./../../../../assets/navbar/tab/services.svg";
import myPrivileges from "./../../../../assets/navbar/products.svg";
import setting from "./../../../../assets/navbar/setting.svg";

export default function TabList() {
  return (
    <ul className={styles.list}>
      <li className={styles.active}>
        <img className={styles.img} src={dashboard} alt="Dashboard vector" />
        Dashboard
      </li>
      <li>
        {" "}
        <img
          className={styles.img}
          src={transactions}
          alt="transactions vector"
        />
        Transactions
      </li>
      <li>
        {" "}
        <img className={styles.img} src={accounts} alt="accounts vector" />
        Accounts
      </li>
      <li>
        {" "}
        <img
          className={styles.img}
          src={investments}
          alt="investments vector"
        />
        Investments
      </li>
      <li>
        {" "}
        <img
          className={styles.img}
          src={creditCards}
          alt="credit-cards vector"
        />
        Credit cards
      </li>
      <li>
        {" "}
        <img className={styles.img} src={loans} alt="loans vector" />
        Loans
      </li>
      <li>
        {" "}
        <img className={styles.img} src={services} alt="services vector" />
        Services
      </li>
      <li>
        {" "}
        <img
          className={styles.img}
          src={myPrivileges}
          alt="myPrivileges vector"
        />
        My privileges
      </li>
      <li>
        {" "}
        <img className={styles.img} src={setting} alt="Setting vector" />
        Setting
      </li>
    </ul>
  );
}
