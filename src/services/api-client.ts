import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f990da3bb0f34668986dbc1e81af28a0",
  },
});
