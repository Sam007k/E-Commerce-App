import axios from "axios";

const port= 5001

const BASE_URL =`http://wtl4yt-${port}.csb.app/api/`;
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZmM1ZjRkNzk4ODc1OTExMDE1ODkyNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NDUxODQ5MSwiZXhwIjoxNjk0Nzc3NjkxfQ.RTFH548sZmsfUMlWW-q4wRwtpXi_RrkFOakrJWeO9vM";


  export const publicRequest = axios.create({
  baseUrl: BASE_URL,
});

export const userRequest = axios.create({
  baseUrl: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
