import { useParams, Link, Outlet, NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { getVan } from "../../api"

export default function HostVanDetail(){

    const {id}= useParams()
    const [hostVansDetails, setHostVansDetails] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
      useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVan(id)
                setHostVansDetails(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadVans()
      }, [id])

      if (!hostVansDetails) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    const activeStyle={
        fontWeight: "bold",
        textDecoration: "underline",
    }
    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={hostVansDetails.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${hostVansDetails.type}`}
                        >
                            {hostVansDetails.type}
                        </i>
                        <h3>{hostVansDetails.name}</h3>
                        <h4>${hostVansDetails.price}/day</h4>
                    </div>
                </div>
                <nav className="host-van-detail-nav">
                    <NavLink 
                        style={({isActive})=>isActive? activeStyle: null} 
                        end
                        to="."
                    >
                        Details
                    </NavLink>
                    <NavLink 
                        style={({isActive})=>isActive? activeStyle: null} 
                        to="pricing"
                    >
                        Pricing
                    </NavLink>
                    <NavLink 
                        style={({isActive})=>isActive? activeStyle: null} 
                        to="photos"
                    >
                        Photos
                    </NavLink>
                </nav>
                <Outlet context={[hostVansDetails]}/>
            </div>
        </section>
    )
}