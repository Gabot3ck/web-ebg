import { HeaderHome } from "./header_home/HeaderHome";
import { Nav } from "../../nav/Nav";
import "./Home.css";
import { QueHacemos } from "./que_hacemos/QueHacemos";
import { Odometro } from "../../../helpers/Odometro";

export const Home = () => {
    
    return (<>
        <Nav/>
        <HeaderHome/>
        <QueHacemos/>
        <Odometro inicia={12} termina={98}/>
        
    </>)
}
