import axios from "axios";

import { config } from "./urlconstant";
const URL = config.url;

// const BASE_URL = `http://localhost:5001/api/`;
const BASE_URL = URL;

const TOKEN =
  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
    .accessToken ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZmM1ZjRkNzk4ODc1OTExMDE1ODkyNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5ODUwNjAxNCwiZXhwIjoxNjk4NzY1MjE0fQ.LQhZlKzo98Omj_AxNcHppiSvZGp1gzEhVXmAX7m38nA";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
