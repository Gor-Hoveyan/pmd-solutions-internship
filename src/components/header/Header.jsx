import styles from "./Header.module.scss";
import settings from "./../../assets/header/settings.svg";
import notifications from "./../../assets/header/notifications.svg";
import loupe from "./../../assets/header/loupe.svg";
import avatar from "./../../assets/header/avatar.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <section>
        <h2 className={styles.heading}>Overview</h2>
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
