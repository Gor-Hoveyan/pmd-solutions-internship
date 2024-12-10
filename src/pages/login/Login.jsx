import { useRef } from "react";
import styles from "./Login.module.scss";
import logo from "./../../assets/login/loginLogo.png";
import eye from "./../../assets/login/eye.png";

export default function Login() {
  const passwordRef = useRef();

  function togglePassword(e) {
    e.preventDefault();
    if (passwordRef.current && passwordRef.current.type) {
      if (passwordRef.current.type === "password") {
        passwordRef.current.type = "text";
      } else {
        passwordRef.current.type = "password";
      }
    }
  }

  return (
    <div className={styles.loginPage}>
      <div className={styles.blur}>
        <section className={styles.container}>
          <section className={styles.about}>
            <section className={styles.logo}>
              <img src={logo} alt="logo" className={styles.logoImg} />
              <h1 className={styles.logoHeader}>HighBridge</h1>
            </section>
            <section className={styles.content}>
              <h2 className={styles.contentHeader}>Building the Future...</h2>
              <p className={styles.contentText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </section>
            <section className={styles.carousel}>
              <div className={styles.firstCarouselItem}></div>
              <div className={styles.carouselItem}></div>
              <div className={styles.carouselItem}></div>
            </section>
          </section>
          <section className={styles.formContainer}>
            <section className={styles.formContent}>
              <span className={styles.formSpan}>WELCOME BACK</span>
              <h4 className={styles.formHeader}>Log In to your Account</h4>
            </section>
            <form>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  placeholder="johnsondoe@nomail.com"
                  id="email"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="password"
                  placeholder="***************"
                  id="password"
                  ref={passwordRef}
                />
                <label htmlFor="password">Password</label>
                <button
                  className={styles.toggleVisibility}
                  onClick={(e) => togglePassword(e)}
                >
                  <img src={eye} alt="Eye" />
                </button>
              </div>
              <section className={styles.actions}>
                <label className={styles.checkboxContainer}>
                  Remember me
                  <input type="checkbox" />
                  <span className={styles.checkmark}></span>
                </label>
                <a href="#" className={styles.forgot}>
                  Forgot password?
                </a>
              </section>
              <button className={styles.btn} type="submit">
                CONTINUE
              </button>
            </form>
          </section>
        </section>
      </div>
    </div>
  );
}
