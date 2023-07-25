import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import LogoDark from "../../assets/images/ebg-logo-dark.png";
import LogoLight from "../../assets/images/ebg-logo-light.png";

import "./Nav.css";

export const Nav = () => {

    const [color, setcolor] = useState(false);

    useEffect(() => {
        const addBgColor = () => {
            if(window.scrollY < 90 ){
                setcolor(false)
            } else {
                setcolor(true);
            }
        }
    
        window.addEventListener("scroll", addBgColor);
    
        return () => {
            window.removeEventListener("scroll", addBgColor);
        }
    }, []);
    

    return (<>
        <div className={ `wrapper_nav w-100 ${color && "bg_nav"}`}>
            <nav className="navbar navbar-expand-lg  py-0 mx-auto">
                <div className="container-xxl h-100 d-flex ">

                    <Link className="navbar-brand p-0" to="/">
                        <img className="" src={!color ? LogoLight : LogoDark} alt="Logo EBG" />
                    </Link>

                    {
                        color && 

                        <button 
                            className="navbar-toggler " 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarSupportedContent" 
                            aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <BiMenu />
                        </button>
                    }
                    
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item px-lg-3">
                                <Link to="/" className={`nav-link step-2 ${window.location.pathname === "/" ? "activado" : ""} ${color && "bg_nav_a"}`}>Inicio</Link>
                            </li>
                            <li className="nav-item px-lg-3">
                                <Link to="/nosotros" className={`nav-link step-2 ${window.location.pathname === "/nosotros" ? "activado" : ""} ${color && "bg_nav_a"}`}>Nosotros</Link>
                            </li>
                            <li className="nav-item dropdown px-lg-3">
                                <a className= {`nav-link step-2 dropdown-toggle ${color && "bg_nav_a"}`} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Servicios
                                </a>
                                <ul className="dropdown-menu">
                                    <Link className="dropdown-item step-2" to="/oocc">Obras Civiles</Link>
                                    <li><a className="dropdown-item step-2" href="/">Edificación y Remodelación</a></li>
                                    <li><a className="dropdown-item step-2" href="/">Obras Industriales</a></li>
                                    <li><a className="dropdown-item step-2" href="/">Asesoría</a></li>
                                </ul>
                            </li>
                            <li className="nav-item px-lg-3">
                                <Link to="/proyectos" className={`nav-link step-2 ${window.location.pathname === "/proyectos" ? "activado" : ""} ${color && "bg_nav_a"}`}>Proyectos</Link>
                            </li>
                            <li className="nav-item px-lg-3">
                                <Link to="/contacto" className={`nav-link step-2 ${window.location.pathname === "/contacto" ? "activado" : ""} ${color && "bg_nav_a"}`}>Contacto</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>

    </>)
}
