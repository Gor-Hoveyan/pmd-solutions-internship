import styles from "./ExpenseStats.module.scss";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const fakeData = [
  { name: "Entertainment", value: 30 },
  { name: "Bill Expense", value: 15 },
  { name: "Investment", value: 20 },
  { name: "Others", value: 35 },
];

const COLORS = ["#343C6A", "#FC7900", "#1814F3", "#FA00FF"];

export default function ExpenseStats() {
  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className={styles.main}>
      <h3 className={styles.header}>Expense Statistics</h3>
      <section className={styles.chartSection}>
        <PieChart width={300} height={300}>
          <Pie
            data={fakeData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            labelLine={false}
            label={renderCustomizedLabel}
          >
            {fakeData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </section>
    </div>
  );
}
