import { useDispatch, useSelector } from "react-redux";
import { postStatus, setPM, setPassword, setUser } from "../../store/features/register/registerSlice";
import { RegisterService } from "../../config/register";
import "./Register.css";

function Register({setCompo}) {
    const {user, email, password, problem_manager} = useSelector(state => state.register);
    const dispatch = useDispatch();
    const postRegister = () => {
        dispatch(setPM());
        
        if(problem_manager.status === "OK")
            RegisterService({user: user, password: password, email: email}, (e) => dispatch(postStatus(e)));
    }

    return <div className="blockForm1">
        <div className="Welcome wRegister">
            <h1 className="TitleWelcome">WELCOME!</h1>
            <p className="TextWelcome">You have an account?</p>
            <button className="ButtonSignUP" onClick={() => setCompo("login")}>SIGN IN</button>
        </div>
        {
            (problem_manager.status === 'END')?
            <div>
                <p>REGISTRADO</p>
            </div>
            :
            <div className="Register">
                <h1>Sign Up</h1>
                <div className="form">
                    <input type="text" placeholder="user" onChange={e => dispatch(setUser(e.target.value))}/>
                    <input type="mail" placeholder="mail" onChange={e => dispatch(setUser(e.target.value))}/>
                    <input type="password" placeholder="password" onChange={e => dispatch(setPassword(e.target.value))}/>
                    <button onClick={_ => postRegister()}>DONE</button>
                </div>
            </div>
        }
    </div>;
}

export default Register;