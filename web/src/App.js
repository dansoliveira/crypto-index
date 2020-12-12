import {
  BrowserRouter,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Routes from "./routes";
import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
      <ToastContainer />
    </>
  );
}

export default App;
