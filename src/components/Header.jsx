import { NavLink,  Link } from "react-router-dom"
import userIcon from "/images/user.png"
export default function Header(){
    const activeStyle={
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return(
        <header>
            <Link className="site-logo" to="/">#VANLIFE</Link>
            <nav>
                <NavLink style={({isActive})=>isActive? activeStyle: null} to="host">Host</NavLink>
                <NavLink style={({isActive})=>isActive? activeStyle: null} to="about">About</NavLink>
                <NavLink style={({isActive})=>isActive? activeStyle: null} to="van">Van</NavLink>
                <Link to="login" className="login-link"> 
                    <img src={userIcon} className="login-icon"/>
                </Link>
            </nav>
        </header>
    )
}
