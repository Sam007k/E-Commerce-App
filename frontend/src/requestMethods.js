import axios from "axios";

import { config } from "./urlconstant";
const URL = config.url;

// const BASE_URL = `http://localhost:5001/api/`;
const BASE_URL = URL

// const BASE_URL = `http://wtl4yt-5001.csb.app/api/`;

// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken || " ";
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
