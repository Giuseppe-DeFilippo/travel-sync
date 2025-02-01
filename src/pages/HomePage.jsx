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
        <div className="container-fluid">
            <div className="row h-100">
                {dataCards.map((dataCards, index) => {
                    return (
                        <div key={index} className="h-100 pt-2 col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 ">
                            <CardComponent dataCards={dataCards} />
                        </div>
                    )
                })}

            </div>

        </div>
    )
}

