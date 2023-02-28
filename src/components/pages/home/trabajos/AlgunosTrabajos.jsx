import LaReina from "../../../../assets/images/proyectos/la_reina/portada1_card.jpg";
import vitacura from "../../../../assets/images/proyectos/vitacura/portada1_card.jpg";
import OficinaEnel from "../../../../assets/images/proyectos/edificio_enel/card_portada_enel.jpg";
import Dyno from "../../../../assets/images/proyectos/dyno/card_portada_dyno.jpg";
import foto1 from "../../../../assets/images/proyectos/la_reina/portada1_modal.jpg";
import foto2 from "../../../../assets/images/proyectos/la_reina/proceso1_modal.jpg";
import foto3 from "../../../../assets/images/proyectos/la_reina/interior1_modal.jpg";
import foto4 from "../../../../assets/images/proyectos/la_reina/portada2_modal.jpg";
import enel1 from "../../../../assets/images/proyectos/edificio_enel/modal_portada_enel.jpg";
import enel2 from "../../../../assets/images/proyectos/edificio_enel/modal_enel2.jpg";
import enel3 from "../../../../assets/images/proyectos/edificio_enel/modal_enel3.jpg";
import enel4 from "../../../../assets/images/proyectos/edificio_enel/modal_enel4.jpg";
import dyno1 from "../../../../assets/images/proyectos/dyno/modal_dyno1.jpg";
import dyno2 from "../../../../assets/images/proyectos/dyno/modal_dyno2.jpg";
import dyno3 from "../../../../assets/images/proyectos/dyno/modal_dyno3.jpg";
import dyno4 from "../../../../assets/images/proyectos/dyno/modal_dyno1.jpg";
import vitacura1 from "../../../../assets/images/proyectos/vitacura/portada1_modal.jpg";
import vitacura2 from "../../../../assets/images/proyectos/vitacura/portada2_modal.jpg";
import vitacura3 from "../../../../assets/images/proyectos/vitacura/portada3_modal.jpg";
import vitacura4 from "../../../../assets/images/proyectos/vitacura/portada4_modal.jpg";
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
                        img={ vitacura } 
                        titulo="Vitacura"
                        area="OOCC"
                        lugar= "Dirección"
                        foto1={ vitacura1 }
                        foto2={ vitacura2 }
                        foto3={ vitacura3 }
                        foto4={ vitacura4 }
                        />
                </section>

                <section className="trabajos_card col-3 px-2">
                    <ModalProyectos 
                        img={  OficinaEnel  } 
                        titulo="Oficinas de Edificio ENEL"
                        area="Carpintería"
                        lugar= "Dirección"
                        foto1={ enel1 }
                        foto2={ enel2 }
                        foto3={ enel3 }
                        foto4={ enel4 }
                        />
                </section>

                <section className="trabajos_card col-3 px-2">
                    <ModalProyectos 
                        img={ Dyno } 
                        titulo="Edificación de Containers"
                        area="Remodelaciones"
                        lugar= "Dirección"
                        foto1={ dyno1 }
                        foto2={ dyno2 }
                        foto3={ dyno3 }
                        foto4={ dyno4 }
                        />
                </section>

            </main>

        </section>
    </>)
}
