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
            <div className="card rounded-4 ">
                <img id="imageButton" src={dataCards.img} className="h-100 object-fit-cover rounded-4" alt={dataCards.description} />
                <div className="card-body d-none">
                    <p className="card-text ">{dataCards.description}</p>
                </div>
            </div >
        </Link>
    )


}