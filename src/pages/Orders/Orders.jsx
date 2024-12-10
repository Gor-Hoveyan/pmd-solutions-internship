import { useState } from "react";
import styles from "./Orders.module.scss";
import Pagination from "../../components/pagination/Pagination";
import splitWithCommas from "../../utils/helperFunctions/splitWithComma";

export default function Orders() {
  const [page, setPage] = useState(1);
  return (
    <section className={styles.main}>
      <h3 className={styles.header}>Order list</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Order Id</th>
            <th>Type</th>
            <th>User ID</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {fakeData.slice((page - 1) * 10, page * 10).map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td>{item.orderId}</td>
              <td>{item.type}</td>
              <td>{item.userId}</td>
              <td>{item.date}</td>
              <td className={styles.amount}>${splitWithCommas(item.amount)}</td>
              <td>
                <button className={styles.btn}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        page={page}
        pagesCount={Math.ceil(fakeData.length / 10)}
        setPage={setPage}
      />
    </section>
  );
}

const fakeData = Array.from({ length: 405 }, (_, index) => ({
  description: [
    "Spotify Subscription",
    "Netflix Subscription",
    "Amazon Purchase",
    "Apple Music",
    "Grocery Shopping",
    "Gym Membership",
    "Uber Ride",
    "Restaurant Bill",
    "Online Course",
    "Flight Booking",
  ][index % 10],
  orderId: `#${12548796 + index}`,
  type: [
    "Shopping",
    "Entertainment",
    "Education",
    "Travel",
    "Fitness",
    "Dining",
    "Transportation",
  ][index % 7],
  userId: `00032${(index % 100).toString().padStart(2, "0")}`, // Generate unique userId
  date: new Date(
    2024,
    0,
    28 + Math.floor(index / 3),
    9 + (index % 12),
    (index % 4) * 15
  ).toLocaleString("en-US", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }),
  amount: Math.floor(Math.random() * 10000) + 500, // Random amount between 500 and 10500
}));
