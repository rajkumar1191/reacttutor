// import logo from "./logo.svg";
// import './App.css';
import { useState, useEffect } from "react";

import Profile from "./components/Profile/Show";
import AddProfile from "./components/Profile/Add";
import Gallery from "./components/Gallery/Gallery";

import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import Login from "./components/Login/Login";
import Navigation from "./components/Navigation/Navigation";

import AuthContext from "./store/auth-context";

// fragments
function App() {
  const [name, setName] = useState("Raj");
  const [age, setAge] = useState("31");
  const [loc, setLoc] = useState("Chennai");
  const [editData, setEditData] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);

  const getProfileFromChild = (data) => {
    setName(data.name);
    setAge(data.age);
    setLoc(data.loc);
  };

  const getEditData = (data) => {
    const { name, age, loc, id } = data;
    setEditData({ name: name, age: age, loc: loc, id: id });
  };

  const logoutHandler = () => {
    localStorage.removeItem("userLogin");
    setLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem("userLogin", true);
    setLoggedIn(true);
  };

  useEffect(() => {
    const user = localStorage.getItem("userLogin");

    if (user) {
      setLoggedIn(true);
    }
  }, [isLoggedIn]);

  return (
    <>
      {isLoggedIn && <button onClick={logoutHandler}>Log Out</button>}
      {!isLoggedIn && <button onClick={loginHandler}>Log In</button>}

      <AuthContext.Provider
        value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}
      >
        <Dashboard />
        <Navigation />
      </AuthContext.Provider>
    </>
  );
}

export default App;
