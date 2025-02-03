import { Link } from "react-router-dom"

export default function CardComponent({ dataCards }) {

    const getRoute = (description) => {
        switch (description) {
            case "Viaggi": return "/viaggi";
            case "Users": return "/users";
            case "Contatti": return "/contactUs"
        }
    }


    return (
        <div className=" pt-2 col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <Link to={getRoute(dataCards.description)} className="card rounded-4 position-relative">
                <img id="imageButton" src={dataCards.img} className="h-100 object-fit-cover rounded-4" alt={dataCards.description} />
                <div className="d-none card-body w-100 h-100 rounded-4 overlay">
                    <p className="h-100 card-text text-white d-flex align-items-center justify-content-center fs-3 ">{dataCards.description}</p>
                </div>
            </Link >
        </div >
    )


}