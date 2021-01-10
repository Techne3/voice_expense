import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";

import App from "./App";
import "./index.css";

import { Provider } from "./context/context";

ReactDOM.render(
  <SpeechProvider appId="20c2c8a3-6903-4000-a478-a0729572cf7a" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,

  document.getElementById("root")
);
