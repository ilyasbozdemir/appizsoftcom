// services/userService.js
import axios from "axios";

//https://api.appizsoft.com/api/v1/

//http://localhost:5226/api/v1/users

const API_BASE_URL = "http://localhost:5226/api/v1/"; // API'nin temel URL'si
const createUserEP = `users/add`;
const getAllUserEP = `users/all`;

export const createUser = async (userData) => {

    //const response = await axios.post(API_BASE_URL + createUserEP, userData);

    console.table(userData)


 /* try {
    const response = await axios.post(API_BASE_URL + createUserEP, userData);

    if (response.status === 201) {
      // Başarılı oluşturma durumunda başka bir işlem yapabilirsiniz.
      return "Kullanıcı başarıyla oluşturuldu.";
    } else {
      // Hata mesajını işleyebilirsiniz.
      throw new Error("Kullanıcı oluşturma başarısız oldu.");
    }
  } catch (error) {
    // İstek sırasında bir hata oluştu.
    throw new Error("İstek yapılırken bir hata oluştu: " + error.message);
  }
  */
};
//http://localhost:5226/api/v1/users/all

export const getAllUser = async (userData) => {
  try {
    const response = await axios.get(API_BASE_URL + getAllUserEP);

    if (response.status === 200) {
      // Başarılı oluşturma durumunda başka bir işlem yapabilirsiniz.
      return response.data;
    } else {
      // Hata mesajını işleyebilirsiniz.
      throw new Error("all user oluşturma başarısız oldu.");
    }
  } catch (error) {
    // İstek sırasında bir hata oluştu.
    throw new Error("İstek yapılırken bir hata oluştu: " + error.message);
  }
};
