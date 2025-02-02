import users from "../data/users"

export const UsersPage = () => {



    return (

        users.map((user) => {
            return (

                <div className="w-100 d-flex pt-2" key={user.id}>
                    <div className="containerImg">
                        <img src="https://placehold.co/50x50" alt="placeholder" />
                    </div>
                    <div className="contentUsers bg-white w-100 d-flex justify-content-between px-2 align-items-center">
                        <h5>{`${user.name} ${user.surname}`}</h5>
                        <div className="d-flex">
                            <span className="btn rounded-0 text-bg-secondary">Show Details</span>
                        </div>
                    </div>
                </div >

            )
        })

    )

}