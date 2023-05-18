import { useState, useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./../../store/user";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { useSelector } from "react-redux";


const Dashboard = () => {
  const ctx = useContext(AuthContext);
  const dispatch = useDispatch();

  const loginData = useSelector((state)=>state.user.value)
  console.log(loginData)
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
    dispatch(logout({isLoggedIn:false}))
    // window.location.href = "/";
  };

  const loginHandler = () => {
    localStorage.removeItem("userLogin");
    dispatch(login({ isLoggedIn: true }));
    // window.location.href = "/";
  };


  return (
    <>
      <div>
        <h2>Dashboard</h2>
        {loginData.isLoggedIn && (
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
              <button onClick={logoutHandler}>logout</button>
            </div>
          </>
        )}
        {!loginData.isLoggedIn && (
          <>
            
            <div className="card-footer text-body-secondary">
              <button onClick={loginHandler}>login</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Dashboard;
