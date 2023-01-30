import { HeaderHome } from "./header_home/HeaderHome";
import { Nav } from "../../nav/Nav";
import "./Home.css";
import { QueHacemos } from "./que_hacemos/QueHacemos";
import { DatosEstadisticos } from "./estadistica/DatosEstadisticos";
import { AlgunosTrabajos } from "./trabajos/AlgunosTrabajos";
import { PorQueNosotros } from "./por_que_nosotros/PorQueNosotros";

export const Home = () => {
    
    return (<>
        <Nav/>
        <HeaderHome/>
        <QueHacemos/>
        <DatosEstadisticos/>
        <AlgunosTrabajos/>
        <PorQueNosotros/>
        
    </>)
}
