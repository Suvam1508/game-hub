import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6f2cef311587451d86f21f3f97d624c5",
  },
});
