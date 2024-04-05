import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "react-auth-kit";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

import {
  LightTheme,
  BaseProvider,
  styled,
  DarkTheme,
  createDarkTheme,
} from "baseui";

const engine = new Styletron();

const Centered = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <StyletronProvider value={engine}>
      <BaseProvider
        theme={DarkTheme}
        overrides={{
          AppContainer: { style: { width: "100%", height: "100%" } },
        }}
      >
        <AuthProvider
          authType={"cookie"}
          authName={"_auth"}
          cookieDomain={window.location.hostname}
          cookieSecure={false} // treu quando si usa https
        >
          <Centered>
            <BrowserRouter> */}
    <App />
    {/* </BrowserRouter>
          </Centered>
        </AuthProvider>
      </BaseProvider>
    </StyletronProvider> */}
  </React.StrictMode>
);
