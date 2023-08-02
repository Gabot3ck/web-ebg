import { BsWhatsapp } from "react-icons/bs";
import "./BtnWhatsApp.css";

export const BtnWhatsApp = () => {
    return (<>
        <div className="btn-whatsapp">
            <a 
                href="https://api.whatsapp.com/send?phone=+56942905519&text= Estimados EBG, necesito que me puedan ayudar con:" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Enlace al WhatsApp de EBG Ingeniería y Construcción"
                className="w-100 h-100 d-flex justify-content-center  align-items-center whatsapp"
            >
                <BsWhatsapp />
            </a>
            <div className="caja d-flex justify-content-center"  >
                <span>
                    1
                </span>
            </div>
        </div>
    </>)
}
