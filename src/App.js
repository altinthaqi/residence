import Menu from "./layout/Menu";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Residences from "./pages/Residences";
import Residence from "./pages/Residence";
import ScrollToTop from "./ScrollToTop";

const apiPath = "http://localhost/residence/src/apis/hello.php";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/regjistrohu" element={<Register />} />
        <Route path="/kyqu" element={<Login />} />
        <Route path="/residences" element={<Residences />} />
        <Route path="/residences/:id" element={<Residence />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
