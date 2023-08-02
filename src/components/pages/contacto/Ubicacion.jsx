
import { BsEnvelopeAtFill, BsTelephoneFill, BsGlobe2 } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Contacto.css"

export const Ubicacion = () => {



    return (<>
        <section className="w-100 d-flex flex-column h-100 gap-5">

            <div className="d-flex flex-column flex-sm-row gap-4 justify-content-between datos">

                <div className="contacto d-flex flex-column">
                    <p className="h5 mb-3" >Información de contacto</p>
                    <div className="correo d-flex">
                        <span className="me-2 icon-contacto" > <BsEnvelopeAtFill /> </span> 
                        <p className="">contacto@ebgchile.cl</p>
                    </div>
                    <div className="fono d-flex">
                        <span className="me-2 icon-contacto" > <BsTelephoneFill /> </span> 
                        <p className="">{`+56 2 3305 4785`}</p>
                    </div>
                    <div className="web d-flex">
                        <span className="me-2 icon-contacto" > <BsGlobe2 /> </span> 
                        <p className="">www.ebgchile.cl</p>
                    </div>
                </div>

                <div className="direccion">
                    <p className="h5 mb-3" >Dirección</p>
                    <div className="direccion d-flex">
                        <span className="me-2 icon-contacto" > <FaMapMarkerAlt /> </span> 
                        <p className="">Av. Fernández Albano 856 <br/> La Cisterna, Santiago RM <br/> Chile.</p>
                    </div>
                </div>
            </div>

            <div className="mapa w-100 wrapper_mapa">
                <iframe
                className="w-100 h-100"
                title="Ubicación de EBG Ingeniería y Construcción"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.0804124677616!2d-70.65204748492219!3d-33.52529488075252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662daf3ea337c7d%3A0x3a07585764cdc7e!2sAv.%20Fernandez%20Albano%20856%2C%20La%20Cisterna%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1635643902533!5m2!1ses-419!2scl" allowFullScreen="" loading="lazy" />
            </div>
        </section>
    </>)
}
