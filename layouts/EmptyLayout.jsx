import React from "react";
import Error401 from "../components/Errors/Error401";
import Error403 from "../components/Errors/Error403";
import Error404 from "../components/Errors/Error404";
import Error500 from "../components/Errors/Error500";
import Error501 from "../components/Errors/Error501";
import { Children } from "react";

function EmptyLayout({ children }) {
  return <>{children}</>;
}

export default EmptyLayout;
