import "./ModalProyectos.css";
// import LaReina from "../../assets/images/proyecto_la_reina.jpeg";



export const ModalProyectos = ({ img, alt, titulo }) => {
    return (<>
        
        <button type="button" className="btn_modal px-0" data-bs-toggle="modal" data-bs-target={`#${img}`}>
            <img src={ img } alt={ alt } />
        </button>


        <div className="modal fade modal_proyectos" id={img} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body pt-0 d-flex">

                        <div className="wrapper_images_modal ">
                            <img src={ img } alt={ alt } />
                        </div>
        
                        <div className="wrapper_textos_modal   ps-5">
                                <h3 className="text-start">{ titulo }</h3>
                                <p>Id voluptate deserunt pariatur ut. Ullamco culpa voluptate laboris consequat ullamco ad velit magna ipsum pariatur do et esse adipisicing. Exercitation elit consequat pariatur cupidatat magna.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
