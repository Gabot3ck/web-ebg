import { HeaderHome } from "./header_home/HeaderHome";
import { Nav } from "../../nav/Nav";
import "./Home.css";
import { QueHacemos } from "./que_hacemos/QueHacemos";
import { DatosEstadisticos } from "./estadistica/DatosEstadisticos";
import { AlgunosTrabajos } from "./trabajos/AlgunosTrabajos";

export const Home = () => {
    
    return (<>
        <Nav/>
        <HeaderHome/>
        <QueHacemos/>
        <DatosEstadisticos/>
        <AlgunosTrabajos/>
        
    </>)
}
