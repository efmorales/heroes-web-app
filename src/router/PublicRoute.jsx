import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth"

export const PublicRoute = ({ children }) => {

    const { logged } = useContext(AuthContext)

    // if the user is logged in, then it shouldn't be able to access to /login page

    return (!logged)
        ? children
        : <Navigate to="/" />
}
