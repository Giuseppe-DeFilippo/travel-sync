import "../components/AboutUsPage.css"
export default function () {

    const personaleWeb = [
        { name: "Francesco", surname: "Cialfi", ruolo: "creare pagine e design", image: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png" },
        { name: "Giuseppe", surname: " De Filippo", ruolo: "creazione home page", image: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png" },
        { name: "Andrea", surname: "Giancristiano", ruolo: "creazione header", image: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png" },
        { name: "Fabio", surname: "Doria", ruolo: "creazione dati e pagine", image: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png" }
    ]
    return (
        <main>
            <div className="d-flex justify-content-center row   " >
                {personaleWeb.map((persona, index) => (
                    <div key={index} className="card mt-4 card-customizzata " style={{ width: "18rem" }}>
                        <img src={persona.image} className="card-img-top bg-secondary" alt="" />
                        <div className="card-body bg-light">
                            <h5 className="card-title">{persona.name} {persona.surname} </h5>
                            <p className="card-text">ruolo: {persona.ruolo}</p>
                        </div>
                    </div>
                ))}
            </div >
        </main>
    )
}