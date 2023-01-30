import "./CardStandares.css"

export const CardStandares = ( { icono, titulo, texto } ) => {
    return (<>
        <div className="col-md-6 col-12 col-lg-3 px-lg-0 card_standard">
            <div className="card py-3 text-center h-100">
                <div className="card-body">
                    <i className={`fas ${icono}`}></i>
                    <h3 className="card-title my-3 ">{ titulo }</h3>
                    <p className="card-text ">{ texto }</p>
                </div>
            </div>
        </div>
    </>)
}
