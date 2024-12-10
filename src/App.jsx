import styles from "./App.module.scss";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";

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
      <Login />
    </main>
  );
}

export default App;
