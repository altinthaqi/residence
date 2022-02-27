import Menu from "./layout/Menu";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Residences from "./pages/Residences";
import Residence from "./pages/Residence";
import ScrollToTop from "./ScrollToTop";
import Ofro from "./pages/Ofro";
import { useState, useContext } from "react";
import { UserContext } from "./context/UserContext";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [userData, setUserData] = useState({});

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        <ScrollToTop />
        <Menu />
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/regjistrohu" element={<Register />} />
          <Route path="/kyqu" element={<Login />} />
          <Route
            path="/residences"
            element={loggedIn ? <Residences /> : <Navigate to="/kyqu" />}
          />
          <Route
            path="/residences/:id"
            element={loggedIn ? <Residence /> : <Navigate to="/kyqu" />}
          />
          <Route
            path="/ofro"
            element={loggedIn ? <Ofro /> : <Navigate to="/kyqu" />}
          />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
