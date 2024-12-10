import styles from "./Savings.module.scss";
import products from "./../../assets/main/savings/products.svg";
import orders from "./../../assets/main/savings/orders.svg";
import revenue from "./../../assets/main/savings/revenue.svg";
import totalSaving from "./../../assets/main/savings/totalSaving.svg";
import splitWithCommas from "../../utils/helperFunctions/splitWithComma";

const fakeData = [
  {
    name: "Products",
    icon: products,
    value: 2300,
  },
  {
    name: "Orders",
    icon: orders,
    value: 3000,
  },
  {
    name: "Revenue",
    icon: revenue,
    value: 3460,
  },
  {
    name: "Total Saving",
    icon: totalSaving,
    value: 7920,
  },
];

export default function Savings() {
  return (
    <section className={styles.savings}>
      {fakeData.map((item, index) => (
        <section key={index} className={styles.item}>
          <img src={item.icon} alt={item.name} className={styles.icon} />
          <div className={styles.itemData}>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.value}>${splitWithCommas(item.value)}</p>
          </div>
        </section>
      ))}
    </section>
  );
}
