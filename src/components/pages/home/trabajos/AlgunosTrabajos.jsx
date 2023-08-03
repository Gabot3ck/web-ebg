import { MdCalendarMonth } from "react-icons/md";
import { IoConstruct } from "react-icons/io5";
import { GoContainer } from "react-icons/go";
import { BsGeoAltFill } from "react-icons/bs";
import LaReina from "../../../../assets/images/proyectos/la_reina/card_lareina.jpg";
import vitacura from "../../../../assets/images/proyectos/vitacura/aeropuerto_card.jpeg";
import OficinaEnel from "../../../../assets/images/proyectos/edificio_enel/card_portada_enel.jpg";
import Dyno from "../../../../assets/images/proyectos/dyno/card_portada_dyno.jpg";
import foto1 from "../../../../assets/images/proyectos/la_reina/portada1_modal.jpg";
import foto2 from "../../../../assets/images/proyectos/la_reina/proceso1_modal.jpg";
import foto3 from "../../../../assets/images/proyectos/la_reina/modal3.jpg";
import foto4 from "../../../../assets/images/proyectos/la_reina/portada2_modal.jpg";
import enel1 from "../../../../assets/images/proyectos/edificio_enel/modal_portada_enel.jpg";
import enel2 from "../../../../assets/images/proyectos/edificio_enel/modal_enel2.jpg";
import enel3 from "../../../../assets/images/proyectos/edificio_enel/modal_enel3.jpg";
import enel4 from "../../../../assets/images/proyectos/edificio_enel/modal_enel4.jpg";
import dyno1 from "../../../../assets/images/proyectos/dyno/modal_dyno1.jpg";
import dyno2 from "../../../../assets/images/proyectos/dyno/modal_dyno2.jpg";
import dyno3 from "../../../../assets/images/proyectos/dyno/modal_dyno3.jpg";
import dyno4 from "../../../../assets/images/proyectos/dyno/modal_dyno4.jpg";
import vitacura1 from "../../../../assets/images/proyectos/vitacura/aeropuerto2-color.jpeg";
import vitacura2 from "../../../../assets/images/proyectos/vitacura/portada2_modal.jpg";
import vitacura3 from "../../../../assets/images/proyectos/vitacura/portada3_modal.jpg";
import vitacura4 from "../../../../assets/images/proyectos/vitacura/aeropuerto3-color.jpeg";
import { ModalProyectos } from "../../../../helpers/modal_proyectos/ModalProyectos";
import "./AlgunosTrabajos.css";



