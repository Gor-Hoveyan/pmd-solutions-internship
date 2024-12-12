import api from "../axiosConfig";

export async function getReviews() {
  const data = await api.get(`/admin/reviews`);
  return await data.data;
}
