import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../Hooks/useFetch";
import { useEffect } from "react";
import {PHOTOS_GET} from '../../api'
import Error from '../Help/Error';
import Loading from "../Help/Loading";
import styles from './FeedPhotos.module.css';


const FeedPhotos = ({setModalPhoto}) =>{
     const {data, error, loading, request} = useFetch();

     useEffect(()=>{
         async function fetchPhotos(){
             // user: 0 pega todos os usarios
             const {url, options} = PHOTOS_GET({page: 1, total: 6, user: 0});
             const {response, json} = await request(url, options);
             console.log(json)
         }
         fetchPhotos();
     }, [request]);

     if(error){
         return(
             <Error error={error}/>
         )
     }

     if(loading){
         return(
             <Loading />
         )
     }

     if(data){
        return(
            <ul className={`${styles.feed} animeLeft`}>
                {data.map(photo => <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto}/> )}
            </ul>
        )
     }else return null;
     

}

export default FeedPhotos;