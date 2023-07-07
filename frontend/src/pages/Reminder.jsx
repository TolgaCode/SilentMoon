import axios from "axios"

import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { TimePicker } from "react-ios-time-picker"

import { UserContext } from "../contexts/UserContext";

import moIcon from "../assets/img/mo_btn.svg";
import moActIcon from "../assets/img/mo_active_btn.svg";
import tuIcon from "../assets/img/tu_btn.svg";
import tuActIcon from "../assets/img/tu_active_btn.svg";
import weIcon from "../assets/img/we_btn.svg";
import weActIcon from "../assets/img/we_active_btn.svg";
import thIcon from "../assets/img/th_btn.svg";
import thActIcon from "../assets/img/th_active_btn.svg";
import frIcon from "../assets/img/fr_btn.svg";
import frActIcon from "../assets/img/fr_active_btn.svg";
import saIcon from "../assets/img/sa_btn.svg";
import saActIcon from "../assets/img/sa_active_btn.svg";
import suIcon from "../assets/img/su_btn.svg";
import suActIcon from "../assets/img/su_active_btn.svg";

import "../sass/Reminder.scss"

const Reminder = () => {

    const { user, setUser } = useContext(UserContext);

    console.log(user);

    const navigate = useNavigate();

    const [time, setTime] = useState(user.reminder !== undefined ? user.reminder.time : "10:00");
    const [days, setDays] = useState(user.reminder !== undefined ? user.reminder.days : []);

    const handleSubmit = async () => {
        await axios.put(import.meta.env.VITE_BE_URL + `/api/reminder`, { time, days }, { withCredentials: true })
            .then(navigate("/home"))
    }

    const onChange = (timeValue) => {
        setTime(timeValue);
    }

    const handleDays = (input) => {
        if (days.includes(input)) {
            let filteredDays = days.filter((item) => {
                return (
                    item !== input
                )
            })
            setDays(filteredDays)
        }
        else {
            setDays([...days, input])
        }
    }

    return (
        <>
            <h1 className="logoDark">SILENT MOON</h1>
            <article className="reminder">
                <h3 className="hdl-big-green-center">What time would like to meditate?</h3>
                <p className="question">Choose the time you like to be reminded: </p>

                <div className="timePicker">
                    <TimePicker onChange={onChange} value={time} />
                </div>

                <p className="question">Choose the day you like to be reminded: </p>
                <div className="weekdays">
                    <img src={days.includes("mo") ? moActIcon : moIcon} alt="" onClick={() => { handleDays("mo") }} />
                    <img src={days.includes("tu") ? tuActIcon : tuIcon} alt="" onClick={() => { handleDays("tu") }} />
                    <img src={days.includes("we") ? weActIcon : weIcon} alt="" onClick={() => { handleDays("we") }} />
                    <img src={days.includes("th") ? thActIcon : thIcon} alt="" onClick={() => { handleDays("th") }} />
                    <img src={days.includes("fr") ? frActIcon : frIcon} alt="" onClick={() => { handleDays("fr") }} />
                    <img src={days.includes("sa") ? saActIcon : saIcon} alt="" onClick={() => { handleDays("sa") }} />
                    <img src={days.includes("su") ? suActIcon : suIcon} alt="" onClick={() => { handleDays("su") }} />
                </div>
                <div className="reminder_btn">
                    <button onClick={() => { handleSubmit() }} type="submit" className="bigBtn-red">Save</button>
                    <Link to={"/home"}><button className="input">Maybe later</button></Link>
                </div>
            </article >
        </>
    );
}

export default Reminder;