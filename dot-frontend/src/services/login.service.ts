import axios from "axios";
import { LoginCredentials } from "../types/credential";

const baseUrl = import.meta.env.VITE_BASE_URL;

export function login(payload: LoginCredentials) {
  const { email, password } = payload;

  return axios({
    method: "POST",
    url: `${baseUrl}/auth/login`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: { email, password },
  });
}

export function logout(token: string) {
  return axios({
    method: "POST",
    url: `${baseUrl}/auth/logout`,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
