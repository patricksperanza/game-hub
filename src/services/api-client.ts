import axios from "axios"

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6596bc5f77e544898177bd35327a0755",
  },
})
