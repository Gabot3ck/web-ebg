import { Nav } from "../../nav/Nav";
import  Video  from "../../../assets/images/video_construccion.mp4"
import "./Home.css";

export const Home = () => {
    
    return (<>
        <Nav/>
        <header className="header_home">
            <video className="fondo_header_home" loop autoPlay muted poster="https://carontestudio.com/img/contacto.jpg">
                <source src={Video} type="video/mp4"/>
            </video>
            <h1>EBG Ingeniería y Construcción</h1>
        </header>
        
        
    </>)
}
