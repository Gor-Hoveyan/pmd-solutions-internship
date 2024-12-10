import styles from "./OrderDetails.module.scss";

export default function OrderDetails() {
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
