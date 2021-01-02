import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import "./base.css";
///Компонент называется всегда с большой буквы

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// BrowserRouter создает экземпляр этой истории после чего прослушивает-следит состояние URL, бросает служебную информацию, что url изменился. оповещает
