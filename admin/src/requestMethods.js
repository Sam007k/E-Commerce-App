import axios from "axios";

// const BASE_URL = `http://localhost:5001/api/`;
const BASE_URL = `https://e-commerce-app-api-gray.vercel.app/api/`;
// const BASE_URL = `https://wtl4yt-5001.csb.app/api/`;

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
