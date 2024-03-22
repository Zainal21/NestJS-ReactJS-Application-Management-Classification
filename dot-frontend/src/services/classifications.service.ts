import axios from "axios";
import { ClassificationDto } from "../dtos/classification.dto";

const baseUrl = import.meta.env.VITE_BASE_URL;

export function getClassifications(token: string | null, page = 1) {
  return axios({
    method: "GET",
    url: `${baseUrl}/classifications?page=${page}`,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export function createClassification(
  token: string | null,
  payload: ClassificationDto
) {
  return axios({
    method: "POST",
    url: `${baseUrl}/classifications`,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: payload,
  });
}

export function getClassificationById(token: string | null, id: string) {
  return axios({
    method: "GET",
    url: `${baseUrl}/classifications/${id}`,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export function updateClassification(
  token: string | null,
  id: string,
  payload: ClassificationDto
) {
  return axios({
    method: "PATCH",
    url: `${baseUrl}/classifications/${id}`,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: payload,
  });
}

export function deleteClassification(token: string | null, id: string) {
  return axios({
    method: "DELETE",
    url: `${baseUrl}/classifications/${id}`,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
