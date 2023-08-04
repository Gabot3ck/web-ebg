import { useEffect, useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import "./Footer.css";


export const Footer = () => {

    const [year, setYear] = useState("");

    const actualizarAnio = () => {
        let data = new Date();
        let anioActual = data.getFullYear();
        setYear(anioActual);
    }

    useEffect( () => {
        actualizarAnio()
    }, [])

    return (<>
        <footer className="w-100 py-3">
            <div className="footer_pie mx-auto d-flex flex-column justify-content-center align-items-center">
                <aside className="pie__rrss">
                    <h3 className="step-2">Síguenos en redes sociales</h3>
                    <ul className="d-flex justify-content-around ">
                        <li>
                            <a 
                                className="bi-linkedin"
                                href="https://www.linkedin.com/company/ebg-chile/mycompany/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="Enlace al LinkedIn de EBG Ingeniería y Construcción"
                            >
                                <BsLinkedin />
                            </a>
                        </li>
                    </ul>
                </aside>
                
                <div className="pie_copyright mb-2">
                    <p className="step-1">&copy; Copyright { year } EBG Ingeniería y Construcción v1.1.0 </p>
                </div>
                
                <p className="autor step-1">
                    Desarrollado por <a href="https://www.linkedin.com/in/gabriel-castillo-developer/" target="_blank" rel="noopener noreferrer" aria-label="Enlace al autor de la página web">Gabriel Castillo</a>
                </p>
            </div>
        </footer>
        
    </>)
}
