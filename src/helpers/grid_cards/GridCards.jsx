import { Link } from "react-router-dom"
import "./GridCards.css"



export const GridCards = ( { img1, alt1, img2, alt2, img3, alt3, row , link1, link2, link3} ) => {


    return (<>
        <div className={`grid_cards_container w-50 h-100 gap-3  d-flex  p-2  ${row}`}>
            
            <Link to={`/oocc/${link1}`} className="w-50 h-100 wrapper_img wrapper" >
                <span className=" w-100 text-center m-0" > {alt1} </span>
                <img className="w-100 h-100 " src={ img1 } alt={ alt1 } />
            </Link>
            
            
            <div className="w-50 h-100 gap-3 d-flex flex-column wrapper" >

                <Link
                    to={`/oocc/${link2}`}
                    className="w-100 h-50  wrapper_img wrapper_child" >
                    <span className=" w-100 text-center m-0" > {alt2} </span>
                    <img className="w-100 h-100 " src={ img2 } alt={ alt2 } />
                </Link>

                <Link 
                to={`/oocc/${link3}`}
                className="w-100 h-50 wrapper_img wrapper_child">
                    <span className=" w-100 text-center m-0" > {alt3} </span>
                    <img className="w-100 h-100 " src={ img3 } alt={ alt3 } />
                </Link>

            </div>
        </div>
    </>)
}
