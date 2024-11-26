import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
         <header className="App-header">
        <h1>Termékek: </h1>
      </header>
            <nav>
                <ul>
                    <li>
            {/* A publikus tartalom linkje */}
                        <Link to="/">Diszhalak</Link>
                    </li>
                    <li>
            {/* Az admin oldal linkjetartalom linkje */}
                        <Link to="/admin">Admin felület</Link>
                    </li>
                </ul>
            </nav>
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
