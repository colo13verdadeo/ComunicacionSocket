import "./Welcome.css";

function Welcome({setCompo, modCompo}) {
    const plaveholdButton = (modCompo==="Login")? "SIGN IN": "SIGN UP";
    const welcomeClassName = (modCompo==="Login")? "Welcome wRegister": "Welcome wLogin";

    return <div className={welcomeClassName}>
        <h1 className="TitleWelcome">WELCOME!</h1>
        <p className="TextWelcome">You have an account?</p>
        <button className="ButtonSignUP" onClick={() => setCompo(modCompo)}>{plaveholdButton}</button>
    </div>;
}

export default Welcome;