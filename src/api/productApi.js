import axiousClient from "./axiosClient";

const productApi = {
  async getAll(params) {
    //Transform _page to _start
    const newParams = { ...params };
    newParams._start =
      !params._page || params._page <= 1
        ? 0
        : (params._page - 1) * (params._limit || 50);

    //Remove un-needed key
    delete newParams._page;

    //Fetch product list + count
    const productList = await axiousClient.get("/products", {
      params: newParams,
    });
    const count = await axiousClient.get("/products/count", {
      params: newParams,
    });

    //Build response and return
    return {
      data: productList,
      pagination: {
        page: params._page,
        limit: params._limit,
        total: count,
      },
    };
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
