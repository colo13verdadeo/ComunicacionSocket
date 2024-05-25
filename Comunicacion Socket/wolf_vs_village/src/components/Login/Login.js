import { postStatus, setPM, setPassword, setUser } from "../../store/features/login/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { LoginService } from "../../config/Login";
import Welcome from "../Welcome/Welcome";
import { useEffect } from "react";
import "./Login.css";
import FormLogin from "./subComponents/FormLogin";

function Login({setCompo}) {
    const {user, password, problem_manager} = useSelector(state => state.login);
    const dispatch = useDispatch();
    const errData = (e) => (e === problem_manager.type_error)? "DataError" : "";
    useEffect(() => {
        if(problem_manager.status === "CONNECTION"){
            LoginService({user: user, password: password}, (e) => dispatch(postStatus(e)));
        }

    }); 
    //TODO: debería tener [problem_manager] pero en la terminal aparece un warning que pide 
    //[user, email, password, problem_manager, dispatch], y que esté dispatch ahí no me parece bueno (loop infinito).
    //En sí, el useEffect debería funcionar sólo sí problem_manager se modifica, pero funciona para 
    //cualquier caso.

    //TODO: Al logearse, debería redirecccionar al menú principal para jugadores.

    return <div className="blockForm1">
        {
            (problem_manager.status === 'END')? 
            <p>CONECTADOS</p> //TODO: Falta diseñar
            :
            <FormLogin  user={e => dispatch(setUser(e))} 
                        passw={e => dispatch(setPassword(e))}
                        pm={() => dispatch(setPM())}
                        errData={(e) => errData(e)}/>
        }
        <Welcome setCompo={setCompo} modCompo="Register"/>
    </div>;
}

export default Login;