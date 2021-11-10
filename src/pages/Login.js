import React from "react";
//import { Link, useLocation, Outlet } from "react-router-dom";
import {useNavigate} from "react-router-dom";

export function Login() {
    let navigate = useNavigate();

    return (
        <div>
            <form className="was-validated">
                <div class="shadow p-3 mb-5 bg-body rounded">
                    <div className="text-center">
                        <h1>Log In To Continue</h1>
                    </div>
                    <div className="form-floating mb-3 mt-3">
                        <input type="email" className="form-control" id="Email1" placeholder="Email Address" required />
                        <label htmlFor="Email1">Email</label>
                        <div className="valid-feedback">Valid</div>
                        <div className="invalid-feedback">In-Valid</div>
                    </div>
                    <div className="form-floating mb-3 mt-3">
                        <input type="password" className="form-control" id="Password1" placeholder="Password" required />
                        <label htmlFor="Password1">Password</label>
                        <div className="valid-feedback">Valid</div>
                        <div className="invalid-feedback">In-Valid</div>
                    </div>
                    <button onClick={() => {navigate('/Home')}}  type="submit" className="btn btn-primary text-black">Log In</button>
                    <ul className="nav justify-content-center">
                        <li>
                            <a className="nav-link active text-black" href="register">Create Account</a>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    );
}

export default Login;