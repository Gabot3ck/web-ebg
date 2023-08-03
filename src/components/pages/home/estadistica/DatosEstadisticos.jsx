import { useInView } from 'react-intersection-observer';
import { Odometro } from "../../../../helpers/odometro/Odometro";
import "./DatosEstadisticos.css";



export const DatosEstadisticos = () => {

    const [ref, inView] = useInView({
        triggerOnce: true, // Para que la animación se ejecute solo una vez
        threshold: 0.2, // Porcentaje de intersección necesario para activar la animación (0.5 es 50%)
    });

    return (<>
        <section ref={ ref } className='w-100 wrapper_estadisticas d-flex align-items-center'>
            <div  className="mx-auto d-flex flex-column flex-md-row justify-content-around justify-content-xxl-between">
                <div className="mt-4 mt-md-0 d-flex flex-column justify-content-center align-items-center card_estadisticas ">
                    {inView && <Odometro inicia="48" termina="94"/> }
                    <p className="step-5" >Clientes Satisfechos</p>
                </div>
                <div  className="my-4 my-md-0 d-flex flex-column justify-content-center align-items-center card_estadisticas">
                    {inView && <Odometro inicia="52" termina="83"/> }
                    <p className="step-5" >Proyectos Desarrollados</p>
                </div>
                <div  className="mb-4 mb-md-0 d-flex flex-column justify-content-center align-items-center card_estadisticas">
                    {inView && <Odometro inicia="54895" termina="55814"/> }
                    <p className="step-5" >m<sup>2</sup> de Experiencia</p>
                </div>
            </div>
        </section>
    </>)
}
