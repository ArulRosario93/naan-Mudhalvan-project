import React, { useState } from "react";
import "./Login.css";

const Login = () => {

    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");

    const handleChange = () => {
        if (mail == null || mail == "" || pass == null) {
            alert("Fill Out Credentials")
        }else if(pass.length < 6){
            alert("Password should have minimum 6 keys");
        }else{
            alert("Validation Success!");
        }
    }

    return(
        <div className="login">
            <div className="loginForm">
                <div className="contain">
                    <p>Email</p>
                    <input onChange={(e) => setMail(e.target.value)} type="email" required/>
                </div>
                <br />
                <div className="contain">
                    <p>Password</p>
                    <input onChange={(e) => setPass(e.target.value)} type="password" required/>
                </div>
                <br />
                <br />
                <div className="loginSubmit" onClick={() => handleChange()}>
                    Submit
                </div>
            </div>
        </div>
    )
}

export default Login;