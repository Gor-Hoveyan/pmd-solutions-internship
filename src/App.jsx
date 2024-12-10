import styles from "./App.module.scss";
import Login from "./pages/login/Login";

function App() {
  return (
    <main className={styles.main}>
      <Login />
    </main>
  );
}

export default App;
