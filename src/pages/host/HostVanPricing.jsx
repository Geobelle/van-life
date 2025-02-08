import { useOutletContext } from "react-router-dom"

export default function HostVanPricing(){
    const [hostVansDetails] = useOutletContext();

     
    return(
        <h3 className="host-van-price">${hostVansDetails.price}<span>/day</span></h3>
    )
}