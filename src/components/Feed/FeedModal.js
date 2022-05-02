import styles from './FeedModal.module.css';
import useFetch from '../../Hooks/useFetch';
import { useEffect } from 'react';
import { PHOTO_GET } from '../../api';
import Error from '../Help/Error';
import Loading from '../Help/Loading';
import PhotoContent from '../Photo/PhotoContent';


 const FeedModal = ({photo}) =>{
     const {data, error, loading, request} = useFetch();

     useEffect(()=>{
         const {url, options} = PHOTO_GET(photo.id);
         request(url, options);

     }, [photo, request]);
     return(
         <div className={styles.modal}>
             {error && <Error error={error}/>}
             {loading && <Loading/>}
             {data && <PhotoContent data={data}/>}
         </div>
     )
}

export default FeedModal;