import { Link } from "react-router-dom";
import Logo from "../../assets/images/ebg-logo-large.png";
import "./Nav.css";

export const Nav = () => {

    

    return (<>
        <div className="wrapper_nav w-100">
            <nav className="navbar navbar-expand-lg  py-0 mx-auto">
                <div className="container-fluid h-100 px-4 d-flex ">

                    <a className="navbar-brand p-0" href="/">
                        <img className="" src={Logo} alt="Logo EBG" />
                    </a>

                    
                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    
                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                                <li className="nav-item px-lg-3">
                                    <Link to="/" className={`nav-link ${window.location.pathname === "/" ? "active" : ""}`}>Inicio</Link>
                                </li>
                                <li className="nav-item px-lg-3">
                                    <Link to="/nosotros" className={`nav-link ${window.location.pathname === "/nosotros" ? "active" : ""}`}>Nosotros</Link>
                                </li>
                                <li className="nav-item dropdown px-lg-3">
                                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Servicios
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/">Obras Civiles</a></li>
                                        <li><a className="dropdown-item" href="/">Edificación y Remodelación</a></li>
                                        <li><a className="dropdown-item" href="/">Obras Industriales</a></li>
                                        <li><a className="dropdown-item" href="/">Consultoría</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item px-lg-3">
                                    <Link to="/proyectos" className={`nav-link ${window.location.pathname === "/proyectos" ? "active" : ""}`}>Proyectos</Link>
                                </li>
                                <li className="nav-item px-lg-3">
                                    <Link to="/contacto" className={`nav-link ${window.location.pathname === "/contacto" ? "active" : ""}`}>Contacto</Link>
                                </li>
                            </ul>
                        </div>

                    
                    
                </div>
            </nav>
        </div>

    </>)
}
