import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos(){
    const [hostVansDetails] = useOutletContext();
    return(
        <img src={hostVansDetails.imageUrl} className="host-van-detail-image" />
    )
}