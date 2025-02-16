import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PasswordGenerator from "./pages/passwordGenerator";
import Otp from "./pages/Otp";
import Layout from "./pages/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/passg" element={<PasswordGenerator />} />
          <Route path="/otpg" element={<Otp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
