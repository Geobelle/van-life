import { useParams, useLocation, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { getVan } from "../../api"

export default function VanDetail() {
    const param= useParams()
    const location = useLocation()
    const [vansDetails, setVansDetails] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
      useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVan(param.id)
                setVansDetails(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    },[param.id])

      if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    const type = location.state?.type || "all"
    return (
        
        <div className="van-detail-container">
           <Link
                to={".."+ location.state.search? ".."+`/?${location.state.search}`: null }
                relative="path"
                className="back-button"
                >&larr; <span>Back to {type} vans</span>
            </Link>
            {vansDetails ? (
                <>
                    <div className="van-detail">
                        <img src={vansDetails.imageUrl} />
                        <i className={`van-type ${vansDetails.type} selected`}>{vansDetails.type}</i>
                        <h2>{vansDetails.name}</h2>
                        <p className="van-price"><span>${vansDetails.price}</span>/day</p>
                        <p>{vansDetails.description}</p>
                        <button className="link-button">Rent this van</button>
                    </div>
                </>
                 
            ) : <h2>Loading...</h2>}
        </div>
    )
}

