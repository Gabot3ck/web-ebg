import { useState } from "react";
import { useInView } from 'react-intersection-observer';
import { EnlacesCarrusel } from "./EnlacesCarrusel";
import consultoria from "../../assets/images/carrusel_servicios/consultoria.jpg";
import obrasCiviles from "../../assets/images/carrusel_servicios/obras-civiles.jpg";
import container from "../../assets/images/carrusel_servicios/industrial.jpg";
import remodelacion from "../../assets/images/carrusel_servicios/remodelacion.jpg";
import "./Carrusel.css";


const arrayId = [0, 1, 2, 3];


export const CarruselServicios = () => {

    const [idEnlace, setIdEnlace] = useState(0);

    const cambiarEnlace = id => {
        setIdEnlace(id)
    }

    const [ref, inView] = useInView({
        triggerOnce: true, // Para que la animación se ejecute solo una vez
        threshold: 0.05, // Porcentaje de intersección necesario para activar la animación (0.5 es 50%)
    });


    return (<>
        <section 
            ref={ ref }
            className={`mx-auto wrapper_carrusel_servicios ${inView ? 'animate__animated animate__fadeInUp animate__delay-1s' : ''}`}
        >
            <div className="py-3 w-100 d-flex flex-column flex-lg-row justify-content-evenly  container-servicios-enlaces ">
                {
                    arrayId.map( (el,index) => (
                        <EnlacesCarrusel 
                            key={ el }
                            index={ index }
                            className={`enlace-servicios my-2 my-lg-0 ${idEnlace === el ? "icon_activo" : ""}`}
                            onClick={ () => cambiarEnlace(el) }
                        />
                    ))
                }
            </div>

            <div 
                id="myCarousel" 
                className="carousel slide carousel-fade w-100" 
                data-bs-touch="true" 
                data-bs-ride="false"
            >

                <div className="carousel-inner w-100">
                    
                    <div className="carousel-item d-flex flex-column flex-md-row active ">
                        <img src= { obrasCiviles } alt="Trabajos de Obras Civiles en EBG"/>
                        <div className="caption texto-servicios py-3 py-lg-0 ">
                            <h3 className="">Obras Civiles</h3>
                            <p className="step-3 mb-3 mb-lg-0">
                            Con sólida trayectoria en <strong>obras civiles</strong> , ofrecemos soluciones confiables y de calidad que transforman espacios, superando expectativas en cada proyecto. Descubre cómo nuestra experiencia puede impulsar tu éxito en la industria de la construcción, siendo nuestras especialidades:

                                <li className="mt-3" >Obras Civiles Eléctricas</li>
                                <li>Obras Civiles Urbanas</li>
                                <li>Obras Civiles Sanitarias</li>
                                <li>Obras Civiles Industriales</li>
                            </p>
                        </div>
                    </div>
                    
                    <div className="carousel-item d-flex flex-column flex-md-row">
                        <img src= { remodelacion  } alt="Trabajo de remodelaciones interiores de oficina en EBG Chile"/>
                        <div className="caption texto-servicios py-3 py-lg-0 ">
                            <h3 className="">Edificación Y Remodelación</h3>
                            <p className="step-3 mb-3 mb-lg-0">
                                En el ámbito de edificaión y remodelaciones, somos líderes en brindar soluciones innovadoras y personalizadas. Nuestra experiencia en ingeniería y construcción se combina con una visión estética, te ayudaremos a renovar tus espacios para impulsar la productividad y reflejar la identidad de tu empresa. 
                                <br /><br />
                                Nuestras especialidedades son:
                                <li className="mt-3" >Construcciones habitacionales</li>
                                <li>Remodelaciones</li>
                                <li>Restauraciones</li>
                                <li>Habilitación de oficinas</li>
                            </p>
                        </div>
                    </div>
                    
                    <div className="carousel-item d-flex flex-column flex-md-row">
                        <img src= { container  }  alt="..."/>
                        <div className="caption texto-servicios py-3 py-lg-0">
                            <h3 className="">Obras Industriales</h3>
                            <p className="mb-3 mb-lg-0 step-3">
                                En la construcción de obras industriales, somos líderes en innovación y eficiencia. Nuestra experiencia en ingeniería y construcción se combina para crear estructuras robustas y versátiles, adaptadas a tus necesidades específicas. Confía en nosotros para edificar soluciones sólidas y vanguardistas
                                <br /><br />
                                Nuestras especialidedades son:
                                <li className="mt-3" >Obras de estructuras metálicas</li>
                                <li>Obras de estructuras modulares</li>
                                <li>Construcción de galpones</li>
                            </p>
                        </div>
                    </div>
                    
                    <div className="carousel-item d-flex flex-column flex-md-row">
                        <img src= { consultoria}  alt="..."/>
                        <div className="caption texto-servicios py-3 py-lg-0">
                            <h3 className="">Asesoría</h3>
                            <p className=" mb-3 mb-lg-0 step-3">
                            Potencia el éxito de tus proyectos con nuestro respaldo experto para el éxito de tus iniciativas. Nuestro equipo de expertos en ingeniería y construcción te guiará en cada etapa, aportando conocimientos estratégicos y soluciones personalizadas. 
                            <br /><br />
                            Confía en nosotros para llevar tus proyectos al siguiente nivel.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    </>)
}
