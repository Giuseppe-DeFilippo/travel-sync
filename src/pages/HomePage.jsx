import CardComponent from "../components/CardComponent";
export default function HomePage() {
    const dataCards = [
        { img: "/imgHome/fotoviaggio.png", description: "Viaggi" },
        { img: "/imgHome/immagine2.jpeg", description: "Utenti" },
        { img: "/imgHome/contattaci.jpeg", description: "Contatti" },
        { img: "/imgHome/immagine-vuota.png", description: "Extra" },
        { img: "/imgHome/immagine-vuota.png", description: "Extra" }
    ];
    return (
        <div className="container-fluid h-100 p-0">
            <div className="row g-2 justify-content-center ">
                {dataCards.map((dataCards, index) => {
                    return (<div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2">
                        <CardComponent dataCards={dataCards} />
                    </div>
                    )
                })}

            </div>

        </div>
    )
}

