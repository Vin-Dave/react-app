import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Footer from "./components/footer/Footer";
import Heading from "./components/heading/Heading";

const dataCompany = {
  email: "abc@example.com",
  city: "Warsaw",
  country: "Poland",
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Heading headerTitle="Welcome!!!" />
    <App />
    <Footer dataCompany={dataCompany} contcatEmail="admin@example.com" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
