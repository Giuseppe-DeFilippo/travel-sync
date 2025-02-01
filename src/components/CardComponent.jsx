import { Link } from "react-router-dom"
export default function CardComponent({ dataCards }) {

    const getRoute = (description) => {
        switch (description) {
            case "Viaggi": return "/viaggi";
            case "Utenti": return "/listaUtenti";
            case "Contatti": return "/contactUs"

        }
    }

    return (
        <Link to={getRoute(dataCards.description)}>
            <div div className="card h-100  " style={{ width: "12rem" }}>
                <img src={dataCards.img} className="card-img-top" style={{ width: "100%", height: "12rem", objectFit: "cover", borderRadius: "0.75rem 0.75rem 0 0" }} alt={dataCards.description} />
                <div className="card-body d-none">
                    <p className="card-text ">{dataCards.description}</p>
                </div>
            </div >
        </Link>
    )


}