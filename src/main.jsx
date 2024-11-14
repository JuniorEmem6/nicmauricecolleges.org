import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Admin from "./Admin.jsx";
import "./index.css";

const MainApp = () => {
  const [login, setLogin] = useState(false);

  return <>{login ? <Admin /> : <App />}</>;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainApp />
  </StrictMode>
);
