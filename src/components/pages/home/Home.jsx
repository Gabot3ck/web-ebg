import { Nav } from "../../nav/Nav";
import  Video  from "../../../assets/images/video_construccion.mp4";
import Logo from "../../../assets/images/logo-home-vertical.png";
import ImgFondo from "../../../assets/images/imagen_fondo_home.jpg";
import "./Home.css";

export const Home = () => {
    
    return (<>
        <Nav/>
        <header className="wrapper_header_home  d-flex justify-content-center">
            <video className="fondo_header_home" loop autoPlay muted poster={ ImgFondo } >
                <source src="https://www.youtube.com/watch?v=IMCvJVmBB-8" type="video/mp4"/>
                <source src={Video} type="video/webm"/>
                <source src={Video} type="video/ogg"/>
                <img src={ ImgFondo } alt="EBG trabajo de remodelación de cielo raso" />
            </video>
            <div className="header_home mx-auto d-flex justify-content-center" >
                <img className="" src={ Logo } alt="Logotipo EBG Ingeniería y Construcción" />
            </div>
            
        </header>
        
        
    </>)
}
