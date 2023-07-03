import { Routes, Route, Link, Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ user, redirectPath = '/', children }) => {
    // console.log(user)
    if (Object.keys(user).length === 0) {
        return <Navigate to={redirectPath} replace />;
    }
    return children ? children : <Outlet />;
}

export default ProtectedRoute;