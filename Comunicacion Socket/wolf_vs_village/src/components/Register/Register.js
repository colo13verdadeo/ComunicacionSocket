import { postStatus, setEmail, setPM, setPassword, setUser } from "../../store/features/register/registerSlice";
import { useDispatch, useSelector } from "react-redux";
import { RegisterService } from "../../config/register";
import Welcome from "../Welcome/Welcome";
import { useEffect } from "react";
import "./Register.css";

function Register({setCompo}) {
    const {user, email, password, problem_manager} = useSelector(state => state.register);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(problem_manager)
        if(problem_manager.status === "CONNECTION")
            RegisterService({user: user, password: password, email: email}, (e) => dispatch(postStatus(e)));
    }); //TODO: debería tener [problem_manager] pero en la terminal aparece un warning que pide 
        //[user, email, password, problem_manager, dispatch], y que esté dispatch ahí no me parece bueno (loop infinito).
        //En sí, el useEffect debería funcionar sólo sí problem_manager se modifica, pero funciona para 
        //cualquier caso.
    return <div className="blockForm1">
        <Welcome setCompo={setCompo} modCompo="Login"/>
        {
            (problem_manager.status === 'END')? //TODO: Falta diseñar
            <div> 
                <p>REGISTRADO</p> 
            </div>
            :
            <div className="Register">
                <h1>Sign Up</h1>
                <div className="form">
                    <input type="text" placeholder="user" onChange={e => dispatch(setUser(e.target.value))}/>
                    <input type="mail" placeholder="mail" onChange={e => dispatch(setEmail(e.target.value))}/>
                    <input type="password" placeholder="password" onChange={e => dispatch(setPassword(e.target.value))}/>
                    <button onClick={_ => dispatch(setPM())}>DONE</button>
                </div>
            </div>
        }
    </div>;
}

export default Register;