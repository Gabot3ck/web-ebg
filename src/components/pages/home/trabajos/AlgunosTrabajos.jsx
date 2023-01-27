import LaReina from "../../../../assets/images/proyecto_la_reina.jpeg";
import Estructura from "../../../../assets/images/estructura.jpg";
import Remodelaciones from "../../../../assets/images/remodelaciones.jpg";
import Estructura2 from "../../../../assets/images/estructura2.jpg";
import "./AlgunosTrabajos.css";

export const AlgunosTrabajos = () => {
    return (<>
        <section className="w-100 wrapper_trabajos">
            <div className="trabajos_texto mx-auto">
                <h2 className="text-center">Algunos trabajos</h2>
                <p className="text-center mx-auto">Nuestra empresa se rige por estándares internacionales que aseguran la compatibilidad con el medioambiente, y la seguridad de nuestros trabajadores, clientes y proveedores.</p>
            </div>
            <main className="wrapper_trabajos_card d-flex">
                <section className="trabajos_card col-3">
                    <img src={ LaReina } alt="Proyecto de construcción de caceta municipal para la Municipalidad de La Reina, construído por EBG Ingeniería y Construcción en Santiago de Chile" />
                    <h3 className="fs-5 text-center py-2">Caseta Municipal La Reina</h3>
                </section>
                <section className="trabajos_card col-3">
                    <img src={ Estructura } alt="Proyecto de construcción de caceta municipal para la Municipalidad de La Reina, construído por EBG Ingeniería y Construcción en Santiago de Chile" />
                    <h3 className="fs-5 text-center py-2">Remodelación Tal Tal</h3>
                </section>
                <section className="trabajos_card col-3">
                    <img src={ Remodelaciones } alt="Proyecto de construcción de caceta municipal para la Municipalidad de La Reina, construído por EBG Ingeniería y Construcción en Santiago de Chile" />
                    <h3 className="fs-5 text-center py-2">Oficinas de Edificio ENEL</h3>
                </section>
                <section className="trabajos_card col-3">
                    <img src={ Estructura2 } alt="Proyecto de construcción de caceta municipal para la Municipalidad de La Reina, construído por EBG Ingeniería y Construcción en Santiago de Chile" />
                    <h3 className="fs-5 text-center py-2">Remodelaciones</h3>
                </section>
                
            </main>
        </section>
    </>)
}
