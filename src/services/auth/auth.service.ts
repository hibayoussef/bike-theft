import { _axios } from "../../interceptor/http-config";

export const _AuthApi = {
  newAccount: async (data: any) => {
    return _axios.post("/website/auth/register", data).then((res) => {
      return res.data;
    });
  },

/*************  ✨ Codeium Command ⭐  *************/
  /**
   * Logs in the user.
   * @param {{email: string; password: string}} data
   * The user's email and password.

/******  1a598d0d-6fe8-4557-a64e-43035a80156c  *******/  login: async (data: any) => {
    return _axios.post("/website/auth/login", data).then((res) => {
      _AuthApi.storeToken(res?.data?.data?.token);
      _AuthApi.storeRole(res?.data?.data?.role);
    });
  },


  storeToken: (token: any) => {
    localStorage.setItem("token", token);
  },
  storeRole: (role: any) => {
    localStorage.setItem("role", role);
  },

  getToken: () => localStorage.getItem("token"),
  getRole: () => localStorage.getItem("role"),

  isAuthenticated: () => !!localStorage.getItem("token"),

  destroyToken: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    window.location.reload();
  },
};
