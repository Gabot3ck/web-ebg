// import { useEffect, useState } from "react";
import "./NuestrosServicios.css";
import { CarruselServicios } from "../../../../helpers/carrusell/CarruselServicios";




export const NuestrosServicios = () => {

  return (<>
    <section className="w-100 wrapper_nuestros_servicios py-5">
      <div className="nuestros_servicios_texto mx-auto">
          <h2 className="text-center">Nuestros Servicios</h2>
          <p className="text-center mx-auto">
            Nuestro enfoque personalizado, combinada con nuestra experiencia y dedicación, garantiza la entrega de soluciones de alta calidad que superan tus expectativas.
          </p>
      </div>

        <CarruselServicios />

    </section>
  </>)
}
