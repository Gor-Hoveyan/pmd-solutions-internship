import styles from "./WeeklyActivity.module.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const fakeData = [
  { day: "Sat", Deposit: 200, Withdraw: 100 },
  { day: "Sun", Deposit: 300, Withdraw: 200 },
  { day: "Mon", Deposit: 400, Withdraw: 300 },
  { day: "Tue", Deposit: 500, Withdraw: 100 },
  { day: "Wed", Deposit: 100, Withdraw: 200 },
  { day: "Thu", Deposit: 300, Withdraw: 400 },
  { day: "Fri", Deposit: 400, Withdraw: 300 },
];

const WeeklyActivity = () => (
  <section className={styles.main}>
    <h3 className={styles.header}>Weekly Activity</h3>
    <section className={styles.chartSection}>
      <BarChart width={1000} height={300} data={fakeData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip />
        <Legend
          layout="horizontal"
          verticalAlign="top"
          align="right"
          iconType="circle"
        />
        <Bar dataKey="Deposit" fill="#1814F3" radius={30} barSize={15} />
        <Bar dataKey="Withdraw" fill="#16DBCC" radius={30} barSize={15} />
      </BarChart>
    </section>
  </section>
);

export default WeeklyActivity;
