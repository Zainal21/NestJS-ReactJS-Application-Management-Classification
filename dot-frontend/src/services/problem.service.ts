import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

export function getProblems(token: string | null) {
  return axios({
    method: "GET",
    url: `${baseUrl}/problems`,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
