import React from "react";
import Login from "../components/Login";
import Head from "next/head";
function LoginPage() {
  return (
    <>
      <Head>
        <title>Appizsoft • Giriş Paneli </title>
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </>
  );
}

export default LoginPage;
