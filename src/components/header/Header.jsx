import styles from "./Header.module.scss";
import settings from "./../../assets/header/settings.svg";
import notifications from "./../../assets/header/notifications.svg";
import loupe from "./../../assets/header/loupe.svg";
import avatar from "./../../assets/header/avatar.png";
import { useLocation } from "react-router";

export default function Header() {
  const location = useLocation();
  return (
    <header className={styles.header}>
      <section>
        <h2 className={styles.heading}>
          {location && location.pathname.length > 1
            ? location.pathname.slice(1)[0].toUpperCase() +
              location.pathname.split("").slice(2).join("")
            : "Overview"}
        </h2>
      </section>
      <section>
        <ul className={styles.list}>
          <div className={styles.searchBar}>
            <img src={loupe} className={styles.searchIcon} alt="loupe vector" />
            <input type="text" placeholder="Search for something" />
          </div>
          <img src={settings} alt="Settings icon" className={styles.icon} />
          <img
            src={notifications}
            alt="Notifications icon"
            className={styles.icon}
          />
          <img src={avatar} alt="User avatar" className={styles.avatar} />
        </ul>
      </section>
    </header>
  );
}
