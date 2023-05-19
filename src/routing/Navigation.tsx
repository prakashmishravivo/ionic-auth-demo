import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return <RouterProvider router={router} />;
};

export default Navigation;
