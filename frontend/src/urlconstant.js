// Constants.js
const production = {
  url: `https://ecommerce-api-g7iw.onrender.com/api/`,
};
const development = {
  url: "http://localhost:5001/api/",
};
export const config =
  process.env.NODE_ENV === "development" ? development : production;
