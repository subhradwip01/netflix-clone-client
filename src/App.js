import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Watch from "./pages/Watch/Watch";
import Login from "./pages/Login/Login";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext/AuthContext";
function App() {
  const {user} = useContext(AuthContext);

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
