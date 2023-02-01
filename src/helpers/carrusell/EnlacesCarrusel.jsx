import "./CarruselServicios.css";

export const EnlacesCarrusel = ({  className, onClick, index }) => {

    const agregarIcon = id => {
        
        switch (id) {
            case 0:{
                let icon = "fas fa-paste";
                return icon;
                }
            case 1:{
                let icon = "fas fa-faucet";
                return icon;
            }
            case 2:{
                let icon = "far fa-building";
                return icon;
            }
            case 3:{
                let icon = "fas fa-tools";
                return icon;
            }
            case 4:{
                let icon = "fas fa-bacon";
                return icon;
            }
            case 5:{
                let icon = "fas fa-warehouse";
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
                let icon = "CONSULTORÍA";
                return icon;
                }
            case 1:{
                let icon = "AGUA Y ALCANTARILLADO";
                return icon;
            }
            case 2:{
                let icon = "EDIFICACIÓN";
                return icon;
            }
            case 3:{
                let icon = "ESTRUCTURAS METÁLICAS";
                return icon;
            }
            case 4:{
                let icon = "CAMINOS";
                return icon;
            }
            case 5:{
                let icon = "MÓDULOS DE CONTAINER";
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
