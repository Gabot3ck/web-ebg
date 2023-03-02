import { useState } from "react";
import { Link } from "react-router-dom";
import LogoDark from "../../assets/images/ebg-logo-dark.png";
import LogoLight from "../../assets/images/ebg-logo-light.png";

import "./Nav.css";

export const Nav = () => {

    const [color, setcolor] = useState(false);

    const addBgColor = () => {
        if(window.scrollY > 90 ){
            setcolor(true)
        } else {
            setcolor(false);
        }
    }

    window.addEventListener("scroll", addBgColor);

    return (<>
        <div className={ `wrapper_nav w-100 ${color && "bg_nav"}`}>
            <nav className="navbar navbar-expand-lg  py-0 mx-auto">
                <div className="container-fluid h-100 px-4 d-flex ">

                    <Link className="navbar-brand p-0" to="/">
                        <img className="" src={!color ? LogoLight : LogoDark} alt="Logo EBG" />
                    </Link>

                    
                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    
                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                                <li className="nav-item px-lg-3">
                                    <Link to="/" className={`nav-link ${window.location.pathname === "/" ? "active" : ""} ${color && "bg_nav_a"}`}>Inicio</Link>
                                </li>
                                <li className="nav-item px-lg-3">
                                    <Link to="/nosotros" className={`nav-link ${window.location.pathname === "/nosotros" ? "active" : ""} ${color && "bg_nav_a"}`}>Nosotros</Link>
                                </li>
                                <li className="nav-item dropdown px-lg-3">
                                    <a className= {`nav-link dropdown-toggle ${color && "bg_nav_a"}`} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Servicios
                                    </a>
                                    <ul className="dropdown-menu">
                                        <Link className="dropdown-item" to="/oocc">Obras Civiles</Link>
                                        <li><a className="dropdown-item" href="/">Edificación y Remodelación</a></li>
                                        <li><a className="dropdown-item" href="/">Obras Industriales</a></li>
                                        <li><a className="dropdown-item" href="/">Asesoría</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item px-lg-3">
                                    <Link to="/proyectos" className={`nav-link ${window.location.pathname === "/proyectos" ? "active" : ""} ${color && "bg_nav_a"}`}>Proyectos</Link>
                                </li>
                                <li className="nav-item px-lg-3">
                                    <Link to="/contacto" className={`nav-link ${window.location.pathname === "/contacto" ? "active" : ""} ${color && "bg_nav_a"}`}>Contacto</Link>
                                </li>
                            </ul>
                        </div>

                    
                    
                </div>
            </nav>
        </div>

    </>)
}
