import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { store } from "./redux/store";
// import { persistor } from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";

// import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // <Provider store={store}>
    // <PersistGate persistor={persistor}>
      <HashRouter>
        <App />
      </HashRouter>
    // </PersistGate>
  // </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
