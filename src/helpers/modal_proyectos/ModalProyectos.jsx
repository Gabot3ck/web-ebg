import { CarruselModalProyectos } from "../carrusell/CarruselModalProyectos";
import "./ModalProyectos.css";




export const ModalProyectos = ({ 
    children,
    img, 
    alt, 
    tituloCard,
    titulo,
    area, 
    foto1, 
    foto2, 
    foto3, 
    foto4 }) => {



    return (<>
        
        <button type="button" className="btn_modal px-0 rounded " data-bs-toggle="modal" data-bs-target={`#${img}`} aria-label="Mostrar Proyecto">
            <img src={ img } alt={ alt } className="rounded-top" />
            <h3 className="fs-5 text-center">{ tituloCard }</h3>
            <p className="" >
                {area} <br/>
                <span className="text-decoration-underline " > VER MÁS </span>
            </p>
        </button>


        <div 
            className="modal fade modal_proyectos" 
            id={ img } 
            data-bs-backdrop="static" 
            data-bs-keyboard="false" 
            tabIndex="-1" 
            aria-labelledby="staticBackdropLabel" 
            aria-hidden="true"
        >
            <div className="modal-dialog modal-fullscreen-md-down modal-xl px-5 px-xxl-0 ">
                <div className="modal-content">

                    <div className="modal-header">
                        <button 
                            type="button" 
                            className="btn-close" 
                            data-bs-dismiss="modal" 
                            aria-label="Close"
                        >
                        </button>
                    </div>
    
                    <div className="modal-body pt-0 d-flex flex-column flex-lg-row">

                        <div className="wrapper_images_modal ">
                            <CarruselModalProyectos
                                foto1={ foto1 }
                                foto2={ foto2 }
                                foto3={ foto3 }
                                foto4={ foto4 }
                            />
                        </div>
        
                        <div className="wrapper_textos_modal px-2 ps-lg-3 ps-xl-5">
                            <h3 className="text-start mb-3 titulo_modal ">{ titulo }</h3>
                            <section className="textos_modal mb-5" >
                                { children }
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
