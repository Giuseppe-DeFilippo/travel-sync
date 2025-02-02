import CardComponent from "../components/CardComponent";
export default function HomePage() {
    const dataCards = [
        { img: "/imgHome/fotoviaggio.png", description: "Viaggi" },
        { img: "/imgHome/immagine2.jpeg", description: "Users" },
        { img: "/imgHome/contattaci.jpeg", description: "Contatti" },
        { img: "/imgHome/immagine-vuota.png", description: "Extra" },
        { img: "/imgHome/immagine-vuota.png", description: "Extra" }
    ];
    return (


        <div className="row">
            {dataCards.map((dataCards, index) => {
                return (
                    <CardComponent key={index} dataCards={dataCards} />
                )
            })}

        </div>


    )
}

