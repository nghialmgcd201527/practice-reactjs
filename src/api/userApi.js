import axiousClient from "./axiosClient";

const userApi = {
  register(data) {
    const url = "/auth/local/register";
    return axiousClient.post(url, data);
  },

  login(data) {
    const url = "/auth/local";
    return axiousClient.post(url, data);
  },
};

export default userApi;
