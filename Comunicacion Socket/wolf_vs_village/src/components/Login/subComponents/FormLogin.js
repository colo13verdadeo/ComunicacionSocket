function FormLogin({user, passw, pm, errData}) {
    return <div className="LogIn">
        <h1>Sign In</h1>
        <div className="form">
            <input  className={errData("user")} type="text" placeholder="user" 
                    onChange={e => user(e.target.value)}/>

            <input  className={errData("password")} type="password" placeholder="password" 
                    onChange={e => passw(e.target.value)}/>

            <button onClick={() => pm()}>DONE</button>
        </div>
    </div>;
}

export default FormLogin;