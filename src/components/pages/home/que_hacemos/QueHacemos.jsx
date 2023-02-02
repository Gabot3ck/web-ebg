import { Link } from "react-router-dom";
import imgHerramientas from "../../../../assets/images/herramientas.png"
import "./QueHacemos.css";

export const QueHacemos = () => {
	return (<>
		<section className="wrapper_queHacemos w-100 mx-auto d-flex justify-content-center ">

			<main className="main_queHacemos ps-5 ps-xxl-0">
				<div className="main_queHacemos_texto">
					<h2 className="text-start py-4 ">¿QUE HACEMOS?</h2>
					<p className="text-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.</p>
					<Link className="btn btn-success mt-4">Acerca de nosotros</Link>
				</div>
				<div className="main_queHacemos_img  d-flex justify-content-center">
					<img src={ imgHerramientas } alt="Herramientas usadas en la remodelaciones de EBG Chile" />
				</div>
				
			</main>
		</section>
	</>)
}
