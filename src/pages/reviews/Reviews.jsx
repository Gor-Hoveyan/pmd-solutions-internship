import { useEffect, useState } from "react";
import styles from "./Reviews.module.scss";
import Pagination from "../../components/pagination/Pagination";
import { getReviews } from "../../api/routes/reviewsApi";

export default function Reviews() {
  const [page, setPage] = useState(1);
  const [reviews, setReviews] = useState([]);
  const [totalPages, setTotalPages] = useState();

  async function fetchReviews() {
    let data = await getReviews(page);
    if (data.success) {
      console.log(data);
      setReviews(data.data.reviews);
      setTotalPages(data.data.pagination.total_pages);
    }
  }

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <section className={styles.main}>
      <h3 className={styles.header}>Reviews</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Username</th>
            <th>User ID</th>
            <th>Content</th>
            <th>Rating</th>
            <th>Likes</th>
          </tr>
        </thead>
        <tbody>
          {reviews.slice((page - 1) * 15, page * 15).map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.user_name}</td>
              <td>{item.user_id}</td>
              <td>{item.content}</td>
              <td>{item.rating}</td>
              <td>{item.like_count}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination page={page} pagesCount={totalPages} setPage={setPage} />
    </section>
  );
}
