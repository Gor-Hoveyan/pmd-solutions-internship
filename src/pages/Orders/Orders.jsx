import { useEffect, useState } from "react";
import styles from "./Orders.module.scss";
import Pagination from "../../components/pagination/Pagination";
import splitWithCommas from "../../utils/helperFunctions/splitWithComma";
import { NavLink } from "react-router";
import { getOrders } from "../../api/routes/ordersApi";

export default function Orders() {
  const [page, setPage] = useState(1);
  const [orders, setOrders] = useState([]);
  const [totalPages, setTotalPages] = useState();

  async function fetchOrders() {
    let data = await getOrders(page);
    if (data.success) {
      setOrders(data.data);
      setTotalPages(data.pagination.total_pages);
    }
  }

  useEffect(() => {
    fetchOrders();
    console.log(orders);
  }, []);

  return (
    <section className={styles.main}>
      <h3 className={styles.header}>Order list</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>User ID</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.slice((page - 1) * 10, page * 10).map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.user_id}</td>
              <td className={styles.amount}>${splitWithCommas(item.amount)}</td>
              <td>
                <NavLink to={`/order/${item.id}`}>
                  <button className={styles.btn}>View</button>
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination page={page} pagesCount={totalPages} setPage={setPage} />
    </section>
  );
}
