import HeaderMenu from "./layout/HeaderMenu";
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
import Posts from "./pages/Posts";

function App() {
  const [currentUserData, setCurrentUserData] = useState({
    userInfo: [],
    isLoggedIn: false,
  });

  return (
    <UserContext.Provider value={{ currentUserData, setCurrentUserData }}>
      <BrowserRouter>
        <ScrollToTop />
        <HeaderMenu />
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route
            path="/regjistrohu"
            element={currentUserData.isLoggedIn ? <Residences /> : <Register />}
          />
          <Route
            path="/kyqu"
            element={currentUserData.isLoggedIn ? <Residences /> : <Login />}
          />
          <Route
            path="/residences"
            element={
              currentUserData.isLoggedIn ? (
                <Residences />
              ) : (
                <Navigate to="/kyqu" />
              )
            }
          />
          <Route
            path="/residences/:id"
            element={
              currentUserData.isLoggedIn ? (
                <Residence />
              ) : (
                <Navigate to="/kyqu" />
              )
            }
          />
          <Route
            path="/ofro"
            element={
              currentUserData.isLoggedIn ? <Ofro /> : <Navigate to="/kyqu" />
            }
          />
          <Route
            path="/postimet"
            element={
              currentUserData.isLoggedIn ? <Posts /> : <Navigate to="/kyqu" />
            }
          />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
