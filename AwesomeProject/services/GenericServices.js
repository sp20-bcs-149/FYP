import axios from "axios";

axios.defaults.baseURL = "http://192.168.10.12:4000/";
// axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");

class GenericService {
  constructor() {}

  post = (url, data) =>
    new Promise((resolve, reject) => {
      axios
        .post(url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
}

export default GenericService;
