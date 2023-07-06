import { useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

import BackButton from "./BackButton.jsx";
import "../sass/LogIn.scss";

export default function LogIn() {
    const { state: navState } = useLocation();
    const nav = useNavigate();
    const [error, setError] = useState(navState?.redirectReason || "");
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const loginHandler = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await axios.post(import.meta.env.VITE_BE_URL + "/api/login", user, { withCredentials: true })
                .then((res) => {
                    setUser(res.data);
                    nav("/home")
                })

        } catch (error) {
            const responseError = error?.response?.data?.error?.message;
            if (responseError) {
                setError(responseError);
            } else {
                setError("Something went wrong, please try again later");
            }
        }
    };

    return (
        <section className="login-container">
            <div className="backBtn_container">
                <BackButton />
            </div>
            <h1 className="hdl-big-green-center">Welcome Back!</h1>
            <form className="login-form" onSubmit={loginHandler}>
                <input className="input" type="email" id="email" placeholder="EMAIL" value={user.email} onChange={(e) => { setUser({ ...user, email: e.currentTarget.value }) }}></input>
                <input className="input" type="password" id="password" placeholder="PASSWORD" value={user.password} onChange={(e) => { setUser({ ...user, password: e.currentTarget.value }) }}></input>

                <button className="bigBtn-red">LOGIN</button>
            </form>
            <Link to={"/signup"} className="Link">DON`T HAVE AN ACCOUNT YET? &nbsp; <span> SIGN UP</span></Link>

        </section >
    );
}