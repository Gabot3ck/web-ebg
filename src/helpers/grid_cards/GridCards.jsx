import "./GridCards.css"



export const GridCards = ( { img1, alt1, img2, alt2, img3, alt3, row } ) => {


    return (<>
        <div className={`grid_cards_container w-50 h-100 gap-3  d-flex  p-2  ${row}`}>
            <div className="w-50 h-100" >
                <img className="w-100 h-100 " src={ img1 } alt={ alt1 } />
            </div>
            <div className="w-50 h-100 gap-3 d-flex flex-column" >
                <div  className="w-100 h-50 bg-success " >
                    <img className="w-100 h-100 " src={ img2 } alt={ alt2 } />
                </div>
                <div className="w-100 h-50 bg-danger">
                    <img className="w-100 h-100 " src={ img3 } alt={ alt3 } />
                </div>
            </div>
        </div>
    </>)
}
