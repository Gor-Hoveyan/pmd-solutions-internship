import api from "../axiosConfig";

export async function getOrders(page) {
  const data = await api.get(`/admin/orders?page=${page}`);
  return await data.data;
}

export async function getOrder(id) {
  const data = await api.get(`/admin/order/${id}`);
  return await data.data;
}
