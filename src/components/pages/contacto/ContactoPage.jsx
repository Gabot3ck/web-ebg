import { Nav } from "../../nav/Nav";
import { Footer } from "../footer/Footer";
import { BtnWhatsApp } from "../../../helpers/boton_whatsapp/BtnWhatsApp";
import { Contacto } from "./Contacto";
import "./Contacto.css";


export const ContactoPage = () => {
    return (<>
        <div className="fondo_nav" >

        </div>
        <section className="container_contacto w-100 pt-4">
            <Nav/>
            <Contacto />
            <Footer />
            <BtnWhatsApp />
        </section>
        
        
    </>)
}
