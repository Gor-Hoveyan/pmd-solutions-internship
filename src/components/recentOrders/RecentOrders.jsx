import styles from "./RecentOrders.module.scss";
import cards from "./../../assets/main/recentOrders/cards.svg";
import coin from "./../../assets/main/recentOrders/coin.svg";
import paypal from "./../../assets/main/recentOrders/paypal.svg";
import splitWithCommas from "../../utils/helperFunctions/splitWithComma";

const fakeData = [
  {
    icon: cards,
    message: "Deposit from my Card",
    date: "28 January 2021",
    value: -850,
  },
  {
    icon: paypal,
    message: "Deposit Paypal",
    date: "25 January 2021",
    value: 2500,
  },
  {
    icon: coin,
    message: "Jemi Wilson",
    date: "21 January 2021",
    value: 5400,
  },
];

export default function RecentOrders() {
  return (
    <section className={styles.main}>
      <h3 className={styles.header}>Recent Orders</h3>
      <section className={styles.recentOrders}>
        {fakeData.map((data, index) => (
          <section key={index} className={styles.item}>
            <img src={data.icon} />
            <section>
              <p className={styles.message}>{data.message}</p>
              <p className={styles.date}>{data.date}</p>
            </section>
            {data.value > 0 ? (
              <p className={styles.green}>+${splitWithCommas(data.value)}</p>
            ) : (
              <p className={styles.red}>
                +${splitWithCommas(Math.abs(data.value))}
              </p>
            )}
          </section>
        ))}
      </section>
    </section>
  );
}