export const AlgunosTrabajos = () => {

    return (<>
        <section className="w-100 wrapper_trabajos mb-5 " id="proyectos">
            <div className="trabajos_texto mx-auto mb-4 mb-lg-0">
                <h2 className="text-center step-7 mt-lg-5">Algunos proyectos</h2>
                <p className="text-center mx-auto step-3">
                    De la remodelación de espacios urbanos a la construcción de infraestructuras vitales, nuestros proyectos demuestran nuestro compromiso con la calidad, la innovación y la entrega de resultados excepcionales.
                </p>
            </div>
            
            <main
                
                className={`mx-auto px-2 w-100  d-flex flex-column flex-lg-row align-items-center justify-content-evenly wrapper_trabajos_card
                `}>

                <section className="trabajos_card px-2">
                    <ModalProyectos 
                        img={ LaReina } 
                        tituloCard="Centro de Seguridad Municipal La Reina"
                        titulo="1° Centro de Seguridad Municipal de La Reina"
                        area="Edificación"
                        foto1={ foto3 }
                        foto2={ foto1 }
                        foto3={ foto2 }
                        foto4={ foto4 }
                        alt='Proyecto de edificación Caseta Municipal La Reina'
                    >
                        {<>
                            <p className="mb-3 text_justify" >Construcción del  "Centro de Seguridad Comunitaria Unidad Vecinal N°1" en la comuna de La Reina.</p>
                            <p className="mb-2 text_justify">
                                <BsGeoAltFill />
                                <span className="fw-semibold " > Lugar: </span>Av. Sánchez Fontecilla esquina Eliecer Parada, La Reina, Santiago RM.
                            </p>
                            <p className="mb-2">
                                <MdCalendarMonth />
                                <span className="fw-semibold " > Fecha de inicio: </span>02 febrero 2023.
                            </p>
                            <p className="mb-2">
                                <MdCalendarMonth />
                                <span className="fw-semibold " > Fecha de término: </span>10 abril  2023.
                            </p>
                            <p className="mb-2">
                                <GoContainer />
                                <span className="fw-semibold "> m<sup>2</sup>: </span>  100  m<sup>2.</sup>
                            </p>
                            <p className="mb-2 text_justify">
                                <IoConstruct />
                                <span className="fw-semibold " > Actividades:</span> Mejoramiento de suelo, fundaciones, carpintería metálica, ventanas termopanel, tabiquería,
                                piso fotolaminado. Instalaciones eléctricas, sanitarias, climatización. Revestimiento exterior, terraza, pintura, gráficas y paisajismo.
                            </p>
                        </>}
                    </ModalProyectos>
                </section>

                <section className="trabajos_card px-2">
                    <ModalProyectos 
                        img={ vitacura } 
                        tituloCard="Aeropuerto Internacional A. Merino Benítez"
                        titulo="Proyecto de Obras Civiles"
                        area="Obras civiles"
                        foto1={ vitacura1 }
                        foto2={ vitacura2 }
                        foto3={ vitacura3 }
                        foto4={ vitacura4 }
                        alt='Construcción de cámaras y bóvedas de redes eléctricas de baja y mediana tensión'
                    >
                        {<>
                            <p className="mb-3 text_justify" >Construcción de bóvedas y cámaras de redes eléctricas de baja y mediana tensión para la empresa Nuevo Pudahuel dentro del Aeropuerto Internacional Arturo Merino Benítez.</p>
                            <p className="mb-2 text_justify">
                                <BsGeoAltFill />
                                <span className="fw-semibold " > Lugar: </span>Pudahel, Santiago de Chile, RM.
                            </p>
                            <p className="mb-2">
                                <MdCalendarMonth className="" />
                                <span className="fw-semibold " > Fecha de inicio: </span>15 mayo 2017.
                            </p>
                            <p className="mb-2">
                                <MdCalendarMonth className="" />
                                <span className="fw-semibold " > Fecha de término: </span>15 setiembre 2017.
                            </p>
                            <p className="mb-2">
                                <GoContainer className="" />
                                <span className="fw-semibold "> m<sup>2</sup>: </span>  5300  m<sup>2.</sup>
                            </p>
                            <p className="mb-2 text_justify">
                                <IoConstruct className="" />
                                <span className="fw-semibold " > Actividades:</span> Calicatas, demolición, canalización y construcción de cámaras y bóvedas de redes eléctricas.
                            </p>
                        </>}
                    </ModalProyectos>
                </section>

                <section className="trabajos_card px-2">
                    <ModalProyectos 
                        img={  OficinaEnel  } 
                        tituloCard="Oficinas de Edificio ENEL"
                        titulo="Edificio ENEL"
                        area="Remodelaciones"
                        foto1={ enel1 }
                        foto2={ enel2 }
                        foto3={ enel3 }
                        foto4={ enel4 }
                        alt='Remodelaciones y reparaciones de oficinas corporativas ENEL Chile'
                    >
                        {<>
                            <p className="mb-3 text_justify" >Reparación y remodelación de las oficinas corporativas en los piso 4, 9, 12, 13 y 16 del edifico principal y sucursales de la empresa ENEL Chile.</p>
                            <p className="mb-2 text_justify">
                                <BsGeoAltFill />
                                <span className="fw-semibold " > Lugar: </span>AV. Santa Rosa 76, Santiago RM.
                            </p>
                            <p className="mb-2">
                                <MdCalendarMonth className="" />
                                <span className="fw-semibold " > Fecha de inicio: </span>10 diciembre 2022.
                            </p>
                            <p className="mb-2">
                                <MdCalendarMonth className="" />
                                <span className="fw-semibold " > Fecha de término: </span>25 junio 2023.
                            </p>
                            <p className="mb-2">
                                <GoContainer className="" />
                                <span className="fw-semibold "> m<sup>2</sup>: </span>  7500  m<sup>2.</sup>
                            </p>
                            <p className="mb-2 text_justify">
                                <IoConstruct className="" />
                                <span className="fw-semibold " > Actividades:</span> Tabiques metalcom y vidriado. Revestimientos de pavimentos 
                                en porcelanato,  cerámica y alfombra. Pintura, carpintería metálica, instalación de cielo modular incluyendo luminarias y difusores clima. 
                                Instalación de muebles, puertas, aire acondicionado, letrero de seguridad, tablero eléctrico, monitores de tv, entre otros. 
                            </p>
                        </>}
                    </ModalProyectos>
                </section>

                <section className="trabajos_card px-2">
                    <ModalProyectos 
                        img={ Dyno } 
                        tituloCard="Planta Dyno Nobel"
                        titulo="Planta Industrial Dyno Nobel"
                        area="Estructuras"
                        foto1={ dyno1 }
                        foto2={ dyno2 }
                        foto3={ dyno3 }
                        foto4={ dyno4 }
                        alt='Construcción modular y estructura metálica de una planta industrial Dyno Nobel'
                    >
                        {<>
                            <p className="mb-3 text_justify" >Construcción modular y estructura metálica de una planta industrial de fabricación y ensamblaje de explosivos mineros.</p>
                            <p className="mb-2 text_justify">
                                <BsGeoAltFill />
                                <span className="fw-semibold " > Lugar: </span>Las Barrancas, IV Región Coquimbo.
                            </p>
                            <p className="mb-2">
                                <MdCalendarMonth className="" />
                                <span className="fw-semibold " > Fecha de inicio: </span>15 noviembre 2010.
                            </p>
                            <p className="mb-2">
                                <MdCalendarMonth className="" />
                                <span className="fw-semibold " > Fecha de término: </span>30 junio 2011.
                            </p>
                            <p className="mb-2">
                                <GoContainer className="" />
                                <span className="fw-semibold "> m<sup>2</sup>: </span>  3400  m<sup>2.</sup>
                            </p>
                            <p className="mb-2 text_justify">
                                <IoConstruct className="" />
                                <span className="fw-semibold " > Actividades:</span> Nave de emsamble, bodega galpón, oficina de administración,
                                alimentación electrica de media tensión aérea, instalación de un transformador de energía a planta,
                                plantas de agua potable y alcantarillado y urbanización completa.
                            </p>
                        </>}
                    </ModalProyectos>
                </section>

            </main>

        </section>
    </>)
}
