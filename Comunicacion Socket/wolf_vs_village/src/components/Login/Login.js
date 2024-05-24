import { postStatus, setPM, setPassword, setUser } from "../../store/features/login/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { LoginService } from "../../config/Login";

function Login() {
    const {user, password, problem_manager} = useSelector(state => state.login);
    const dispatch = useDispatch();
    const postLogin = () => {
        dispatch(setPM());
        
        //TODO: Probar la creación de cookies del back, si es necesario: crearla desde aquí.
        if(problem_manager.status === "OK")
            LoginService({user: user, password: password}, (e) => dispatch(postStatus(e)));
    }

    return <div>
        {
            (problem_manager.status === 'END')? 
                <p>CONECTADOS</p>
            :
                <div>
                    <h1>LOGIN</h1>
                    <input type="text" placeholder="user" onChange={e => dispatch(setUser(e.target.value))}/>
                    <input type="password" placeholder="password" onChange={e => dispatch(setPassword(e.target.value))}/>
                    <button onClick={() => postLogin()}>DONE</button>
                    <p>You do not have an account? <a href="">Register</a></p>
                </div>
        }
    </div>;
}

export default Login;