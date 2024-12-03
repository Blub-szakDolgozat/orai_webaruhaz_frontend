import { Nav } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import '../App.css';

const Layout = () => {
    return (
        <>
            <header className="App-header">
                <h1>Termékek: </h1>
            </header>
            <Nav className="navbar-light bg-warning">
                <Nav.Item>
                    <Nav.Link href="/" className="nav-link-black">Diszhalak</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/admin" className="nav-link-black">Admin</Nav.Link>
                </Nav.Item>
            </Nav>
            <article>
                {/* Ide kerül majd az útvonalak/linkek által meghatározott tartalom */}
                <Outlet />
            </article>
            <footer>
                <p>@ Horváth Nauzika, Dobszay Dorka, Albert Orsolya</p>
            </footer>
        </>
    );
};

export default Layout;
