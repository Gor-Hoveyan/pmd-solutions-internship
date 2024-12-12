import styles from "./App.module.scss";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Main from "./pages/main/Main.jsx";
import Login from "./pages/login/Login.jsx";
import { Route, Routes, useNavigate } from "react-router";
import Orders from "./pages/orders/orders.jsx";
import OrderDetails from "./pages/orderDetails/OrderDetails.jsx";
import { useEffect, useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("token").length >= 93
    ) {
      setIsAuthenticated(true);
      navigate("/");
    }
    if (!isAuthenticated) {
      navigate("/login");
    }
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <main className={styles.main}>
      <div className={styles.layout}>
        <Navbar />
        <div className={styles.container}>
          {" "}
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/login"
              element={
                <Login
                  setIsAuthenticated={setIsAuthenticated}
                  isAuthenticated={isAuthenticated}
                />
              }
            />
            <Route path="/orders" element={<Orders />} />
            <Route path="/order/:id" element={<OrderDetails />} />
          </Routes>
        </div>
      </div>
    </main>
  );
}

export default App;
