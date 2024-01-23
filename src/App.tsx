import "./styles/index.scss";
import { HomePage } from "./pages/HomePage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <HomePage />
      <ToastContainer autoClose={2 * 1000} theme="dark" />
    </>
  );
};

export default App;
