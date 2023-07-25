import { Link } from "react-router-dom";
import imagen from "../../../../assets/images/serviciosEBG.jpg"
import "./QueHacemos.css";

export const QueHacemos = () => {
	return (<>
		<section className="wrapper_queHacemos w-100 mx-auto d-flex justify-content-center ">

			<main className="main_queHacemos mx-auto  d-flex flex-column ">
				<h2 className="text-center text-lg-start py-4 px-4 px-xxl-0 step-7">¿QUE HACEMOS?</h2>

				<section className="main_queHacemos_texto px-4 px-xxl-0 d-flex flex-column flex-lg-row align-items-center justify-content-lg-between">

					<div className="order-1 order-lg-0" >
						<p className="step-3">En <strong>EBG Chile</strong>, como expertos en <strong>Ingeniería y Construcción</strong> nos dedicamos profesionalmente a transformar tus ideas en realidades tangibles, ofrecemos una amplia gama de servicios para cubrir todas tus necesidades en el campo de la edificación.</p><br />
						<p className="step-3">Con nuestras habilidades en <em>obras civiles</em>, <em>construcción</em>, remodelación y asesoría, estamos comprometidos en superar tus expectativas y entregar resultados excepcionales. </p> <br />
						<p className="step-3"> Contáctanos hoy mismo y déjanos ser tu socio confiable.</p>
					</div>

					<div className="main_queHacemos_img  d-flex justify-content-center align-items-center order-0 order-lg-1 mb-4 mb-lg-0">
						<img src={ imagen } alt="Herramientas usadas en la remodelaciones de EBG Chile"  />
					</div>
				</section>
				
				<Link to={'/contacto'} className="btn btn-success mt-4 btn_contactar  mx-auto ms-lg-4 step-3">Contactar</Link>
			</main>

		</section>
	</>)
}
