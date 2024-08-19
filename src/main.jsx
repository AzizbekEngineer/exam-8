import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
const App = lazy(() => import("./App.jsx"));
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./context/index.js";
import OpenPage from "./components/openPage/OpanePage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<OpenPage />}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>
);
