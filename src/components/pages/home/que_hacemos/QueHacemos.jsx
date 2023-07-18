import { Link } from "react-router-dom";
import imagen from "../../../../assets/images/serviciosEBG.jpg"
import "./QueHacemos.css";

export const QueHacemos = () => {
	return (<>
		<section className="wrapper_queHacemos w-100 mx-auto d-flex justify-content-center ">

			<main className="main_queHacemos ps-5 ps-xxl-0">
				<section className="main_queHacemos_texto">
					<h2 className="text-start py-4 ">¿QUE HACEMOS?</h2>
					<p className="text-start">En <strong>EBG Chile</strong>, como expertos en <strong>ingeniería y construcción</strong> nos dedicamos apasionadamente a transformar tus ideas en realidades tangibles, ofrecemos una amplia gama de servicios para cubrir todas tus necesidades en el campo de la edificación.</p><br />
					<p className="text-start">Con nuestras habilidades en <em>obras civiles</em>, <em>construcción</em>, remodelación y asesoría, estamos comprometidos en superar tus expectativas y entregar resultados excepcionales. </p> <br />
					<p className="text-start"> Contáctanos hoy mismo y déjanos ser tu socio confiable.</p>
					<Link to={'/contacto'} className="btn btn-success mt-4">Contactar</Link>
				</section>
				<div className="main_queHacemos_img  d-flex justify-content-center">
					<img src={ imagen } alt="Herramientas usadas en la remodelaciones de EBG Chile" height={350} />
				</div>
				
			</main>
		</section>
	</>)
}
