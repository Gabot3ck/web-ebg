import "./DatosEstadisticos.css";
import { Odometro } from "../../../../helpers/odometro/Odometro";
export const DatosEstadisticos = () => {

    return (<>
        <section className='w-100 wrapper_estadisticas d-flex align-items-center'>
            <div className="d-flex justify-content-around mx-auto">
                <div className="d-flex flex-column justify-content-center align-items-center card_estadisticas">
                    <Odometro inicia="48" termina="94"/>
                    <p>Clientes Satisfechos</p>
                </div>
                <div  className="d-flex flex-column justify-content-center align-items-center card_estadisticas">
                    <Odometro inicia="52" termina="83"/>
                    <p>Proyectos Desarrollados</p>
                </div>
                <div  className="d-flex flex-column justify-content-center align-items-center card_estadisticas">
                    <Odometro inicia="54895" termina="55814"/>
                    <p>m<sup>2</sup> de Experiencia</p>
                </div>
                
                
            </div>
        </section>
    </>)
}
