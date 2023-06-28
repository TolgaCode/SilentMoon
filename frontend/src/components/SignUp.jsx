import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import "../sass/SignUp.scss"

const SignUp = () => {
    const [data, setData] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);

        await axios.post("http://localhost:3000/api/signup", data)
            .then((res) => {
                console.log(res);
                navigate("/home")
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <section>
            <h1>Create your Account</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" id="name" placeholder="NAME" value={data.name} onChange={(e) => { setData({ ...data, name: e.target.value }) }} />
                <input type="text" id="surname" placeholder="SURNAME" value={data.surname} onChange={(e) => { setData({ ...data, surname: e.target.value }) }} />
                <input type="email" id="email" placeholder="EMAIL" value={data.email} onChange={(e) => { setData({ ...data, email: e.target.value }) }} />
                <input type="password" id="password" placeholder="PASSWORD" value={data.password} onChange={(e) => { setData({ ...data, password: e.target.value }) }} />

                <button>REGISTER</button>
            </form>
            <Link to={"/login"} className="Link">You are already a User. <span> Click here</span></Link>
        </section>
    );
}
export default SignUp;