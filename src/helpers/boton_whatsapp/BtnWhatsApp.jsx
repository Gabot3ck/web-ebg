import "./BtnWhatsApp.css";

export const BtnWhatsApp = () => {
    return (<>
        <div className="btn-whatsapp">
            <a 
                href="https://api.whatsapp.com/send?phone=+56920509410&text= Estimados EBG, nececito que me puedan ayudar con:" 
                target="_blank" 
                rel="noopener noreferrer">
                    <i className="bi bi-whatsapp"></i>
            </a>
            <div className="caja d-flex justify-content-center"  >
                <span>
                    1
                </span>
            </div>
        </div>
    </>)
}
