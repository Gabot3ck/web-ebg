import { HeaderHome } from "./header_home/HeaderHome";
import { Nav } from "../../nav/Nav";
import { QueHacemos } from "./que_hacemos/QueHacemos";
import { DatosEstadisticos } from "./estadistica/DatosEstadisticos";
import { AlgunosTrabajos } from "./trabajos/AlgunosTrabajos";
import { PorQueNosotros } from "./por_que_nosotros/PorQueNosotros";
import { NuestrosServicios } from "./servicios/NuestrosServicios";
import { Clientes } from "./clientes/Clientes";
import { Footer } from "../footer/Footer";
import { BtnWhatsApp } from "../../../helpers/boton_whatsapp/BtnWhatsApp";
import { Contacto } from "../contacto/Contacto";


export const Home = () => {
    
    return(
        <>
            <Nav />
            <HeaderHome />
            <QueHacemos />
            <PorQueNosotros />
            <NuestrosServicios />
            <AlgunosTrabajos />
            <Clientes />
            <DatosEstadisticos />
            <Contacto />
            <Footer />
            <BtnWhatsApp />
        </>
        
    )
}
