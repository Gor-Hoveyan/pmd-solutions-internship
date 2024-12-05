import styles from "./App.module.scss";
import Login from "./components/login/Login";

function App() {
  return (
    <main className={styles.main}>
      <Login />
    </main>
  );
}

export default App;
