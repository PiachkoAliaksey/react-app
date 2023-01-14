import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store/store";
import { Provider } from 'react-redux'
import {ThemeProvider} from "./context/ThemeProvider";

ReactDOM.render(<Provider store={store} ><ThemeProvider><App /></ThemeProvider></Provider>, document.getElementById("root") as HTMLElement);
