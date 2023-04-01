import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";

function App() {
  const user = null;
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged in
        console.log(userAuth);
      }
      else {
        // Logged out
      }
    });
  }, []);
  return (
    <div className="App">
      {/* <HomeScreen /> */}
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" Component={HomeScreen} />
            <Route path="/login" Component={LoginScreen} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
