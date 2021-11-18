import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/User/User";
import Users from "./components/Users/Users";
import Album from "./components/Album/Album";

import "./index.css";

/**
 * @todo Nest the routes under the Users component.
 * @todo Keep state in the Users component and only
 * fetch new data when it's missing in state.
 * @todo Create a breadcrumb component that generates the
 * breadcrumbs dynamically.
 */

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path=":userId" element={<User />} />
        <Route path=":userId/:albumId" element={<Album />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
