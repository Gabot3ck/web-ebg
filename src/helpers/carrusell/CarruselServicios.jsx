import { useState } from "react";
import { EnlacesCarrusel } from "./EnlacesCarrusel";
import consultoria from "../../assets/images/carrusel_servicios/consultoria.jpg";
import alcantarilla from "../../assets/images/carrusel_servicios/alcantarilla.jpg";
import caminos from "../../assets/images/carrusel_servicios/caminos.jpg";
import container from "../../assets/images/carrusel_servicios/container.jpg";
import edificacion from "../../assets/images/carrusel_servicios/edificacion.jpg";
import estructuras from "../../assets/images/carrusel_servicios/estructuras.jpg";
import "./Carrusel.css";


const arrayId = [0, 1, 2, 3, 4, 5];


export const CarruselServicios = () => {

    const [idEnlace, setIdEnlace] = useState(0);

    const cambiarEnlace = id => {
        setIdEnlace(id)
    }
    

    return (<>
        <section className="wrapper_carrusel_servicios mx-auto">
            <div className="container-servicios-enlaces py-3 d-flex justify-content-evenly w-100">
                {
                    arrayId.map( (el,index) => (
                        <EnlacesCarrusel 
                            key={ el }
                            index={ index }
                            className={`enlace-servicios my-0 ${idEnlace === el ? "icon_activo" : ""}`}
                            onClick={ () => cambiarEnlace(el) }
                        />
                    ))
                }
            </div>

            <div id="myCarousel" className="carousel slide carousel-fade w-100" data-bs-touch="true" data-bs-ride="false">

                <div className="carousel-inner w-100">
                    
                    <div className="carousel-item d-flex active ">
                        <img src= { consultoria } alt="..."/>
                        <div className="caption">
                            <h3 className="titulo2 step-5">Asesoría</h3>
                            <p className="step-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, harum, sunt? Ipsam dolore ducimus commodi ut eaque nisi exercitationem amet laborum facere minima, magnam distinctio, inventore velit labore earum quidem!</p>
                            
                            <div className="btn btn-2">
                                <a className="btn btn-danger" href="/"><span>+</span> Leer más </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="carousel-item d-flex">
                        <img src= { alcantarilla } alt="..."/>
                        <div className="caption ">
                            <h3 className="titulo2 step-5">Agua y alcantarillado</h3>
                            <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo cum perspiciatis totam nemo fugiat dolorem impedit, consectetur soluta nulla aliquam libero maiores dolore, at necessitatibus, facere repudiandae molestias accusamus sit.</p>
                            <div className="btn btn-2">
                                <a className="btn btn-danger" href="/"><span>+</span> Leer más</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="carousel-item d-flex">
                        <img src= { edificacion }  alt="..."/>
                        <div className="caption ">
                            <h3 className="titulo2 step-5">Edificación</h3>
                            <p className="">Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Fugiat ex magnam architecto reprehenderit ipsum. Dolor et molestias consequatur, cumque dolore, quibusdam cupiditate sunt inventore rerum! Amet, temporibus. Possimus, temporibus, sapiente!</p>
                            <div className="btn btn-2">
                                <a className="btn btn-danger" href="/"><span>+</span> Leer más</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="carousel-item d-flex">
                        <img src= { estructuras }  alt="..."/>
                        <div className="caption">
                            <h3 className="titulo2 step-5">Estructuras metálicas</h3>
                            <p className="">Lorem ipsum dolor, sit, amet consectetur adipisicing elit. Esse recusandae maxime necessitatibus rem asperiores enim, unde similique expedita hic, eligendi voluptas, cumque eaque error corrupti numquam culpa eos quaerat consequatur!.</p>
                            <div className="btn btn-2">
                                <a className="btn btn-danger" href="/"><span>+</span> Leer más</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="carousel-item d-flex">
                        <img src= { caminos }  alt="..."/>
                        <div className="caption">
                            <h3 className="titulo2 step-5">Caminos</h3>
                            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, delectus, dolorum? Provident qui quas maxime, natus ipsam sit ipsum laudantium corrupti impedit maiores placeat, numquam quaerat voluptatibus tempore nulla, veniam?.</p>
                            <div className="btn btn-2">
                                <a className="btn btn-danger" href="/"><span>+</span> Leer más</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="carousel-item d-flex">
                        <img src={ container } alt="..."/>
                        <div className="caption">
                            <h3 className="titulo2 step-5">Módulos de containers</h3>
                            <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur deserunt necessitatibus quaerat nesciunt quia officiis, veniam cupiditate praesentium optio ad ea delectus placeat corporis fuga, reprehenderit temporibus laudantium ratione ab?.</p>
                            <div className="btn btn-2">
                                <a className="btn btn-danger" href="/"><span>+</span> Leer más</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>)
}
