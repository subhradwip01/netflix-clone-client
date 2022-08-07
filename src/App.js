import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Watch from "./pages/Watch/Watch";
import Login from "./pages/Login/Login";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext/AuthContext";
import { api } from "./config";
import jwt_decode from "jwt-decode"
function App() {
  const {user,onLogout} = useContext(AuthContext);
  api.interceptors.request.use(async (req) => {
    const token = JSON.parse(localStorage.getItem("user"))?.token;
    if (token) {
      const user = jwt_decode(token);
      const currentTime = new Date().getTime() / 1000;
      if (currentTime > user.exp) {
        onLogout()
        return req;
      }
    }
    return req;
  });
  

  return (

    <>
      <Routes>
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />

        {user && (
          <>
            <Route path="/movies" element={<Home type="movie" />} />
            <Route path="/series" element={<Home type="series" />} />
            <Route path="/myList" element={<Home />} />
            <Route path="/watch/:id" element={<Watch />} />{" "}
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
