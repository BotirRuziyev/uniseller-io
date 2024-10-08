import axios from "axios";

const API_URL = "http://localhost:3333/auth";

class AuthService {
  login(user) {
    return axios
      .post(API_URL + "/signin", {
        email: user.email,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(user) {
    return axios.post(API_URL + "/signup", {
      email: user.email,
    });
  }
}

export default new AuthService();
