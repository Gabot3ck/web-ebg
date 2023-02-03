

export const CarruselModalProyectos = ({ foto1, foto2, foto3, foto4 }) => {
    return (<>
        <section className="wrapper_carrusel_modal mx-auto">

            <div id={ foto1 } className="carousel slide carousel-fade w-100" data-bs-touch="true" data-bs-ride="false">
            
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
                    <div className="carousel-item">
                        <img src={foto4} className="d-block w-100" alt="..."/>
                    </div>
                </div>

                <div className=" carrusel-modal-btns py-3 d-flex justify-content-evenly w-100">
                    
                    <button 
                        href="slide0" 
                        className="" 
                        data-bs-target={`#${foto1}`}
                        data-bs-slide-to="0"
                        >
                        <img src={ foto1 } alt="" />
                    </button>
                    
                    <button 
                        href="slide1" 
                        className="active" 
                        data-bs-target={`#${foto1}`}
                        data-bs-slide-to="1"
                        aria-current="true"
                        >
                        <img src={ foto2 } alt="" />
                    </button>

                    <button 
                        href="slide2" 
                        className="" 
                        data-bs-target={`#${foto1}`}
                        data-bs-slide-to="2"
                        >
                        <img src={ foto3 } alt="" />
                    </button>

                    <button 
                        href="slide3" 
                        className="" 
                        data-bs-target={`#${foto1}`}
                        data-bs-slide-to="3"
                        >
                        <img src={ foto4 } alt="" />
                    </button>
                </div>
            </div>
        </section>
    </>)
}
