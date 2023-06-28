import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import "../sass/LogIn.scss";

const LogIn = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const loginHandler = async (e) => {
        e.preventDefault()
        console.log(user)

        await axios.post("http://localhost:3000/api/login", user)
            .then((res) => {
                console.log(res)
                navigate("/homeview")
            }).catch((err) => {
                console.error(err)
            })
    }

    return (
        <section>
            <h1>Welcome Back!</h1>
            <form onSubmit={loginHandler}>
                <input type="email" id="email" placeholder="EMAIL" value={user.email} onChange={(e) => { setUser({ ...user, email: e.target.value }) }}></input>
                <input type="password" id="password" placeholder="PASSWORD" value={user.password} onChange={(e) => { setUser({ ...user, password: e.target.value }) }}></input>

                <button>LOGIN</button>
            </form>
            <Link to={"/signup"} className="Link">DON`T HAVE AN ACCOUNT YET? <span> SIGN UP</span></Link>

        </section>
    );
}

export default LogIn;