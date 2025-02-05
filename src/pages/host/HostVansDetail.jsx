import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
export default function HostVanDetail(){

    const {id}= useParams()
    const [hostVansDetails, setHostVansDetails] = useState(null)
    
      useEffect(() => {
          fetch(`/api/host/vans/${id}`)
              .then(res => res.json())
              .then(data => setHostVansDetails(data.vans[0]))
      }, [])
      if (!hostVansDetails) {
        return <h1>Loading...</h1>
    }

    return (
        <section>
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
            </div>
        </section>
    )
}