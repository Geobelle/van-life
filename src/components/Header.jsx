import { NavLink,  Link } from "react-router-dom"

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
                <NavLink style={({isActive})=>isActive? activeStyle: null} to="/host">Host</NavLink>
                <NavLink style={({isActive})=>isActive? activeStyle: null} to="/about">About</NavLink>
                <NavLink style={({isActive})=>isActive? activeStyle: null} to="/van">Van</NavLink>
            </nav>
        </header>
    )
}
