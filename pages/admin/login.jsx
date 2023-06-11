import React from "react";
import Login from "../../components/Login";
import Head from "next/head";
function LoginPage() {
  return (
    <>
      <Head>
        <title>Appizsoft • Admin Paneli Giriş</title>
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </>
  );
}

export default LoginPage;
