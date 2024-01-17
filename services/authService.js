import axios from "axios";



import { site } from "../constants/site";

const loginUserEP = `/auth/login`;

const BASE_URL_V1 = site.API_BASE_URL + "/api/v1";

export const loginUser = async (userData) => {
  axios
    .post(BASE_URL_V1 + loginUserEP, userData)
    .then(function (response) {
      const token = response.data.token;
      console.error("data", token);
    })
    .catch(function (error) {
      console.error("İstek hatası:", error);
    });
};

export const gooogleLoginUser = async (userData) => {
  const jsonData = JSON.stringify(userData);

  axios.post(BASE_URL_V1 + loginUserEP, jsonData).then(function (response) {
    const token = response.token;
  });
};
