import { GridCards } from "../../../../helpers/grid_cards/GridCards";
import { Nav } from "../../../nav/Nav";
import { Footer } from "../../footer/Footer";
import viales1 from "../../../../assets/images/servicios/viales1.jpg";
import viales2 from "../../../../assets/images/servicios/viales2.jpg";
import electrico1 from "../../../../assets/images/servicios/obras_electricas1.jpg";
import electrico2 from "../../../../assets/images/servicios/obras_electricas2.jpg";
import sanitarias1 from "../../../../assets/images/servicios/obras_sanitarias1.jpg";
import sanitarias2 from "../../../../assets/images/servicios/obras_sanitarias2.jpg";
import 'animate.css';
import "./ObrasCiviles.css";



export const ObrasCiviles = () => {


    return (<>
        <Nav/>
        <section className="oocc w-100 d-flex justify-content-center align-items-center" >

            <div className="wrapper_oocc py-5 d-flex align-items-center justify-content-center gap-3 flex-column">
                <h1 className="titulo px-5 fs-3 ">Obras Civiles</h1>
                <div className="wrapper_fotos w-100  py-1 d-flex animate__animated animate__backInUp">
                    <GridCards 
                        row="flex-row"
                        img1={ viales1 }
                        alt1="Obra Viales"
                        img2={ sanitarias2 }
                        alt2="Obra Sanitarias"
                        img3={ viales2 }
                        alt3="Obras Viales"
                        link1="obras_viales"
                        link2="obras_sanitarias"
                        link3="obras_viales"
                        />
                    <GridCards 
                        row="flex-row-reverse" 
                        img1={ electrico1 }
                        alt1="Obras Eléctricas"
                        img2={ sanitarias1 }
                        alt2="Obras Sanitarias"
                        img3={ electrico2 }
                        alt3="Obras Eléctricas"
                        link1="obras_electricas"
                        link2="obras_sanitarias"
                        link3="obras_electricas"
                        />
                </div>
            </div>
            
        </section>
        <Footer/>
        
    </>)
}
