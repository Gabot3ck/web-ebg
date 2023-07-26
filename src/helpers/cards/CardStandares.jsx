import "./CardStandares.css"

export const CardStandares = ( { icono, titulo, texto } ) => {
    return (<>
        <div className="col-md-6 col-12 col-lg-3 px-lg-0 card_standard">
            <div className="card py-0 py-md-3 text-center h-100">
                <div className="card-body">
                    <span className="step-8 color_icon" > { icono } </span>
                    <h3 className="card-title my-3 step-5">{ titulo }</h3>
                    <p className="card-text step-2">{ texto }</p>
                </div>
            </div>
        </div>
    </>)
}
