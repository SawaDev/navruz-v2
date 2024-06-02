import axios from "axios";

export const api = axios.create({
  headers: {
    "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
  }
})