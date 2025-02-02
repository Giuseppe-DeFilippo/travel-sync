import { FooterComponent } from "./FooterComponent";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header />
            <main className="container-fluid">
                <Outlet />
            </main>
            <FooterComponent />

        </>
    );
};

const Layout2 = () => {
    return (
        <>
            <div className="headerCustom d-flex flex-column">
                <header>
                    <img src="./logo.png" alt="" />
                    <Link to={"/"} className="fa-solid fa-house px-2 text-dark"></Link>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </header>
            </div>
            <Outlet />
            <FooterComponent />

        </>
    );
};


export { Layout, Layout2 };