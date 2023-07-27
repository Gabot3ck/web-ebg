import React from 'react'
import { FormContacto } from './FormContacto'
import { Ubicacion } from './Ubicacion'

export const Contacto = () => {


  return (<>
    
    <h2 className="mx-auto text-center mb-4 title_contacto step-7 pt-4 pt-lg-5" id='contacto'>CONTÁCTENOS</h2>
    <div className="mx-auto py-3 wrapper_contacto d-flex flex-column flex-lg-row gap-3 justify-content-between align-items-center">
      <div className="contacto_formulario d-flex flex-column justify-content-center ">
        <p className="" >
        Llame o envíe nuestro formulario en línea para solicitar un presupuesto o para preguntas generales, dudas o consultas. <br /> ¡Esperamos poder servirle!
        </p>
        <FormContacto />
      </div>

      <div className="contacto_ubicacion d-flex flex-column">
        <p className="text-center h4 mb-3">Ubíquenos</p>
        <Ubicacion />
      </div>
    </div>
  </>
    
  )
}
