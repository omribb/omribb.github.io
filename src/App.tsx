import React from "react";
import { GlobalStyle } from "./styles/global-style";

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        <h1>Hello World!!</h1>
      </div>
    </>
  );
};
