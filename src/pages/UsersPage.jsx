import users from "../data/users"
export const UsersPage = () => {

    const user = [...users]

    return (
        <main>
            {user.length > 0 ? user.map((user) => {
                return (

                    <div className="w-100 d-flex pt-2" key={user.id}>
                        <div className="containerImg">
                            <img id="imgUser" src={user.img} alt="placeholder" />
                        </div>
                        <div className="contentUsers bg-white w-100 d-flex justify-content-between px-2 align-items-center">
                            <h5>{`${user.name} ${user.surname}`}</h5>
                            <div className="d-flex">
                                <span className="btn rounded-5 text-bg-secondary">Show Details</span>
                            </div>
                        </div>
                    </div >

                )

            }) : <main className="d-flex align-items-center justify-content-center"><div className="noUser text-white">No users available</div></main>
            }
        </main>

    )

}