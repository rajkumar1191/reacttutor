const Login = () => {

    const loginHandler = () => {
        localStorage.setItem('userLogin', true)
        window.location.href = '/';
    }
    return (
        <>
            <button onClick={loginHandler}>Login</button>
        </>
    )
}

export default Login;