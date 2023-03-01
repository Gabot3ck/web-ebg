import { Nav } from "../../nav/Nav";
import { Footer } from "../footer/Footer";
import { FormContacto } from "./FormContacto";
import { Ubicacion } from "./Ubicacion";
import { BtnWhatsApp } from "../../../helpers/boton_whatsapp/BtnWhatsApp";
import "./Contacto.css";


export const Contacto = () => {
    return (<>
        <div className="fondo_nav" >

        </div>
        <section className="container_contacto w-100 pt-4">
            <Nav/>
            <h1 className="mx-auto text-center mb-4" >Contáctenos</h1>
            <div className="wrapper_contacto d-flex gap-3 justify-content-between mx-auto py-3">

                <div className="contacto_formulario w-50 d-flex flex-column">
                    <p className="" >
                    Llame o envíe nuestro formulario en línea para solicitar un presupuesto o para preguntas generales, dudas o consultas. <br /> ¡Esperamos poder servirle!
                    </p>
                    <FormContacto />
                </div>

                <div className="contacto_ubicacion w-50 d-flex flex-column">
                    <p className="text-center h4 mb-3">Ubíquenos</p>
                    <Ubicacion />
                </div>
            </div>
            <Footer />
            <BtnWhatsApp />
        </section>
        
        
    </>)
}
