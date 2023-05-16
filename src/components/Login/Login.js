const Login = () => {

    const loginHandler = () => {
        localStorage.setItem('userLogin', true)
    }
    return (
        <>
            <button onClick={loginHandler}>Login</button>
        </>
    )
}

export default Login;