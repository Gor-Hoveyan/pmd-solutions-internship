import styles from "./App.module.scss";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <main className={styles.main}>
      <div className={styles.layout}>
        <Navbar />
        <Header />
      </div>
    </main>
  );
}

export default App;
