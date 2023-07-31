import { useInView } from 'react-intersection-observer';
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FaGlobeAmericas, FaAward } from "react-icons/fa";
import { GiDiamondTrophy } from "react-icons/gi";
import { CardStandares } from "../../../../helpers/cards/CardStandares";
import "./PorQueNosotros.css";

export const PorQueNosotros = () => {

    const [ref, inView] = useInView({
        triggerOnce: true, // Para que la animación se ejecute solo una vez
        threshold: 0.05, // Porcentaje de intersección necesario para activar la animación (0.5 es 50%)
    });
    
    return (<>
        <section className="w-100 wrapper_porque_nosotros pt-5 pb-3 py-xl-5">
            <div className="porque_nosotros_texto mx-auto">
                <h2 className="text-center step-7 pt-4 pt-lg-5">¿Por Qué Nosotros?</h2>
                <p className="text-center mx-auto step-3">
                    Destacamos por nuestra sólida cultura de seguridad laboral y sostenibilidad en todos los niveles. Nos enorgullece trabajar con colaboradores, clientes y proveedores comprometidos con valores similares.
                </p>
            </div>

            <div 
                ref={ref}
                className={`container ${inView ? 'animate__animated animate__fadeInUp' : ''}`}
            >
                <div className="row px-5 px-xxl-0 row-cols-1 row-cols-md-2">
                    <CardStandares
                        icono={ <MdOutlineHealthAndSafety /> }  
                        titulo="Seguridad"
                        texto="La seguridad es nuestra prioridad absoluta, implementamos rigurosas medidas y prácticas para salvaguardar a nuestros equipos, clientes y proveedores."
                    />

                    <CardStandares
                        icono={ <FaGlobeAmericas /> } 
                        titulo="Medio Ambiente"
                        texto="Comprometidos a proteger el medio ambiente y a reducir la huella de carbono, así construimos un futuro más verde."
                    />

                    <CardStandares
                        icono={ <GiDiamondTrophy /> } 
                        titulo="Calidad"
                        texto="Nuestro objetivo principal es brindar un servicio de calidad a nuestros clientes, entendiendo que de nuestro desempeño depende el desarrollo y éxito de los proyectos y objetivos de los mismos."
                    />

                    <CardStandares
                        icono={ <FaAward /> }  
                        titulo="Valores"
                        texto='Actuamos con honestidad, ética y transparencia en todas nuestras operaciones, bajo el lema: "Uniendo Valores, Construimos Futuro".'
                    />
                </div>
            </div>
        </section>
    </>)
}
