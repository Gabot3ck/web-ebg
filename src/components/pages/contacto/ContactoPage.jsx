import { Nav } from "../../nav/Nav";
import { Footer } from "../footer/Footer";
import { BtnWhatsApp } from "../../../helpers/boton_whatsapp/BtnWhatsApp";
import { Contacto } from "./Contacto";
import "./Contacto.css";


export const ContactoPage = () => {
    return (<>
        
        <section className="container_contacto  w-100 d-flex flex-column justify-content-between">
            <div className="fondo_nav mb-4 mb-lg-3" >
            </div>
            <Nav/>
            <Contacto />
            <Footer />
            <BtnWhatsApp />
        </section>
        
        
    </>)
}
