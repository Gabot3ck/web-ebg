import LaReina from "../../../../assets/images/proyectos/la_reina/portada1_card.jpg";
import Taltal from "../../../../assets/images/proyectos/tal_tal/card_portada_taltal.jpg";
import OficinaEnel from "../../../../assets/images/proyectos/edificio_enel/card_portada_enel.jpg";
import Dyno from "../../../../assets/images/proyectos/dyno/card_portada_dyno.jpg";
import foto1 from "../../../../assets/images/proyectos/la_reina/portada1_modal.jpg";
import foto2 from "../../../../assets/images/proyectos/la_reina/proceso1_modal.jpg";
import foto3 from "../../../../assets/images/proyectos/la_reina/interior1_modal.jpg";
import foto4 from "../../../../assets/images/proyectos/la_reina/portada2_modal.jpg";
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
                        lugar= "Comuna La Reina, Santiago RM."
                        foto1={ foto1 }
                        foto2={ foto2 }
                        foto3={ foto3 }
                        foto4={ foto4 }
                        />
                </section>

                <section className="trabajos_card col-3 px-2">
                    <ModalProyectos 
                        img={ Taltal } 
                        titulo="Remodelación Tal Tal"
                        area="OOCC"
                        lugar= "Dirección"
                        />
                </section>

                <section className="trabajos_card col-3 px-2">
                    <ModalProyectos 
                        img={  OficinaEnel  } 
                        titulo="Oficinas de Edificio ENEL"
                        area="Carpintería"
                        lugar= "Dirección"
                        />
                </section>

                <section className="trabajos_card col-3 px-2">
                    <ModalProyectos 
                        img={ Dyno } 
                        titulo="Edificación de Containers"
                        area="Remodelaciones"
                        lugar= "Dirección"
                        />
                </section>

            </main>

        </section>
    </>)
}
