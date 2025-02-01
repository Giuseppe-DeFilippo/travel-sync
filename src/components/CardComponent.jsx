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
        <div className=" pt-2 col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <Link to={getRoute(dataCards.description)} className="card rounded-4">
                <img id="imageButton" src={dataCards.img} className="h-100 object-fit-cover rounded-4" alt={dataCards.description} />
                <div className="card-body d-none">
                    <p className="card-text ">{dataCards.description}</p>
                </div>
            </Link >
        </div >
    )


}