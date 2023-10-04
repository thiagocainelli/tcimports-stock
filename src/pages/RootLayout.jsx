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
                <p>TC Imports 2023 - Todos os direitos reservados.</p>
            </footer>
        </>
    )
}