import ExpenseStats from "../../components/expenseStats/ExpenseStats";
import Savings from "../../components/savings/Savings";
import WeeklyActivity from "../../components/weeklyActivity/WeeklyActivity";
import MostSelling from "./../../components/mostSelling/MostSelling";
import RecentOrders from "./../../components/recentOrders/RecentOrders";
import styles from "./Main.module.scss";

export default function Main() {
  return (
    <main className={styles.main}>
      <MostSelling />
      <RecentOrders />
      <WeeklyActivity />
      <ExpenseStats />
      <Savings />
    </main>
  );
}
