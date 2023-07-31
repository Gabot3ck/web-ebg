import { useEffect, useState } from "react";
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
                                href="https://www.linkedin.com/company/ebg-chile/mycompany/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </aside>
                
                <div className="pie_copyright mb-2">
                    <p className="step-1">&copy; Copyright { year } EBG Ingeniería y Construcción v1.1.0 </p>
                </div>
                
                <p className="autor step-1">Desarrollado por <a href="https://www.linkedin.com/in/gabriel-castillo-frontend/" target="_blank" rel="noopener noreferrer">Gabriel Castillo</a></p>
            </div>
        </footer>
        
    </>)
}
