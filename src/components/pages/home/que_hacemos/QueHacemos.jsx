import { Link } from "react-router-dom";
import imgHerramientas from "../../../../assets/images/herramientas.png"
import "./QueHacemos.css";

export const QueHacemos = () => {
	return (<>
		<section className="wrapper_queHacemos w-100 mx-auto d-flex justify-content-center ">

			<main className="main_queHacemos ps-5 ps-xxl-0">
				<section className="main_queHacemos_texto">
					<h2 className="text-start py-4 ">¿QUE HACEMOS?</h2>
					{/* <p className="text-start">Nuestro objetivo principal, es brindar un servicio de calidad a nuestros clientes, entendiendo que de nuestro desempeño depende el desarrollo y éxito de los proyectos y objetivos de los mismos, para lo anterior hemos fijado estándares de calidad y compromiso de alto nivel.</p> */}
					<p className="text-start">En <strong>EBG Chile</strong>, como expertos en ingeniería y construcción nos dedicamos apasionadamente a transformar tus ideas en realidades tangibles, ofrecemos una amplia gama de servicios para cubrir todas tus necesidades en el campo de la edificación.</p><br />
					<p className="text-start">Con nuestras habilidades en <em>obras civiles</em>, <em>construcción</em>, remodelación y asesoría, estamos comprometidos en superar tus expectativas y entregar resultados excepcionales. </p>
					<Link className="btn btn-success mt-4">Acerca de nosotros</Link>
				</section>
				<div className="main_queHacemos_img  d-flex justify-content-center">
					<img src={ imgHerramientas } alt="Herramientas usadas en la remodelaciones de EBG Chile" />
				</div>
				
			</main>
		</section>
	</>)
}
