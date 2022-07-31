import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Watch from "./pages/Watch";
import Login from "./pages/Login";
import { useContext } from "react";
import { AuthContext } from "./AuthContext/AuthContext";
function App() {
  const {user} = useContext(AuthContext)
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
