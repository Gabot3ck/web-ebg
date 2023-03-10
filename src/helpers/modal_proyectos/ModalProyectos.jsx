import { CarruselModalProyectos } from "../carrusell/CarruselModalProyectos";
import "./ModalProyectos.css";




export const ModalProyectos = ({ img, alt, titulo, area, lugar, foto1, foto2, foto3, foto4 }) => {
    return (<>
        
        <button type="button" className="btn_modal px-0 rounded " data-bs-toggle="modal" data-bs-target={`#${img}`}>
            <img src={ img } alt={ alt } className="rounded-top" />
            <h3 className="fs-5 text-center">{ titulo }</h3>
            <p>{area}</p>
        </button>


        <div className="modal fade modal_proyectos" id={img} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl px-5 px-xxl-0">
                <div className="modal-content">

                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
    
                    <div className="modal-body pt-0 d-flex">

                        <div className="wrapper_images_modal ">
                            <CarruselModalProyectos
                                foto1={ foto1 }
                                foto2={ foto2 }
                                foto3={ foto3 }
                                foto4={ foto4 }
                            />
                        </div>
        
                        <div className="wrapper_textos_modal   ps-5">
                            <div className="testos_modal_subtitulo d-flex gap-2 mb-2">
                                <i className="bi bi-geo-alt-fill"></i>
                                <p>{ lugar }</p>
                            </div>
                            <h3 className="text-start">{ titulo }</h3>
                            <p>Id voluptate deserunt pariatur ut. Ullamco culpa voluptate laboris consequat ullamco ad velit magna ipsum pariatur do et esse adipisicing. Exercitation elit consequat pariatur cupidatat magna.</p>
                            <button className="btn btn-success mt-5">
                                M??s detalles
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
