// import { Link } from "react-router-dom"
import style from "./CardTravel.module.css";

export default function CardUser({
    city = "",
    departure_date = "",
    return_date = "",
    companion_name = "",
    companion_surname = "",
    img = "https://picsum.photos/600/400",
}) {

    return (
        <div className="d-flex">
            <img src={img} alt={city} className={`${style.dimImg}`}/>
            <h2>{city}</h2>
            <p>{departure_date} - {return_date}</p>
            <p>{companion_name}{companion_surname}</p>
        </div>
    )
}