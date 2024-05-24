import { useDispatch, useSelector } from "react-redux";
import { postStatus, setPM, setPassword, setUser } from "../../store/features/register/registerSlice";
import { RegisterService } from "../../config/register";

function Register() {
    const {user, email, password, problem_manager} = useSelector(state => state.register);
    const dispatch = useDispatch();
    const postRegister = () => {
        dispatch(setPM());
        
        if(problem_manager.status === "OK")
            RegisterService({user: user, password: password, email: email}, (e) => dispatch(postStatus(e)));
    }

    return <div>
        {
            (problem_manager.status === 'END')?
            <div>
                <p>REGISTRADO</p>
            </div>
            :
            <div>
                <h1>Register</h1>
                <input type="text" placeholder="user" onChange={e => dispatch(setUser(e.target.value))}/>
                <input type="mail" placeholder="mail" onChange={e => dispatch(setUser(e.target.value))}/>
                <input type="password" placeholder="password" onChange={e => dispatch(setPassword(e.target.value))}/>
                <button onClick={_ => postRegister()}>DONE</button>
                <p>You have an account? <a href="">Login</a></p>
            </div>
        }
    </div>;
}

export default Register;