import styles from './FeedModal.module.css';
import useFetch from '../../Hooks/useFetch';
import { useEffect } from 'react';
import { PHOTO_GET } from '../../api';
import Error from '../Help/Error';
import Loading from '../Help/Loading';
import PhotoContent from '../Photo/PhotoContent';


 const FeedModal = ({photo, setModalPhoto}) =>{
     const {data, error, loading, request} = useFetch();

     useEffect(()=>{
         const {url, options} = PHOTO_GET(photo.id);
         request(url, options);

     }, [photo, request]);

     function handleOutsideClick (event){
         // target seleciona so o elemento de dentro
        console.log('current', event.target);
         // target seleciona todo o elemento
        console.log('currenttraget', event.currentTarget);

        if(event.target === event.currentTarget){
            setModalPhoto(null)
        }
     }

     return(
         <div className={styles.modal} onClick={handleOutsideClick}>
             {error && <Error error={error}/>}
             {loading && <Loading/>}
             {data && <PhotoContent data={data}/>}
         </div>
     )
}

export default FeedModal;