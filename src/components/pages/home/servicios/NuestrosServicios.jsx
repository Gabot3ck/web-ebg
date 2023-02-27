// import { useEffect, useState } from "react";
import "./NuestrosServicios.css";
import { CarruselServicios } from "../../../../helpers/carrusell/CarruselServicios";




export const NuestrosServicios = () => {

    
    return (<>
        <section className="w-100 wrapper_nuestros_servicios py-5">
            <div className="nuestros_servicios_texto mx-auto">
                <h2 className="text-center">Nuestros Servicios</h2>
                <p className="text-center mx-auto">
                    Nuestra empresa se rige por estándares internacionales que aseguran la compatibilidad con el medioambiente, y la seguridad de nuestros trabajadores, clientes y proveedores.
                </p>
            </div>
            
            
            <CarruselServicios />

        </section>

    </>)
}
