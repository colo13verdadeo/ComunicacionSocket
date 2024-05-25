import { useEffect, useState } from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
import "./MenuReg.css";
import { useDispatch } from "react-redux";
import { resetStateLogin } from "../../store/features/login/loginSlice";
import { resetStateRegister } from "../../store/features/register/registerSlice";

function MenuReg({AccCompo}) {
    const [compo, setCompo] = useState(AccCompo); 
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (compo === "Login") dispatch(resetStateRegister());
        else if (compo === "Register") dispatch(resetStateLogin());
    }, [compo]);

    return <div>
        {
            (compo === "Login")? 
                <Login setCompo={(e) => setCompo(e)}/> 
            : 
                <Register setCompo={(e) => setCompo(e)}/>
        }
    </div>;
}

export default MenuReg;