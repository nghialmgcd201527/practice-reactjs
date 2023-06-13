import axiousClient from "./axiosClient";

const userApi = {
  register(data) {
    const url = "/auth/local/register";
    return axiousClient.post(url, data);
  },
};

export default userApi;
