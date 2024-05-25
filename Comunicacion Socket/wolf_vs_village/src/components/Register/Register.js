import { postStatus, resetStateRegister, setEmail, setPM, setPassword, setUser } from "../../store/features/register/registerSlice";
import { useDispatch, useSelector } from "react-redux";
import { RegisterService } from "../../config/register";
import Welcome from "../Welcome/Welcome";
import { useEffect } from "react";
import "./Register.css";
import FormRegister from "./subComponents/FormRegister";

function Register({setCompo}) {
    const {user, email, password, problem_manager} = useSelector(state => state.register);
    const dispatch = useDispatch();
    const errData = (e) => (e === problem_manager.type_error)? "DataError" : "";
    useEffect(() => {
        if(problem_manager.status === "CONNECTION")
            RegisterService({user: user, password: password, email: email}, (e) => dispatch(postStatus(e)));
    }); 
    //TODO: debería tener [problem_manager] pero en la terminal aparece un warning que pide 
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
            <FormRegister   user={e => dispatch(setUser(e))} 
                            passw={e => dispatch(setPassword(e))}
                            email={e => dispatch(setEmail(e))}
                            pm={() => dispatch(setPM())}
                            errData={(e) => errData(e)}/>
        }
    </div>;
}

export default Register;