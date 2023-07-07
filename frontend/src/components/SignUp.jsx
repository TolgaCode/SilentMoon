import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import BackButton from "./BackButton.jsx";
import "../sass/SignUp.scss"

const defaultErrorState = Object.freeze({
    general: "",
    name: "",
    surname: "",
    email: "",
    password: "",
});

const defaultData = Object.freeze({
    name: "",
    surname: "",
    email: "",
    password: "",
})

export default function SignUp() {
    const navigate = useNavigate();
    const [data, setData] = useState(defaultData);
    const [error, setError] = useState(defaultErrorState)


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);

        setError(defaultErrorState);
        try {
            await axios.post(import.meta.env.VITE_BE_URL + "/api/signup", data, { withCredentials: true });
            setData(defaultData);
            navigate("/welcome");
        } catch (error) {
            console.log(error);
            let responseError = error?.response?.data?.error;
            if (responseError?.errors) {
                //  Object.entries(responseError.errors)
                // [["email": {message: "",...}], ["password",{message: "",..}]]
                const propertyMessageMap = Object.entries(responseError.errors).reduce(
                    (acc, [key, value]) => {
                        acc[key] = value.message;
                        return acc;
                    },
                    {}
                );
                console.log(propertyMessageMap);
                setError(propertyMessageMap);
            } else {
                setError((prevError) => ({
                    ...prevError,
                    general: error?.response?.data?.error?.message || "",
                }));
            }
        }
    }


    return (
        <section className="signUp-container">
            <div className="backBtn_sign_container">
                <BackButton />
            </div>
            <h1 className="hdl-big-green-center" >Create your Account</h1>
            <form onSubmit={handleSubmit} className="signup-form">
                <input className="input" type="text" id="name" placeholder="NAME" value={data.name} onChange={(e) => { setData({ ...data, name: e.currentTarget.value }) }} />
                <small className="errorMessage">
                    {error.name && error.name}
                </small>
                <input className="input" type="text" id="surname" placeholder="SURNAME" value={data.surname} onChange={(e) => { setData({ ...data, surname: e.currentTarget.value }) }} />
                <small className="errorMessage">
                    {error.surname && error.name}
                </small>
                <input className="input" type="email" id="email" placeholder="EMAIL" value={data.email} onChange={(e) => { setData({ ...data, email: e.currentTarget.value }) }} />
                <small className="errorMessage">
                    {error.email && error.email}
                </small>
                <input className="input" type="password" id="password" placeholder="PASSWORD" value={data.password} onChange={(e) => { setData({ ...data, password: e.currentTarget.value }) }} />
                <small className="errorMessage">
                    {error.password && error.password}
                </small>

                <button className="bigBtn-red">REGISTER</button>
            </form>
            <Link to={"/login"} className="Link">YOU ARE ALREADY A USER. &nbsp; <span> CLICK HERE</span></Link>
        </section>
    );
}