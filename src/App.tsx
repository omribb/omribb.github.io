import React from "react";
import { Menu } from "./menu/menu";
import { Router } from "./router";
import { GlobalStyle } from "./styles/global-style";

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <Router />
    </>
  );
};
