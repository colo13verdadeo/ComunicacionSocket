import { useState } from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";

function MenuReg({AccCompo}) {
    const [compo, setCompo] = useState(AccCompo); 

    return <div>
        {
            (compo === "login")? <Login setCompo={(e) => setCompo(e)}/> : <Register setCompo={(e) => setCompo(e)}/>
        }
    </div>;
}

export default MenuReg;