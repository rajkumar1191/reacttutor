import { useState, useEffect, useContext } from "react";

import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const Dashboard = () => {
  const ctx = useContext(AuthContext);

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
    // window.location.href = "/";
  };

  return (
    <>
      <div>
        <h2>Dashboard</h2>
        {ctx.isLoggedIn && (
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
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Dashboard;
