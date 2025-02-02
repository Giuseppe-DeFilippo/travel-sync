export const FooterComponent = () => {


    const icons = [
        { name: "fa-brands fa-youtube" },
        { name: "fa-brands fa-facebook" },
        { name: "fa-brands fa-discord" },
        { name: "fa-brands fa-google" },
        { name: "fa-brands fa-instagram" },
    ]

    return (

        <footer>
            <div className="container">
                <div className="w-100 d-flex flex-column align-items-center">
                    <ul className="m-0 p-0 pt-2 d-flex gap-3">
                        <li>Privacy Police</li>
                        <li>Contacts</li>
                        <li>Terms Of Service</li>
                    </ul>
                    <ul className="d-flex gap-3 p-0 m-0 pt-2">
                        {icons.map((icon, index) => { return <i key={index} className={`${icon.name} text-white`}></i> })}
                    </ul>
                </div>
            </div>
        </footer>

    )

}