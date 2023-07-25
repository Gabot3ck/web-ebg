import "./DatosEstadisticos.css";
import { Odometro } from "../../../../helpers/odometro/Odometro";
export const DatosEstadisticos = () => {

    return (<>
        <section className='w-100 wrapper_estadisticas d-flex align-items-center'>
            <div className="mx-auto d-flex flex-column flex-md-row justify-content-around justify-content-xxl-between">
                <div className="mt-5 mt-md-0 d-flex flex-column justify-content-center align-items-center card_estadisticas ">
                    <Odometro inicia="48" termina="94"/>
                    <p className="step-5" >Clientes Satisfechos</p>
                </div>
                <div  className="my-5 my-md-0 d-flex flex-column justify-content-center align-items-center card_estadisticas">
                    <Odometro inicia="52" termina="83"/>
                    <p className="step-5" >Proyectos Desarrollados</p>
                </div>
                <div  className="mb-5 mb-md-0 d-flex flex-column justify-content-center align-items-center card_estadisticas">
                    <Odometro inicia="54895" termina="55814"/>
                    <p className="step-5" >m<sup>2</sup> de Experiencia</p>
                </div>
            </div>
        </section>
    </>)
}
