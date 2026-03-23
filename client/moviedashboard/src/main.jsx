import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { ApiProvider } from "./Context/ApiContext.jsx";
import { SearchListProvider } from "./Context/SearchListContext.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <ApiProvider>
      <SearchListProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SearchListProvider>
    </ApiProvider>
  </>,
);
