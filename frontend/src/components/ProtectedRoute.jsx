import { useState, useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import axios from 'axios'

const ProtectedRoute = () => {

    const location = useLocation()
    const [isAuth, setIsAuth] = useState(null)

    const checkAuth = async () => {
        axios.get(import.meta.env.VITE_BE_URL + "/api/verified", { withCredentials: true })
            .then((res) => {
                setIsAuth(true)
            })
            .catch((err) => {
                console.error(err)
                setIsAuth(false)
            })
    }

    useEffect(() => {
        checkAuth()
    }, [location.pathname])

    if (isAuth === null) {
        console.log('null')
    } else if (!isAuth) {
        return (
            <Navigate to="/" replace={true} />
        )
    } else if (isAuth) {
        return (
            <Outlet />
        )
    }
}

export default ProtectedRoute;