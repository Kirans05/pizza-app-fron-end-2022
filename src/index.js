import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Context from "./context/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <ChakraProvider>
    <BrowserRouter>
       <Context />
    </BrowserRouter>
      </ChakraProvider>
  </React.StrictMode>
);
