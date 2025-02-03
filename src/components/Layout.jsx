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
            <header>
                <div className="d-flex justify-content-between align-items-center w-100 px-3">
                    <div className="d-flex align-items-center w-70">
                        <img src="./logo.png" alt="" />
                    </div>
                    <div class name="d-flex align-items-center w-30">
                        <Link to={"/"} className="fa-solid fa-house px-2 text-dark"></Link>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>  
                </div>
            </header>
            <Outlet />
            <FooterComponent />
        </>
    );
};


export { Layout, Layout2 };