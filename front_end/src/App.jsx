import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./signup/Signup";
import Login from "./login/Login";
import Homepage from "./homepage/Homepage";

import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/useAuthContext";

function App() {
  const { authUser } = useAuthContext();
  return (
    <>
    
    {/* <div className="p-4 h-screen flex items-center justify-center"> */}
      <Routes>
        <Route
          path="/"
          element={authUser ? <Homepage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>
      <Toaster />
    {/* </div> */}
    </>
  );
}

export default App;
