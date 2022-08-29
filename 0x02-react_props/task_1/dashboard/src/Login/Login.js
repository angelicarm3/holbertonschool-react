import React from 'react';
import './Login.css';


const Login = () => {
    return (
        <div className="App-logIn">
            <p>Login to access the full dashboard</p>
            <label>
                Email: <input type="text" name="Email" />
            </label>
            <label>
                Password: <input type="password" name="Password" />
            </label>
            <button>OK</button>
        </div>
    );
}

export default Login;