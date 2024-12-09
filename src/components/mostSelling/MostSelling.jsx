import styles from "./MostSelling.module.scss";

const fakeData = [
  {
    id: "01.",
    name: "Trivago",
    price: "$520",
    quantity: 100,
  },
  {
    id: "02.",
    name: "Canon",
    price: "$480",
    quantity: 50,
  },
  {
    id: "03.",
    name: "Uber Food",
    price: "$350",
    quantity: 100,
  },
  {
    id: "04.",
    name: "Nokia",
    price: "$940",
    quantity: 30,
  },
  {
    id: "05.",
    name: "Tiktok",
    price: "$670",
    quantity: 100,
  },
];

export default function MostSelling() {
  return (
    <section className={styles.mostSelling}>
      <h3 className={styles.header}>Most selling products</h3>
      <table className={styles.table}>
        <thead>
          <tr className={styles.firstRow}>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.rowLine}>
            <td colSpan={5} className={styles.line}></td>
          </tr>
          {fakeData.map((data, index) => (
            <tr key={index}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.price}</td>
              <td>{data.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
