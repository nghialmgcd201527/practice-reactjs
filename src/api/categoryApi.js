import axiousClient from "./axiosClient";

const categoryApi = {
  getAll: (params) => {
    const url = "/categories";
    return axiousClient.get(url, { params });
  },
  get: (id) => {
    const url = `/categories/${id}`;
    return axiousClient.get(url);
  },
  add: (data) => {
    const url = "/categories";
    return axiousClient.post(url, data);
  },
  update: (data) => {
    const url = `/categories/${data.id}`;
    return axiousClient.patch(url, data);
  },
  remove: (id) => {
    const url = `/categories/${id}`;
    return axiousClient.delete(url);
  },
};

export default categoryApi;
