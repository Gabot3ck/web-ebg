

export const CarruselModalProyectos = ({ foto1, foto2, foto3 }) => {
    return (<>
        <section className="wrapper_carrusel_modal mx-auto">

            <div id="carruselPoyectos" className="carousel slide carousel-fade w-100" data-bs-touch="true" data-bs-ride="false">
            
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={foto1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={foto2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={foto3} className="d-block w-100" alt="..."/>
                    </div>
                </div>

                <div className=" container-carrusel-modal py-3 d-flex justify-content-evenly w-100">
                    <button 
                        href="slide0" 
                        className="active" 
                        id="0"
                        data-bs-target="#carruselPoyectos"
                        data-bs-slide-to="0"
                        aria-current="true"
                        >
                        <img src={ foto1 } alt="" />
                    </button>

                    <button 
                        href="slide1" 
                        className="" 
                        id="1"
                        data-bs-target="#carruselPoyectos"
                        data-bs-slide-to="1"
                        >
                        <img src={ foto2 } alt="" />
                    </button>

                    <button 
                        href="slide2" 
                        className="" 
                        id="2"
                        data-bs-target="#carruselPoyectos"
                        data-bs-slide-to="2"
                        >
                        <img src={ foto3 } alt="" />
                    </button>
                </div>
            </div>
        </section>
    </>)
}
