import { Link, Outlet } from "react-router-dom";
import logotipo from "../../public/logotipo.png"

export default function RootLayout() {
    return (
        <>
            <header>
                <div className="logoContainer">
                    <img className="logoImg" src={logotipo} alt="Logotipo"/>
                    <Link to="/" className="logo">TC IMPORTS</Link>
                </div>
                <nav>
                    <Link to="/">Início</Link>
                    <Link to="/items">Itens</Link>
                </nav>
            </header>

            <div>
                <Outlet></Outlet>
            </div>

            <footer>
                <p>Criado por &copy; <a href="https://linkedin.com/in/thiagocainelli" target="_blank">Thiago Cainelli</a> - 2023 </p>
            </footer>
        </>
    )
}