import { useOutletContext } from "react-router-dom"

export default function HostVanInfo(){
    const [hostVansDetails] = useOutletContext();
    return (
       
        <section className="host-van-detail-info">
            <h4>Name: <span>{hostVansDetails.name}</span></h4>
            <h4>Category: <span>{hostVansDetails.type}</span></h4>
            <h4>Description: <span>{hostVansDetails.description}</span></h4>
            <h4>Visibility: <span>Public</span></h4>
        </section>

        
    )
}