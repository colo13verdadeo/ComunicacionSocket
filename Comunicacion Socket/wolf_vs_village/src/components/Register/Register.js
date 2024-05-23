import { useDispatch, useSelector } from "react-redux";
import { postRegister, setPassword, setUser } from "../../store/features/register/registerSlice";

function Register() {
    //const dataUser = useSelector(state => state.Register);
    const dispatch = useDispatch();

    return <div>
        <h1>Register</h1>
        <input type="text" placeholder="user" onChange={e => dispatch(setUser(e.target.value))}/>
        <input type="mail" placeholder="mail" onChange={e => dispatch(setUser(e.target.value))}/>
        <input type="password" placeholder="password" onChange={e => dispatch(setPassword(e.target.value))}/>
        <button onClick={(e) => dispatch(postRegister())}>DONE</button>
        <p>You have an account? <a href="">Login</a></p>
    </div>;
}

export default Register;