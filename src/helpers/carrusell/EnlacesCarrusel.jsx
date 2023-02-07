import "./Carrusel.css";

export const EnlacesCarrusel = ({  className, onClick, index }) => {

    const agregarIcon = id => {
        
        switch (id) {
            case 0:{
                let icon = "fa-solid fa-person-digging";
                return icon;
                }
            case 1:{
                let icon = "far fa-building";
                return icon;
            }
            case 2:{
                let icon = "fas fa-warehouse";
                return icon;
            }
            case 3:{
                let icon = "fas fa-paste";
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
                    <i className={ agregarIcon(index) } ></i>{ agregarTitulo(index) }
            </button>
    </>)
}
