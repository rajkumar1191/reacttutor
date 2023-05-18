import { useDispatch } from "react-redux";
import { login } from "./../../store/user";

const Login = () => {
  const dispatch = useDispatch();

  const loginHandler = () => {
    // localStorage.setItem('userLogin', true)
    dispatch(login({ isLoggedIn: true }));
  };
  return (
    <>
      <button onClick={loginHandler}>Login</button>
    </>
  );
};

export default Login;
