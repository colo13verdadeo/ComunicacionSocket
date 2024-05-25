import "./Welcome.css";

function Welcome({setCompo, modCompo}) {
    const plaveholdButton = (modCompo==="Login")? "SIGN IN": "SIGN UP";
    const welcomeClassName = (modCompo==="Login")? "Welcome wRegister": "Welcome wLogin";
    const textWecome = (modCompo==="Login")? "You have an account?": "You do not have an account?";

    return <div className={welcomeClassName}>
        <h1 className="TitleWelcome">WELCOME!</h1>
        <p className="TextWelcome">{textWecome}</p>
        <button className="ButtonSignUP" onClick={() => setCompo(modCompo)}>{plaveholdButton}</button>
    </div>;
}

export default Welcome;