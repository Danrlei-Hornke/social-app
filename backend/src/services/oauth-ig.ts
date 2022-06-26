import axios from "axios";

export const IG_Basic = axios.create({
   baseURL: "https://api.instagram.com",
   headers: {
      "Content-Type": "application/x-www-form-urlencoded",
   },
});

export const IG_Graph = axios.create({
   baseURL: "https://graph.instagram.com",
   headers: {
      "Content-Type": "application/x-www-form-urlencoded",
   },
});

