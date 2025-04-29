import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2fc57ba206d44aefb522ec4b72d4ca38",
  },
});
