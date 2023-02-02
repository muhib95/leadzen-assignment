// import logo from "./logo.svg";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./components/router/router";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
