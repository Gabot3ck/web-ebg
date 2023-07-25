import dominion from "../../../../assets/images/clientes/dominion.svg";
import enel from "../../../../assets/images/clientes/enel.svg";
import engie from "../../../../assets/images/clientes/engie.svg";
import metro from "../../../../assets/images/clientes/metro.svg";
import muni from "../../../../assets/images/clientes/muni.svg";
import "./Clientes.css";

export const Clientes = () => {


    return (<>
        <section className="wrapper_clientes w-100 mb-5">
            <div className="clientes_texto mx-auto mb-4">
                <h2 className="text-center">Nuestros Clientes</h2>
            </div>
            <div className="clientes_logos d-flex justify-content-between mx-auto">
                    <img src={ dominion } alt="Logo de Dominion" />
                    <img src={ enel } alt="Logo de ENEL" />
                    <img src={ engie } alt="Logo de Engie" />
                    <img src={ metro } alt="Logo de Metro" />
                    <img src={ muni } alt="Logo de Municipalidad" />
            </div>
        </section>
    </>)
}
