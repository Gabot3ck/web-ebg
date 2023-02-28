import { useEffect, useState } from "react";


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
            setActiveName(false);
            setErrorName("Debe ingresar su nombre y apellido");
        }
    }

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

    const onClick = () => {
        console.log(name);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }


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



    return (<>
        <form
            className="needs-validation w-100 mt-3 pt-1 pb-3 d-flex flex-column gap-4 align-items-center contacto_formulario"
            autoComplete="off"
            id="formContacto"
            onSubmit={ handleSubmit }>

            <div className="w-75">
                <label className="form-label">Nombre y apellido:</label>
                <input
                    className={ `form-control-sm w-100 ${ errorName !== "" ? "errorInput" : "input" } ` }
                    type="text" 
                    placeholder="Ejm: Juan Reyes"
                    name=""
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
                    name=""
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
                    name=""
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
                    name=""
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
                    onClick={ onClick }
                    disabled= { btnDisable }>
                    Enviar
                </button>
            </div>
        </form>
    </>)
}
