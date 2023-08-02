import { FaPersonDigging, FaBuilding, FaWarehouse, FaPaste } from "react-icons/fa6";
import "./Carrusel.css";

export const EnlacesCarrusel = ({  className, onClick, index }) => {

    const agregarIcon = id => {
        
        switch (id) {
            case 0:{
                let icon = <FaPersonDigging />;
                return icon;
                }
            case 1:{
                let icon = <FaBuilding />;
                return icon;
            }
            case 2:{
                let icon = <FaWarehouse />;
                return icon;
            }
            case 3:{
                let icon = <FaPaste />;
                return icon;
            }
            default:{ 
                let icon = " ";
                return icon;
            }
        }
    }

    const agregarTitulo = id => {
        
        switch (id) {
            case 0:{
                let icon = "OBRAS CIVILES";
                return icon;
                }
            case 1:{
                let icon = "EDIFICACIÓN Y REMODELACIÓN";
                return icon;
            }
            case 2:{
                let icon = "OBRAS INDUSTRIALES";
                return icon;
            }
            case 3:{
                let icon = "ASESORÍA";
                return icon;
            }
            default:{ 
                let icon = " ";
                return icon;
            }
        }
    }

    return (<>
            <button 
                href={`slide${ index }`} 
                className={ className }  
                id={ index } 
                data-bs-target="#myCarousel" 
                data-bs-slide-to={ index }
                onClick={ onClick }>
                    { agregarIcon(index) } { agregarTitulo(index) }
            </button>
    </>)
}
