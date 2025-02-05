import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

export default function VanDetail() {
    const param= useParams()
    const [vansDetails, setVansDetails] = useState(null)
    
      useEffect(() => {
          fetch(`/api/vans/${param.id}`)
              .then(res => res.json())
              .then(data => setVansDetails(data.vans))
      }, [param.id])
      

    return (
        <div className="van-detail-container">
            {vansDetails ? (
                <div className="van-detail">
                    <img src={vansDetails.imageUrl} />
                    <i className={`van-type ${vansDetails.type} selected`}>{vansDetails.type}</i>
                    <h2>{vansDetails.name}</h2>
                    <p className="van-price"><span>${vansDetails.price}</span>/day</p>
                    <p>{vansDetails.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}

