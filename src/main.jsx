import { createRoot } from "react-dom/client";
import App from "./App";
import Greetings from "./App";


createRoot(document.getElementById("root")).render(
  <Greetings name="John" age = {25}/>
);
