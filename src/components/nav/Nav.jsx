import Logo from "../../assets/images/ebg-logo-large.png";
import "./Nav.css";

export const Nav = () => {

    return (<>
        <div className="wrapper_nav w-100">
            <nav className="navbar navbar-expand-lg bg-light py-0">
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
                                    <a className="nav-link" aria-current="page" href="/">Inicio</a>
                                </li>
                                <li className="nav-item px-lg-3">
                                    <a className="nav-link" href="/">Nosotros</a>
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
                                    <a className="nav-link" href="/">Proyectos</a>
                                </li>
                                <li className="nav-item px-lg-3">
                                    <a className="nav-link" href="/">Contacto</a>
                                </li>
                            </ul>
                        </div>

                    
                    
                </div>
            </nav>
        </div>

    </>)
}
