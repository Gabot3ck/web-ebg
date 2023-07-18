import { Link } from "react-router-dom";
import styles from './Buttons.module.css';


export const LinkPrimary = ( { link, title } ) => {


  return (
    <Link 
      to={ link } 
      className={` ${styles.linkPrimary} d-flex justify-content-center align-items-center`} 
    >
      { title }
    </Link>
  )
}
