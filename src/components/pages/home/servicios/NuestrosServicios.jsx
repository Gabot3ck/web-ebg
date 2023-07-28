import "./NuestrosServicios.css";
import { CarruselServicios } from "../../../../helpers/carrusell/CarruselServicios";


export const NuestrosServicios = () => {

  

  return (<>
    <section className="w-100 wrapper_nuestros_servicios pt-5 d-flex flex-column justify-content-between" id="servicios">
      <div className="nuestros_servicios_texto mx-auto">
        <h2 className="text-center step-7 pt-4 pt-lg-5">Nuestros Servicios</h2>
        <p className="text-center mx-auto step-3">
          Nuestro enfoque personalizado, combinada con nuestra experiencia y dedicación, garantiza la entrega de soluciones de alta calidad que superan tus expectativas.
        </p>
      </div>
      <CarruselServicios />
    </section>
  </>)
}
