function FormRegister({user, passw, email, pm, errData}) {
    return <div className="Register">
    <h1>Sign Up</h1>
        <div className="form">
            <input  className={errData("user")} type="text" placeholder="user" 
                    onChange={e => user(e.target.value)}/>
                    
            <input  className={errData("email")} type="mail" placeholder="mail" 
                    onChange={e => email(e.target.value)}/>
                    
            <input  className={errData("password")} type="password" placeholder="password" 
                    onChange={e => passw(e.target.value)}/>
                    
            <button onClick={_ => pm()}>DONE</button>
        </div>
    </div>
}

export default FormRegister;