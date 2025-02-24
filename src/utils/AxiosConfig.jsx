import axios from "axios";

const AXIOS = axios.create({
  // baseURL: "http://192.168.1.196:8000/",
  // baseURL: "http://localhost:3001/",
  baseURL: process.env.REACT_APP_BACKEND_LINK,

  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
const FILE_TYPE = ["JPG", "PNG", "GIF"];

export { FILE_TYPE, AXIOS };

