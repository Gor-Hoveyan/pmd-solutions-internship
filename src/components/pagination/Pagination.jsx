import styles from "./Pagination.module.scss";

export default function Pagination({ page, pagesCount, setPage }) {
  let pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  function goToPrevious() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function goToNext() {
    if (page < pagesCount) {
      setPage(page + 1);
    }
  }
  return (
    <section className={styles.pagination}>
      <span className={styles.arrow} onClick={() => goToPrevious()}>
        {"<"} Previous
      </span>
      {pages.map((num, index) => {
        if ((page === 1 || page === 2) && num <= 5) {
          return (
            <span
              key={index}
              onClick={() => setPage(num)}
              className={`${styles.num} ${page === num && styles.active}`}
            >
              {num}
            </span>
          );
        } else if (page > num - 3 && page < num + 3) {
          return (
            <span
              key={index}
              onClick={() => setPage(num)}
              className={`${styles.num} ${page === num && styles.active}`}
            >
              {num}
            </span>
          );
        }
      })}
      <span className={styles.arrow} onClick={() => goToNext()}>
        Next {">"}
      </span>
    </section>
  );
}
