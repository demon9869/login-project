import React from "react";

//import { Link, useLocation, Outlet } from "react-router-dom";

export function Register() {
    return (

        <form className="row g-3 was-validated">

            <div>
                <h1>Create your account</h1>
            </div>
            <div className="col-md-5">
                <label htmlFor="fname" className="form-label">First Name</label>
                <input type="text" className="form-control" id="fname" required></input>
            </div>
            <div className="col-md-5">
                <label htmlFor="lname" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lname" required></input>
            </div>
            <div className="col-md-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input type="number" className="form-control" id="age" required></input>
            </div>
            <div className="col-md-5">
                <label htmlFor="gender" className="form-label">Gender</label>
                <select className="form-select" id="gender" required>
                    <option selected disabled value="">Choose..</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                </select>
            </div>
            <div className="col-10">
                <label htmlFor="username" className="form-label">Username</label>
                <div class="input-group has-validation">
                    <span class="input-group-text" id="inputGroupPrepend">@</span>
                    <input type="email" className="form-control" id="username" required></input>
                </div>
            </div>
            <div className="col-md-10">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" required></input>
            </div>
            <div className="col-10">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" required></input>
            </div>
            <div className="col-5">
                <button className="btn btn-primary text-black" type="submit">Sign In</button>
            </div>
            <ul className="nav justify-content-center col-5">
                <li>
                    <a className="nav-link active text-black" href="/">Go back</a>
                </li>
            </ul>
        </form>


    );
}

export default Register;