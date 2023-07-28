import { useInView } from 'react-intersection-observer';
import { FormContacto } from './FormContacto'
import { Ubicacion } from './Ubicacion'

export const Contacto = () => {

  const [ref, inView] = useInView({
    triggerOnce: true, // Para que la animación se ejecute solo una vez
    threshold: 0.05, // Porcentaje de intersección necesario para activar la animación (0.5 es 50%)
});


  return (<>
    <h2 className="mx-auto text-center mb-4 title_contacto step-7 pt-4 pt-lg-5" id='contacto'>CONTÁCTENOS</h2>
    <div
      ref={ ref } 
      className={`mx-auto py-3 wrapper_contacto d-flex flex-column flex-lg-row gap-3 justify-content-between align-items-center
      ${inView ? 'animate__animated animate__fadeInUp animate__delay-1s' : ''}`}
    >
      <div
        
        className={ `contacto_formulario d-flex flex-column justify-content-center
        ${inView ? 'animate__animated animate__fadeInUp animate__delay-1s' : ''}` }
      >
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
