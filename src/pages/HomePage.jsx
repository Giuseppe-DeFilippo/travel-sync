import { Link } from "react-router-dom"
export default function HomePage() {

    return (

        <div className="homepage-container " >
            <Link to="/viaggi">
                <div className="card" style={{ width: "12rem" }}>
                    <img src="/imgHome/fotoviaggio.png" className="card-img-top" style={{ width: "12rem", height: "12rem" }} alt="immagineViaggio" />
                    <div className="card-body d-none">
                        <p className="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div> </Link>

            <Link to="listaUtenti">
                <div className="card" style={{ width: "12rem", }}>
                    <img src="/imgHome/immagine2.jpeg" className="card-img-top" style={{ width: "12rem", height: "12rem" }} alt="" />
                    <div className="card-body d-none">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div> </Link>
            <Link to="contactUS">
                <div className="card" style={{ width: "12rem" }}>
                    <img src="/imgHome/contattaci.jpeg" className="card-img-top" style={{ width: "12rem", height: "12rem" }} alt="" />
                    <div className="card-body d-none">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div></Link>
            <div className="card" style={{ width: "12rem" }}>
                <img src="/imgHome/immagine-vuota.png" className="card-img-top" style={{ width: "12rem", height: "12rem" }} alt="" />
                <div className="card-body d-none">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    )
}

