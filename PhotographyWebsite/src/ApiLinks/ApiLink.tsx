import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const mainServer = axios.create({
  baseURL: import.meta.env.VITE_APP_API_KEY,
  withCredentials: true,
}) 

export const LogServer = axios.create({
  baseURL: import.meta.env.VITE_APP_SIGN_KEY,
  withCredentials: true,
}) 