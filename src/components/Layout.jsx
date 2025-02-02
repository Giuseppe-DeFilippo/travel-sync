import { FooterComponent } from "./FooterComponent";
import Header from "./Header";
import { Outlet } from "react-router-dom";

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

export default Layout;