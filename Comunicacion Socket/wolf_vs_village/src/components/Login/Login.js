import { useDispatch, useSelector } from "react-redux";
import { postLogin, setPassword, setUser } from "../../store/features/login/loginSlice";

function Login() {
    //const dataUser = useSelector(state => state.login);
    const dispatch = useDispatch();

    return <div>
        <h1>LOGIN</h1>
        <input type="text" placeholder="user" onChange={e => dispatch(setUser(e.target.value))}/>
        <input type="password" placeholder="password" onChange={e => dispatch(setPassword(e.target.value))}/>
        <button onClick={() => dispatch(postLogin())}>DONE</button>
        <p>You do not have an account? <a href="">Register</a></p>
    </div>;
}

export default Login;