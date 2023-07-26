import { LinkSecondary } from "../../components/buttons/LinkSecondary";
import { CarruselModalProyectos } from "../carrusell/CarruselModalProyectos";
import "./ModalProyectos.css";




export const ModalProyectos = ({ 
    children,
    img, 
    alt, 
    tituloCard,
    titulo,
    area, 
    lugar, 
    foto1, 
    foto2, 
    foto3, 
    foto4,
    link,
    title}) => {



    return (<>
        
        <button type="button" className="btn_modal px-0 rounded " data-bs-toggle="modal" data-bs-target={`#${img}`}>
            <img src={ img } alt={ alt } className="rounded-top" />
            <h3 className="fs-5 text-center">{ tituloCard }</h3>
            <p>{area}</p>
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
            <div className="modal-dialog modal-xl px-5 px-xxl-0">
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
                            <div className="textos_modal d-flex gap-2 mb-2">
                                <i className="bi bi-geo-alt-fill"></i>
                                <p className="m-0">{ lugar }</p>
                            </div>
                            <h3 className="text-start my-3 titulo_modal ">{ titulo }</h3>
                            <section className="textos_modal mb-5" >
                                { children }
                            </section>
                            <LinkSecondary 
                                link='/'
                                title='más detalles'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
