import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";

function App() {
  const user = null;
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
