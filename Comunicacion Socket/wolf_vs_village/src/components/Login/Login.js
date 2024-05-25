import { postStatus, setPM, setPassword, setUser } from "../../store/features/login/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { LoginService } from "../../config/Login";
import Welcome from "../Welcome/Welcome";
import { useEffect } from "react";
import "./Login.css";

function Login({setCompo}) {
    const {user, password, problem_manager} = useSelector(state => state.login);
    const dispatch = useDispatch();
    useEffect(() => {
        if(problem_manager.status === "CONNECTION")
            LoginService({user: user, password: password}, (e) => dispatch(postStatus(e)));
    }); //TODO: debería tener [problem_manager] pero en la terminal aparece un warning que pide 
    //[user, email, password, problem_manager, dispatch], y que esté dispatch ahí no me parece bueno (loop infinito).
    //En sí, el useEffect debería funcionar sólo sí problem_manager se modifica, pero funciona para 
    //cualquier caso.

    return <div className="blockForm1">
        {
            (problem_manager.status === 'END')? 
            <p>CONECTADOS</p> //TODO: Falta diseñar
            :
            <div className="LogIn">
                <h1>Sign In</h1>
                <div className="form">
                    <input type="text" placeholder="user" onChange={e => dispatch(setUser(e.target.value))}/>
                    <input type="password" placeholder="password" onChange={e => dispatch(setPassword(e.target.value))}/>
                    <button onClick={() => dispatch(setPM())}>DONE</button>
                </div>
            </div>
        }
        <Welcome setCompo={setCompo} modCompo="Register"/>
    </div>;
}

export default Login;