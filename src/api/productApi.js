import axiousClient from "./axiosClient";

const productApi = {
  getAll: (params) => {
    const url = "/products";
    return axiousClient.get(url, { params });
  },
  get: (id) => {
    const url = `/products/${id}`;
    return axiousClient.get(url);
  },
  add: (data) => {
    const url = "/products";
    return axiousClient.post(url, data);
  },
  update: (data) => {
    const url = `/products/${data.id}`;
    return axiousClient.patch(url, data);
  },
  remove: (id) => {
    const url = `/products/${id}`;
    return axiousClient.delete(url);
  },
};

export default productApi;
