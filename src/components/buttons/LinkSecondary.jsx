import { Link } from 'react-router-dom';
import styles from './Buttons.module.css';



export const LinkSecondary = ( { link, title } ) => {
  return (
    <Link 
      to={ link } 
      className={` ${styles.linkSecondary} d-flex justify-content-center align-items-center`} 
    >
      { title }
    </Link>
  )
}
