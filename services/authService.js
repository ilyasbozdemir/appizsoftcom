// services/userService.js
import axios from "axios";

//https://api.appizsoft.com/api/v1/

//http://localhost:5226/api/v1/users

import { site } from "../constants/site";

const registerUserEP = `/auth/register`;

const loginUserEP = `/auth/login`;

const BASE_URL_V1 = site.API_BASE_URL + "api/v1";

export const loginUser = async (userData) => {

  const jsonData = JSON.stringify(userData);


  console.table(jsonData)

  axios
    .post(BASE_URL_V1 + loginUserEP, jsonData,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
      )
    .then(function (response) {
      // İstek başarılı olduğunda burası çalışır
      console.log("Başarılı istek:", response.token);
    })
};
