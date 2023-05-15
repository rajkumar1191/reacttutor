import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const Dashboard = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("userLogin");

    if (user) {
      setLoggedIn(true);
      console.log(isLoggedIn);
    }
  }, [isLoggedIn]);

  const logoutHandler = () => {
    localStorage.removeItem("userLogin");
    window.location.href = '/';
  };

  return (
    <>
      <div>
        <h2>Dashboard</h2>
        {!isLoggedIn && (
          <div className="card-footer text-body-secondary">
            <Link to="/login">Login</Link>
          </div>
        )}
        {isLoggedIn && (
          <>
            <div className="card-footer text-body-secondary">
              <Link to="/">Dashboard</Link>
            </div>
            <div className="card-footer text-body-secondary">
              <Link to="/add">Add</Link>
            </div>
            <div className="card-footer text-body-secondary">
              <Link to="/profile">Profile</Link>
            </div>
            <div className="card-footer text-body-secondary">
              <Link to="/gallery">Gallery</Link>
            </div>
            <div className="card-footer text-body-secondary">
              <button onClick={logoutHandler}>Log Out</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Dashboard;
