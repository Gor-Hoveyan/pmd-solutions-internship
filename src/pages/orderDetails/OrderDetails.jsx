import { useParams } from "react-router";
import styles from "./OrderDetails.module.scss";
import { getOrder } from "../../api/routes/ordersApi";
import { useEffect, useState } from "react";

export default function OrderDetails() {
  const params = useParams();
  const [order, setOrder] = useState();

  async function fetchOrder() {
    const data = await getOrder(params.id);
    if (data.success) {
      setOrder(data.data);
      console.log(data);
    }
  }

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <section className={styles.orderDetails}>
      <h3 className={styles.header}>Order details</h3>
      <div className={styles.container}>
        <h4 className={styles.containerHeader}>Main info</h4>
        <div className={styles.forms}>
          <section className={styles.leftSection}>
            <div>
              <p>Your Name</p>
              <input type="text" disabled />
            </div>
            <div>
              <p>Email</p>
              <input type="text" disabled />
            </div>{" "}
            <div>
              <p>Date of Birth</p>
              <input type="text" disabled />
            </div>{" "}
            <div>
              <p>Permanent Address</p>
              <input type="text" disabled />
            </div>{" "}
            <div>
              <p>Postal Code</p>
              <input type="text" disabled />
            </div>
          </section>
          <section className={styles.rightSection}>
            <div>
              <p>User Name</p>
              <input type="text" disabled />
            </div>
            <div>
              <p>Password</p>
              <input type="text" disabled />
            </div>{" "}
            <div>
              <p>Present Address</p>
              <input type="text" disabled />
            </div>{" "}
            <div>
              <p>City</p>
              <input type="text" disabled />
            </div>{" "}
            <div>
              <p>Country</p>
              <input type="text" disabled />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
