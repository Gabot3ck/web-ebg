import LaReina from "../../../../assets/images/proyecto_la_reina.jpeg";
import Estructura from "../../../../assets/images/estructura.jpg";
import Remodelaciones from "../../../../assets/images/remodelaciones.jpg";
import Estructura2 from "../../../../assets/images/estructura2.jpg";
import foto1 from "../../../../assets/images/proyectos/la_reina/portada2.jpg";
import foto2 from "../../../../assets/images/proyectos/la_reina/portada.jpg";
import foto3 from "../../../../assets/images/proyectos/la_reina/interior1.jpg";
import { ModalProyectos } from "../../../../helpers/modal_proyectos/ModalProyectos";
import "./AlgunosTrabajos.css";

export const AlgunosTrabajos = () => {
    return (<>
        <section className="w-100 wrapper_trabajos mb-5 ">
            <div className="trabajos_texto mx-auto">
                <h2 className="text-center ">Algunos trabajos</h2>
                <p className="text-center mx-auto">Nuestra empresa se rige por estándares internacionales que aseguran la compatibilidad con el medioambiente, y la seguridad de nuestros trabajadores, clientes y proveedores.</p>
            </div>
            
            <main className="wrapper_trabajos_card d-flex px-2">

                <section className="trabajos_card col-3 px-2">
                    <ModalProyectos 
                        img={ LaReina } 
                        titulo="Caseta Municipal La Reina"
                        area="Remodelaciones"
                        foto1={ foto1 }
                        foto2={ foto2 }
                        foto3={ foto3 }
                        />
                </section>

                <section className="trabajos_card col-3 px-2">
                    <ModalProyectos 
                        img={ Estructura } 
                        titulo="Remodelación Tal Tal"
                        area="OOCC"
                        />
                </section>

                <section className="trabajos_card col-3 px-2">
                    <ModalProyectos 
                        img={  Remodelaciones  } 
                        titulo="Oficinas de Edificio ENEL"
                        area="Carpintería"
                        />
                </section>

                <section className="trabajos_card col-3 px-2">
                    <ModalProyectos 
                        img={ Estructura2 } 
                        titulo="Remodelaciones"
                        area="Remodelaciones"
                        />
                </section>

            </main>

        </section>
    </>)
}
