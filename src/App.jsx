import styles from "./App.module.scss";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Main from "./pages/main/Main.jsx";
import Login from "./pages/login/Login.jsx";
import { Route, Routes } from "react-router";
import Orders from "./pages/Orders/Orders.jsx";

function App() {
  return (
    <main className={styles.main}>
      <div className={styles.layout}>
        <Navbar />
        <div className={styles.container}>
          {" "}
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </main>
  );
}

export default App;
