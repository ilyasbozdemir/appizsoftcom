// pages/createUser.js

import { createUser, getAllUser } from "../services/userService";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const CreateUser = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const message = await createUser({
        firstName: "Efe",
        lastName: "Ceylan",
      });
      console.log(message); // Başarı veya hata mesajını görüntüleyebilirsiniz.
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleSubmit2 = async (event) => {
    event.preventDefault();

    const user = {
      Id: "some-guid-value",
      UserName: "john_doe",
      Email: "john@example.com",
      Name: "John",
      LastName: "Doe",
      CreatedAt: new Date("2023-09-10T00:00:00Z"),
      UpdatedAt: new Date("2023-09-10T00:00:00Z"), // veya uygun bir değer
      LastLogin: new Date("2023-09-10T00:00:00Z"), // veya uygun bir değer
      Roles: ["Role1", "Role2"], // Kullanıcının rolleri
    };

    try {
      const message = await getAllUser();
      console.log(message); // Başarı veya hata mesajını görüntüleyebilirsiniz.
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Flex justifyContent={"space-around"} p={10}>
      <h1>Kullanıcı Oluştur</h1>
      <form onSubmit={handleSubmit}>
        {/* Form alanları */}
        <Button type="submit">Kullanıcı Oluştur</Button>
      </form>

      <Box>
        <form onSubmit={handleSubmit2}>
          {/* Form alanları */}

        

          <Button type="submit" colorScheme="red">Kullanıcı Getir</Button>
        </form>
      </Box>
    </Flex>
  );
};

export default CreateUser;
