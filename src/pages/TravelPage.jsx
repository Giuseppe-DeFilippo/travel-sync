import travels from "../data/travels";
import CardTravel from "../components/CardTravel";

export default function TravelPage() {
    const travel = [...travels];

    return (
        <main >
            <div className="container-fluid">
                <div className="row gy-4">
                    {travel.length > 0
                        ? travel.map((u) => (
                            <div className="col-12 col-md-6 col-lg-4" key={u.id}>
                                <CardTravel
                                    img={u.img}
                                    city={u.city}
                                    departure_date={u.departure_date}
                                    return_date={u.return_date}
                                    companion_name={u.companion_name}
                                    companion_surname={u.companion_surname}
                                />
                            </div>
                        ))
                        : "Non ci sono viaggi"}
                </div>
            </div>

        </main>
    )
}