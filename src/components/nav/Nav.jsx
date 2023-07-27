import { useEffect, useState } from "react";
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

                    <a className="navbar-brand p-0" href="#inicio">
                        <img className="animate__fadeInLeft animate__animated" src={!color ? LogoLight : LogoDark} alt="Logo EBG" />
                    </a>

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
                                <a href="#inicio" className={`nav-link step-2  ${color && "bg_nav_a"}`}>Inicio</a>
                            </li>
                            <li className="nav-item px-lg-3">
                                <a 
                                    href="#nosotros" 
                                    className={`nav-link step-2 ${color && "bg_nav_a"}`}
                                >
                                    Nosotros
                                </a>
                            </li>
                            <li className="nav-item px-lg-3">
                                <a 
                                    href="#servicios" 
                                    className={`nav-link step-2 ${color && "bg_nav_a"}`}
                                >
                                    Servicios
                                </a>
                            </li>
                            <li className="nav-item px-lg-3">
                                <a 
                                    href="#proyectos" 
                                    className={`nav-link step-2 ${color && "bg_nav_a"}`}
                                >
                                    Proyectos
                                </a>
                            </li>
                            <li className="nav-item px-lg-3">
                                <a href="#contacto" className={`nav-link step-2 ${color && "bg_nav_a"}`}>Contacto</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>

    </>)
}
