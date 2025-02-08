import { Navigate, Outlet, useLocation } from "react-router-dom"

export default function Auth(){
    const isLoggedIn = localStorage.getItem("loggedin")
    let location = useLocation()
    if (!isLoggedIn){
        return <Navigate to="login" state={{message: "You must log in first", from: location}} replace/>
    }
    return(
        <Outlet/>
    )
}