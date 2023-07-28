import { useInView } from 'react-intersection-observer';
import dominion from "../../../../assets/images/clientes/dominion.svg";
import enel from "../../../../assets/images/clientes/enel.svg";
import engie from "../../../../assets/images/clientes/engie.svg";
import metro from "../../../../assets/images/clientes/metro.svg";
import muni from "../../../../assets/images/clientes/muni_santiago.svg";
import nuevoPudahuel from "../../../../assets/images/clientes/nuevo-pudahuel.svg";
import dynoNobel from "../../../../assets/images/clientes/dyno-nobel.svg";
import avsa from "../../../../assets/images/clientes/avsa.svg";
import "./Clientes.css";

export const Clientes = () => {

    const [ref, inView] = useInView({
        triggerOnce: true, // Para que la animación se ejecute solo una vez
        threshold: 0.05, // Porcentaje de intersección necesario para activar la animación (0.5 es 50%)
    });


    return (<>
        <section className="wrapper_clientes w-100 mb-5">
            <div className="clientes_texto mx-auto mb-4">
                <h2 className="text-center step-7">Nuestros Clientes</h2>
            </div>
            <div
                ref={ ref }
                className={`clientes_logos d-flex flex-column justify-content-between mx-auto
                ${inView ? 'animate__animated animate__fadeInUp' : ''}
                `}
            >
                <div className='d-flex justify-content-between mx-auto' >
                    <img src={ nuevoPudahuel } alt="Logo de Nuevo Pudahuel" className="img_1"/>
                    <img src={ dominion } alt="Logo de Dominion" className="img_1"/>
                    <img src={ muni } alt="Logo de Municipalidad" />
                    <img src={ enel } alt="Logo de ENEL" />
                </div>

                <div className='d-flex justify-content-between mx-auto' >
                    <img src={ dynoNobel } alt="Logo de Dyno Nobel" className="img_2"/>
                    <img src={ engie } alt="Logo de Engie" className="img_1" />
                    <img src={ metro } alt="Logo de Metro" className="img_3"/>
                    <img src={ avsa } alt="Logo de Dyno Nobel" className="img_1"/>
                </div>
            </div>
        </section>
    </>)
}
