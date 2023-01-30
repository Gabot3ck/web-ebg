import { CardStandares } from "../../../../helpers/odometro/cards/CardStandares";
import "./PorQueNosotros.css";

export const PorQueNosotros = () => {
    return (<>
        <section className="w-100 wrapper_porque_nosotros py-5">
            <div className="porque_nosotros_texto mx-auto">
                <h2 className="text-center">Por Qué Nosotros</h2>
                <p className="text-center mx-auto">Nuestra empresa se rige por estándares internacionales que aseguran la compatibilidad con el medioambiente, y la seguridad de nuestros trabajadores, clientes y proveedores.</p>
            </div>

            <div className="container">
                <div class="row px-5 px-xxl-0 row-cols-1 row-cols-md-2 g-4">
                    <CardStandares 
                        icono="fa-globe-americas"
                        titulo="Medio Ambiente"
                        texto="Lorem ipsum dolor sit amet consectetur adipisicing, elit. Ducimus at iure accusamus neque molestias dicta! Repudiandae."
                    />

                    <CardStandares 
                        icono="fa-users"
                        titulo="Comunidad"
                        texto="Lorem ipsum dolor sit amet consectetur adipisicing, elit. Ducimus at iure accusamus neque molestias dicta! Repudiandae."
                    />

                    <CardStandares 
                        icono="fa-hard-hat"
                        titulo="Seguridad"
                        texto="Lorem ipsum dolor sit amet consectetur adipisicing, elit. Ducimus at iure accusamus neque molestias dicta! Repudiandae."
                    />

                    <CardStandares 
                        icono="fa-award"
                        titulo="Valores"
                        texto="Lorem ipsum dolor sit amet consectetur adipisicing, elit. Ducimus at iure accusamus neque molestias dicta! Repudiandae."
                    />
                </div>
            </div>
        </section>
    </>)
}
