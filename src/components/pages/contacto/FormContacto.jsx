import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from '@emailjs/browser';


export const FormContacto = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [asunto, setAsunto] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [activeName, setActiveName] = useState(false);
    const [activeEmail, setActiveEmail] = useState(false);
    const [activeAsunto, setActiveAsunto] = useState(false);
    const [activeMensaje, setActiveMensaje] = useState(false);
    const [errorName, setErrorName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorAsunto, setErrorAsunto] = useState("");
    const [errorMensaje, setErrorMensaje] = useState("");
    const [btnDisable, setBtnDisable] = useState(true);



    const handleInput = (e, setState) => {
        let valor = e.target.value;
        setState(valor);
    }

    const validateName = (e) => {
        const value = e.target.value;
        const regName = /^[a-zA-ZÀ-ÿ]+(?:\s[a-zA-ZÀ-ÿ]+)*$/;

        if(value !== ""){
            if(!regName.test(e.target.value.trim())){
                setActiveName(false);
                setErrorName("Nombre o apellido inválido");
            } else {
                setActiveName(true)
                setErrorName("");
            }
        } else {
            setBtnDisable(true);
            setActiveName(false);
            setErrorName("Debe ingresar su nombre y apellido");
        }
    }

// Validando el input Email...
    function validateEmail(e) {
        const valueEmail = e.target.value.trim();
        const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
        switch(valueEmail.length > 0){
    
            case(valueEmail !== ""):
                if (e.target.type === "email") {
                
                    if (er.test(e.target.value)) {
                        setErrorEmail("");
                        setActiveEmail(true)
    
                    } else {
                        setActiveEmail(false)
                        setErrorEmail("Debe ingresar un email válido")
                    }
                }
                break;
            
            default:
                setActiveEmail(false)
                setErrorEmail("Debe ingresar un email válido");
        }
    }


// Validando los inputs textos
    const validateText = (e, setActive, setError) => {
        const value = e.target.value;

        if(value.trim() !== ""){
            setActive(true)
            setError("");
        } else {
            setActive(false);
            setError("Debe ingresar un texto");
        }
    }


//Mensaje de Toastify que envió el mensaje al correo
    const toastify = () => {
        toast("¡Mensaje enviado con éxito!",{
            type: "success",
            position: "top-center",
            autoClose: 2500,
            pauseOnHover: false,
        })
    }


//Enviando mensaje al correo contacto@ebgchile.cl con Emailjs
    const handleSubmit = async (e) => {
        e.preventDefault();

        emailjs.sendForm('service_website_ebg', 'template_sucdftv', e.target, 'OQL1F1RMUMihmP-q5' )
        .then(response => console.log(response))
        .catch(error => console.log(error));

        setName("");
        setEmail("");
        setAsunto("");
        setMensaje("");
    }


// Validando si los inputs tienen valores para habilitar el btn del form
    useEffect(() => {
        const handleDOMLoaded = () => setBtnDisable(true)

        if((activeName === false) || (activeAsunto === false) || (activeEmail === false) || (activeMensaje === false)) {
            window.addEventListener('DOMContentLoaded', handleDOMLoaded);
            setBtnDisable(true);
        } else {
            window.removeEventListener('DOMContentLoaded', handleDOMLoaded)
            setBtnDisable(false)
        }
        return () => window.removeEventListener('DOMContentLoaded', handleDOMLoaded);
    }, [name, asunto, email, mensaje, activeName, activeAsunto, activeEmail, activeMensaje]);


//Deshabilitar el btn cuando el input name está vacío
    useEffect(() => {
        name === "" && setBtnDisable(true);
    },  [name])
    


    return (<>
        <form
            className="needs-validation w-100 mt-3 pt-1 pb-3 d-flex flex-column gap-4 align-items-center contacto_formulario"
            autoComplete="off"
            id="formContacto"
            onSubmit={ handleSubmit }
            >

            <div className="w-75">
                <label className="form-label">Nombre y apellido:</label>
                <input
                    className={ `form-control-sm w-100 ${ errorName !== "" ? "errorInput" : "input" } ` }
                    type="text" 
                    placeholder="Ejm: Juan Reyes"
                    name="contacto_nombre"
                    value={ name }
                    onChange={ (e) => handleInput(e, setName) }
                    onBlur={ validateName }/>
                <span className="error" >
                    {errorName !== "" ? errorName : ""}
                </span>
                
            </div>

            <div className="w-75">
                <label className="form-label">Correo electrónico:</label>
                <input
                    className={ `form-control-sm w-100 ${ errorEmail !== "" ? "errorInput" : "input" } ` }
                    type="email" 
                    placeholder="Ejm: usuario@correo.com"
                    name="contacto_email"
                    value={ email }
                    onChange={ (e) => handleInput(e, setEmail) }
                    onBlur={ validateEmail }/>
                <span className="error" >
                    {errorEmail !== "" ? errorEmail : ""}
                </span>
            </div>

            <div className="w-75">
                <label className="form-label">Asunto:</label>
                <input
                    className={ `form-control-sm w-100 ${ errorAsunto !== "" ? "errorInput" : "input" } ` }
                    type="text" 
                    placeholder="Ejm: Cotización"
                    name="contacto_asunto"
                    value={ asunto }
                    onChange={ (e) => handleInput(e, setAsunto) }
                    onBlur={ (e) => validateText(e, setActiveAsunto, setErrorAsunto) }/>
                <span className="error" >
                    {errorAsunto !== "" ? errorAsunto : ""}
                </span>
            </div>

            <div className="w-75">
                <label className="form-label">Mensaje:</label>
                <textarea
                    className={ `form-control-sm w-100 ${ errorMensaje !== "" ? "errorInput" : "input" } ` }
                    type="text-area" 
                    placeholder="Escriba su mensaje aquí..."
                    name="contacto_mensaje"
                    value={ mensaje }
                    onChange={ (e) => handleInput(e, setMensaje) }
                    onBlur={ (e) => validateText(e, setActiveMensaje, setErrorMensaje) }
                    rows="4"/>
                <span className="error" >
                    {errorMensaje !== "" ? errorMensaje : ""}
                </span>
            </div>


            <div className={`w-25 ${ btnDisable ? "bloqueado" : "" }`}>
                <button 
                    className={ `btn btn-success mx-auto d-block ` }
                    disabled= { btnDisable }
                    onClick={ toastify }>
                    Enviar
                </button>
            </div>
            <ToastContainer />
        </form>
    </>)
}
