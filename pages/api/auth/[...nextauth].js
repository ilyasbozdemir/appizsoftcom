import NextAuth from "next-auth";
import AppleProvider from "next-auth/providers/apple";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt from "jsonwebtoken";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          label: "Username",
          type: "email",
          placeholder: "user@appizsoft.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        //burda servise istek atılır.
        //mail adresi  ve şifre ile

        //credentials.email ve  credentials.password

        const user = {
          id: "1",
          name: credentials.username,
          username: "sunucudan_gelen_username",
          email: credentials.email,
        }; //örnek user

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],

  jwt: {
    async encode({ secret, token }) {
      return jwt.sign(token, secret);
    },
    async decode({ secret, token }) {
      return jwt.verify(token, secret);
    },
  },

  secret: "your-secret-key-2", // JWT'nin imzalanması için kullanılan gizli anahtar

  pages: {
    signIn: "/login",
  },
};

export { authOptions };

export default NextAuth(authOptions);
