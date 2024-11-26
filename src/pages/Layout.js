import { Nav } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
         <header className="App-header">
        <h1>Termékek: </h1>
      </header>
      <Nav activeKey="/" className="navbar-light bg-warning">
        <Nav.Item>
          <Nav.Link href="/">Diszhalak</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/admin">Admin</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">Urlap</Nav.Link>
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
