import { postStatus, setPM, setPassword, setUser } from "../../store/features/login/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { LoginService } from "../../config/Login";
import "./Login.css";

function Login({setCompo}) {
    const {user, password, problem_manager} = useSelector(state => state.login);
    const dispatch = useDispatch();
    const postLogin = () => {
        dispatch(setPM());
        
        //TODO: Probar la creación de cookies del back, si es necesario: crearla desde aquí.
        if(problem_manager.status === "OK")
            LoginService({user: user, password: password}, (e) => dispatch(postStatus(e)));
    }

    return <div className="blockForm1">
        {
            (problem_manager.status === 'END')? 
            <p>CONECTADOS</p>
            :
            <div className="LogIn">
                <h1>Sign In</h1>
                <div className="form">
                    <input type="text" placeholder="user" onChange={e => dispatch(setUser(e.target.value))}/>
                    <input type="password" placeholder="password" onChange={e => dispatch(setPassword(e.target.value))}/>
                    <button onClick={() => postLogin()}>DONE</button>
                </div>
            </div>
        }
        <div className="Welcome wLogin">
            <h1>WELCOME!</h1>
            <p>You do not have an account?</p>
            <button onClick={() => setCompo("register")}>SIGN UP</button>
        </div>
    </div>;
}

export default Login;