import { useState } from "react";
import { Routes, Route } from "react-router-dom";


import Profile from "./../Profile/Show";
import AddProfile from "./../Profile/Add";
import Gallery from "./../Gallery/Gallery";
import Login from "./../Login/Login";

const Navigation = () => {
  const [name, setName] = useState("Raj");
  const [age, setAge] = useState("31");
  const [loc, setLoc] = useState("Chennai");
  const [editData, setEditData] = useState({});

  const getProfileFromChild = (data) => {
    setName(data.name);
    setAge(data.age);
    setLoc(data.loc);
  };

  const getEditData = (data) => {
    const { name, age, loc, id } = data;
    setEditData({ name: name, age: age, loc: loc, id: id });
  };

  
  const getDeleteData = () => {
    setName("");
    setAge("");
    setLoc("");
  };

  return (
    <Routes>
      <Route path="/" exact element={<h1>Welcome to tutorial</h1>}></Route>
      <Route
        path="/add"
        exact
        element={
          <AddProfile dataToEdit={editData} profileFn={getProfileFromChild} />
        }
      ></Route>
      <Route path="/login" exact element={<Login />}></Route>
      <Route
        path="/profile"
        exact
        element={
          <Profile
            deleteFn={getDeleteData}
            editFn={getEditData}
            name={name}
            age={age}
            loc={loc}
          />
        }
      ></Route>
      <Route
        path="/gallery"
        exact
        element={<Gallery deleteFn={getDeleteData} editFn={getEditData} />}
      ></Route>
    </Routes>
  );
};

export default Navigation;
