import React from "react";
import { useNavigate } from "react-router-dom";
function Login(){
    const navigate = useNavigate();

    const handleSubmit = e =>{
        e.preventDefault();
        navigate("/home");
    }

    return (
        <div>
            Login

            <div>
                <form>
                    <label for = "email"> Email </label>
                    <input type = "email" id = "email" placeholder="email"/>
                    <br/>
                    <label for = "pass"> Password</label>
                    <input type = "pass" id = "pass" placeholder="password"/>
                    <br/>
                    <button onClick={handleSubmit}>Submit</button> 

                </form>
            </div>
        </div>
    );
}

export default Login;