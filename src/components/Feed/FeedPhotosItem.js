import styles from './FeedPhotosItem.module.css';
import Image from '../Help/Image';


const FeedPhotosItem = ({id, photo, setModalPhoto}) =>{

    function handleClick(){
        setModalPhoto(photo)
    }

     return(
         <li className={styles.photo} onClick={handleClick}>
             <Image  src={photo.src} alt={photo.title} />
             <span>{photo.acessos}</span>
         </li>
     )
}

export default FeedPhotosItem;