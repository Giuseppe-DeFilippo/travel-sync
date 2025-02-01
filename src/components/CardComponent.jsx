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
            <div className="card col-sm-6 col-md-6 p-0 cover rounded-4 " style={{ width: "12rem" }}>
                <img src={dataCards.img} className="rounded-4" style={{ width: "12rem", height: "12rem" }} alt={dataCards.description} />
                <div className="card-body d-none">
                    <p className="card-text ">{dataCards.description}</p>
                </div>
            </div >
        </Link>
    )


}