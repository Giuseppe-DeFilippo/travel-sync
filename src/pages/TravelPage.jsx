import travels from "../data/travels";
import CardUser from "../components/CardTravel";

export default function UserPage() {
    const travel = [...travels];

    return (
        <main className="container mb-5 mt-2">
            <div className="row gy-4">
                {travel.length > 0
                    ? travel.map((u) => (
                        <div className="col-12 col-md-6 col-lg-4" key={u.id}>
                            <CardUser
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
        </main>
    )
}