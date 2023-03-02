import { GridCards } from "../../../../helpers/grid_cards/GridCards";
import { Nav } from "../../../nav/Nav";
import { Footer } from "../../footer/Footer";
import viales1 from "../../../../assets/images/servicios/viales1.jpg";
import viales2 from "../../../../assets/images/servicios/viales2.jpg";
import electrico1 from "../../../../assets/images/servicios/obras_electricas1.jpg";
import electrico2 from "../../../../assets/images/servicios/obras_electricas2.jpg";
import sanitarias1 from "../../../../assets/images/servicios/obras_sanitarias1.jpg";
import sanitarias2 from "../../../../assets/images/servicios/obras_sanitarias2.jpg";

import "./ObrasCiviles.css";



export const ObrasCiviles = () => {


    return (<>
        <Nav/>
        <section className="oocc w-100 d-flex justify-content-center align-items-center" >

            <div className="wrapper_oocc py-5 d-flex align-items-end">
                <div className="wrapper_fotos w-100  py-1 d-flex ">
                    <GridCards 
                        row="flex-row"
                        img1={ viales1 }
                        alt1="Obra Viales"
                        img2={ sanitarias2 }
                        alt2="Obra Sanitarias"
                        img3={ viales2 }
                        alt3="Obras Viales"
                        />
                    <GridCards 
                        row="flex-row-reverse" 
                        img1={ electrico1 }
                        alt1="Obras Eléctricas"
                        img2={ sanitarias1 }
                        alt2="Obras Sanitarias"
                        img3={ electrico2 }
                        alt3="Obras Sanitarias"
                        />
                </div>
            </div>
            
        </section>
        <Footer/>
        
    </>)
}
