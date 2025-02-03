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
        <div>
            <div className={`${style.imgCard}`}>
                <img src={`${img}`} className={`${style.myimg}`} alt={`${city}`} />
                <div className={`${style.mybody}`}>
                    <h5 className="m-0">{city}</h5>
                    <div className="d-inline-block">
                        <p className={`${style.date}`}>{departure_date}</p>
                        <p className={`${style.date}`}>{return_date}</p>
                    </div>
                    <p className={`${style.companion}`}><small>{companion_name} {companion_surname}</small></p>
                </div>
            </div>
        </div>
    )
}