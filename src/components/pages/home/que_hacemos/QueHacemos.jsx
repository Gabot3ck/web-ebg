import { useInView } from 'react-intersection-observer';
import imagen from "../../../../assets/images/serviciosEBG.jpg";
import "./QueHacemos.css";

export const QueHacemos = () => {

	const [ref, inView] = useInView({
    triggerOnce: true, // Para que la animación se ejecute solo una vez
    threshold: 0.05, // Porcentaje de intersección necesario para activar la animación (0.5 es 50%)
  });


	return (<>
		<section
			className={`wrapper_queHacemos w-100 mx-auto d-flex justify-content-center`}
			id='nosotros'
		>

			<main 
				ref={ref}
				className={`main_queHacemos mx-auto  d-flex flex-column 
				${inView ? 'animate__animated animate__fadeInUp' : ''} `}
			>
				<h2 className="text-center text-lg-start py-4 px-4 px-xxl-0 step-7">¿QUE HACEMOS?</h2>

				<section 
					className="main_queHacemos_texto px-4 px-xxl-0 d-flex flex-column flex-lg-row align-items-center justify-content-lg-between"
				>

					<div 
						className={ `order-1 order-lg-0` } 
					>
						<p className="step-3">En <strong>EBG</strong>, como expertos en <strong>Ingeniería y Construcción</strong> nos dedicamos profesionalmente a transformar tus ideas en realidades tangibles, somos especialistas en la ejecución de proyectos de <strong>Obras Civiles</strong>, <strong>Construcción</strong>, <strong>Restauración</strong> y <strong>Remodelación.</strong></p><br />
						<p className="step-3">Nuestro nivel de exigencia y compromiso nos capacita para afrontar cualquier proyecto, convirtiéndonos en el equipo idóneo para este tipo de construcciones.</p> <br />
						<p className="step-3"> Contáctanos hoy mismo y déjanos ser tu socio confiable.</p>
					</div>

					<div className="main_queHacemos_img  d-flex justify-content-center align-items-center order-0 order-lg-1 mb-4 mb-lg-0">
						<img
							src={ imagen } 
							alt="Obras civiles realizadas por EBG Ingeniería y Construcción"
						/>
					</div>
				</section>
				
				<a href='#contacto' className="btn mt-4 btn_contactar  mx-auto ms-lg-4 step-3">Contactar</a>
			</main>

		</section>
	</>)
}
