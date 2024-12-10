import styles from "./App.module.scss";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";

function App() {
  return (
    <main className={styles.main}>
      <div className={styles.layout}>
        <Navbar />
        <div className={styles.container}>
          {" "}
          <Header />
          <Main />
        </div>
      </div>
      ={" "}
    </main>
  );
}

export default App;
